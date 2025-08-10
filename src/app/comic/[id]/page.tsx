import { ComicsService } from '@/services/comics'

import { ComicDetailsClient } from './_components/client'

type ComicDetailsProp = {
  params: { id: string }
}

export default async function ComicDetails({ params }: ComicDetailsProp) {
  const { id } = await params

  const response = await ComicsService.getById({
    id: Number(id),
  })

  if (!response.success || !response.value) return

  console.log(response.value.data)
  const comic = {
    description: '',
    price: response.value.data.results[0].prices[0].price,
    id: response.value.data.results[0].id,
    title: response.value.data.results[0].title,
    imgUrl:
      response.value.data.results[0].thumbnail.path +
      '.' +
      response.value.data.results[0].thumbnail.extension,
  }

  return <ComicDetailsClient {...comic} />
}
