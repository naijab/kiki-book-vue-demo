<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex mb-4">
      <div class="w-3/4 mx-4">
        <div class="max-w-full rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">โปรโมชั่น</div>
            <ul>
              <li>ซื้อเล่มไม่ซ้ำกัน 2 เล่ม ลด 10% ของ 2 เล่มนั้น</li>
              <li>ซื้อเล่มไม่ซ้ำกัน 3 เล่ม ลด 20% ของ 3 เล่มนั้น</li>
              <li>ซื้อเล่มไม่ซ้ำกัน 4 เล่ม ลด 30% ของ 4 เล่มนั้น</li>
              <li>ซื้อเล่มไม่ซ้ำกัน 5 เล่ม ลด 40% ของ 5 เล่มนั้น</li>
              <li>ซื้อเล่มไม่ซ้ำกัน 6 เล่ม ลด 50% ของ 6 เล่มนั้น</li>
              <li>ซื้อเล่มไม่ซ้ำกัน 7 เล่ม ลด 60% ของ 7 เล่มนั้น</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-2/4 mx-4">
        <div class="max-w-full rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">ตระกร้าสินค้า</div>
            <ul>
              <li :key="index" v-for="(item, index) in cart">
                {{ item.title }} x {{ item.quantity }} - {{ item.price }}
              </li>
            </ul>
            ทั้งหมด {{ cartTotal }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <div
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        :key="index"
        v-for="(book, index) in bookList"
      >
        <article class="overflow-hidden rounded-lg shadow-lg">
          <img
            class="block h-auto w-full"
            :src="book.cover"
            :alt="book.title"
          />

          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4"
          >
            <h1 class="text-lg">{{ book.title }}</h1>
            <p
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {{ book.author }}
            </p>
          </header>

          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4"
          >
            <span class="text-red-500">{{ book.price }} THB</span>
            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              @click="addToCart(book)"
            >
              Add to Cart
            </button>
          </footer>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BookService from '../service/book_service'
import { Book } from '../type/book'
import { getModule } from 'vuex-module-decorators'
import CartModule from '../store/modules/cart'

const cartModule = getModule(CartModule)
@Component({})
export default class Home extends Vue {
  private bookList: Array<Book> = []

  async mounted(): Promise<void> {
    this.bookList = await BookService.getAll()
  }

  addToCart(book: Book) {
    cartModule.addBookToCart(book)
  }

  get cart() {
    return cartModule.shoppingCart
  }

  get cartTotal() {
    return cartModule.totalShoppingCart
  }
}
</script>
