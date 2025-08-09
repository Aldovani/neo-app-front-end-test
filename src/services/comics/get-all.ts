import { Comic } from '@/entities/comic'
import { httpClint } from '../http-client'

type GetAllRequest = {
  page: number
  limit: number
}

type GetAllResponse = {
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: Comic[]
  }
}

export async function getAll({ page, limit }: GetAllRequest) {
  const response = await httpClint.get<GetAllResponse>(`/comics`, {
    params: {
      offset: page * limit,
    },
  })

  return response.data.data
}
