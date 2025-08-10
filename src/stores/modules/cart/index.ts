import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartProductItem, CartState } from './types'

const INITIAL_STATE: CartState = {
  items: [],
  isOpen: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addProduct(state, action: PayloadAction<CartProductItem>) {
      const product = action.payload
      const productInCartIndex = state.items.findIndex(
        (item) => item.product.id === product.id,
      )

      if (productInCartIndex > -1) {
        state.items[productInCartIndex].quantity++
      } else {
        state.items.push({ product, quantity: 1 })
      }
    },

    removeProduct(state, action: PayloadAction<CartProductItem>) {
      const product = action.payload
      const productInCartIndex = state.items.findIndex(
        (item) => item.product.id === product.id,
      )

      if (productInCartIndex === -1) {
        return { items: [...state.items], isOpen: state.isOpen }
      }

      const productQuantity = state.items[productInCartIndex].quantity

      if (productQuantity > 1) {
        state.items[productInCartIndex].quantity--
      } else {
        state.items.splice(productInCartIndex, 1)
      }

      state.items = [...state.items]
    },

    deleteProduct(state, action: PayloadAction<{ id: number }>) {
      const product = action.payload

      const newState = state.items.filter((item) => {
        if (item.product.id === product.id) return false

        return true
      })

      state.items = newState
    },

    clearCart(state) {
      state.items = []
    },

    toggleCart(state) {
      document.body.classList.add('overflow-y-hidden')
      state.isOpen = !state.isOpen

      if (state.isOpen) document.body.classList.add('overflow-y-hidden')
      else document.body.classList.remove('overflow-y-hidden')
    },
  },
})

export const {
  addProduct,
  removeProduct,
  clearCart,
  deleteProduct,
  toggleCart,
} = cartSlice.actions

export const cart = cartSlice.reducer
