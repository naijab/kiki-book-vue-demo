import { Action, Mutation, Module, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { Book } from '@/type/book'

@Module({ name: 'cart', namespaced: true, dynamic: true, store })
export default class CartModule extends VuexModule {
  private cart: Book[] = []

  @Action({ commit: 'updateBookToCart' })
  addBookToCart(book: Book) {
    return book
  }

  @Mutation
  updateBookToCart(book: Book) {
    const record = this.cart.find(
      (currentBook: Book) => currentBook.id === book.id
    )
    if (!record) {
      book.quantity++
      this.cart.push({
        ...book,
      })
    } else {
      record.quantity++
    }
  }

  get shoppingCart(): Array<Book> {
    return this.cart
  }

  get totalShoppingCart(): number {
    const totalSumCart = this.sumOfCart
    const discountPercent = this.discountFromCart
    const discount = (totalSumCart * discountPercent) / 100
    const totalDiscount = totalSumCart - discount

    //TODO: Fix Discount is Not Correct

    console.log('Total Item Cart  : ', this.cart.length)
    console.log('Total Sum Cart   : ', totalSumCart)
    console.log('Discount Percent : ', discountPercent)
    console.log('Discount         :', discount)
    console.log('Total Discount   : ', totalDiscount)
    return totalDiscount
  }

  private get discountFromCart() {
    let discount = 0
    switch (this.cart.length) {
      case 2:
        discount = 10
        break
      case 3:
        discount = 20
        break
      case 4:
        discount = 30
        break
      case 5:
        discount = 40
        break
      case 6:
        discount = 50
        break
      case 7:
        discount = 60
        break
      default:
        break
    }
    return discount
  }

  private get sumOfCart() {
    return this.cart.length > 0
      ? Object.values(this.cart).reduce((preBookPrice, currentBook) => {
          const currentBookPrice = currentBook.price * currentBook.quantity
          return preBookPrice + currentBookPrice
        }, 0)
      : 0
  }
}
