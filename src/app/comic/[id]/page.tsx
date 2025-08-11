import { ComicsService } from '@/services/comics'

import { ComicDetailsClient } from './_components/client'

type ComicDetailsProp = {
  params: Promise<{ id: string }>
}

export default async function ComicDetails({ params }: ComicDetailsProp) {
  const { id } = await params

  const response = await ComicsService.getById({
    id: Number(id),
  })

  if (!response.success || !response.value) return

  const comic = {
    description: response.value.results[0].textObjects[0]?.text || '',
    price: response.value.results[0].prices[0].price,
    id: response.value.results[0].id,
    title: response.value.results[0].title,
    imgUrl:
      response.value.results[0].thumbnail.path +
      '.' +
      response.value.results[0].thumbnail.extension,
    rarity: response.value.results[0].rarity,
    discountWithCoupon: response.value.results[0].discountWithCoupon,
  }

  return <ComicDetailsClient {...comic} />
}
