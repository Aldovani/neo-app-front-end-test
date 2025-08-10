/* eslint-disable react-hooks/rules-of-hooks */
import { useAppDispatch } from '@/stores'
import { addProduct, deleteProduct, removeProduct } from '.'
import { CartProductItem } from './types'

export function handleAddProduct({
  id,
  imgUrl,
  price,
  title,
}: CartProductItem) {
  const dispatch = useAppDispatch()
  dispatch(
    addProduct({
      id,
      imgUrl,
      price,
      title,
    }),
  )
}

export function handleRemoveProduct({
  id,
  imgUrl,
  price,
  title,
}: CartProductItem) {
  const dispatch = useAppDispatch()

  dispatch(
    removeProduct({
      id,
      imgUrl,
      price,
      title,
    }),
  )
}
export function handleDeleteProduct(id: CartProductItem['id']) {
  const dispatch = useAppDispatch()

  dispatch(
    deleteProduct({
      id,
    }),
  )
}
