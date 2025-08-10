export type CardProductItem = {
  title: string
  price: number
  id: number
  imgUrl: string
}

export type CartStateItem = {
  product: CardProductItem
  quantity: number
}

export type CartState = {
  items: CartStateItem[]
  isOpen: boolean
}
