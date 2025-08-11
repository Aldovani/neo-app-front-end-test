import { Comic } from '@/entities/comic'

const MIN = 5
const MAX = 50

function generateDiscount(): number {
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
}

export function assignDiscount(comics: Comic[]) {
  return comics.map((item) => {
    return { ...item, discountWithCoupon: generateDiscount() }
  })
}
