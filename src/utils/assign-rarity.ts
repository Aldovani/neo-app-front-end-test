import { Comic } from '@/entities/comic'

export function assignRarity(comics: Comic[]) {
  return comics.map((item) => {
    const isRare = Math.random() < 0.1
    return isRare ? { ...item, rarity: 'rare' } : { ...item, rarity: 'comum' }
  })
}
