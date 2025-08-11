export type CartProductItem = {
  title: string
  price: number
  id: number
  imgUrl: string
  rarity: string
  discountWithCoupon: number
}

export type CartStateItem = {
  product: CartProductItem
  quantity: number
}

export type CartState = {
  items: CartStateItem[]
  couponDiscount?: string
  isOpen: boolean
}

export type Coupon = {
  code: string
  type: string
}
