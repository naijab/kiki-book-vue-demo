import Vue from 'vue'
import Vuex from 'vuex'
import { Book } from '@/type/book'

Vue.use(Vuex)

const ADD_BOOK_TO_CART = 'ADD_TO_CART'

const discountFromCart = (cart) => {
  let discount = 0
  switch (cart.length) {
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

const sumOfCart = (cart): number => {
  return cart.length > 0
    ? Object.values(cart).reduce((book, currentBook) => {
        const totalPrice = currentBook.price * currentBook.quantity
        return book + totalPrice
      }, 0)
    : 0
}

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    [ADD_BOOK_TO_CART](state, book: Book) {
      const record = state.cart.find(
        (currentBook) => currentBook.id === book.id
      )
      if (!record) {
        state.cart.push({
          ...book,
          quantity: 1,
        })
      } else {
        record.quantity++
      }
    },
  },
  actions: {
    addBookToCart({ commit }, book: Book) {
      commit(ADD_BOOK_TO_CART, book)
    },
  },
  getters: {
    cart(state): Array<Book> {
      console.log('Cart : ', state.cart)
      return state.cart
    },
    cartTotal(state): number {
      const totalSumCart = sumOfCart(state.cart)
      const discountPercent = discountFromCart(state.cart)
      const discount = (totalSumCart * discountPercent) / 100
      const totalDiscount = totalSumCart - discount

      //TODO: Fix Discount is Not Correct

      console.log('Total Item Cart  : ', state.cart.length)
      console.log('Total Sum Cart   : ', totalSumCart)
      console.log('Discount Percent : ', discountPercent)
      console.log('Discount         :', discount)
      console.log('Total Discount   : ', totalDiscount)
      return totalDiscount
    },
  },
  modules: {},
})
