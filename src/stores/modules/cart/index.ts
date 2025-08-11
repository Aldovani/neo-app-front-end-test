import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartProductItem, CartState, Coupon } from './types'

const INITIAL_STATE: CartState = {
  items: [],
  isOpen: false,
  couponDiscount: '',
}

const MOCK_COUPONS: Record<string, Coupon> = {
  SAVE10: {
    code: 'SAVE10',
    type: 'common',
  },
  RARE20: {
    code: 'RARE20',
    type: 'rare',
  },
  SUPER5: {
    code: 'SUPER5',
    type: 'common',
  },
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

    removeProduct(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload
      const productInCartIndex = state.items.findIndex(
        (item) => item.product.id === id,
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
      state.isOpen = !state.isOpen
    },

    verifyCoupon(state, { payload }: PayloadAction<{ coupon: string }>) {
      if (!payload.coupon) {
        state.couponDiscount = undefined
        return
      }
      const normalized = payload.coupon.trim().toUpperCase()
      state.couponDiscount = MOCK_COUPONS[normalized].type ?? undefined
    },

    removeCoupon(state) {
      state.couponDiscount = undefined
    },
  },
})

export const {
  addProduct,
  removeProduct,
  clearCart,
  deleteProduct,
  toggleCart,
  removeCoupon,
  verifyCoupon,
} = cartSlice.actions

export const cart = cartSlice.reducer
