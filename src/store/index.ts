import Vue from 'vue'
import Vuex from 'vuex'
import { Book } from '@/type/book'

Vue.use(Vuex)

export const ADD_BOOK_TO_CART = 'ADD_TO_CART'

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    [ADD_BOOK_TO_CART](state, book: Book) {
      const record = state.cart.find((book) => book.id === book.id)
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
      return state.cart
    },
    cartTotal(state): number {
      return state.cart.length > 0
        ? Object.values(state.cart).reduce((book, currentBook) => {
            const totalPrice = currentBook.price * currentBook.quantity
            return book + totalPrice
          }, 0)
        : 0
    },
  },
  modules: {},
})
