export type CartProductItem = {
  title: string
  price: number
  id: number
  imgUrl: string
}

export type CartStateItem = {
  product: CartProductItem
  quantity: number
}

export type CartState = {
  items: CartStateItem[]
  isOpen: boolean
}
