import { Comic } from '@/entities/comic'
import { assignDiscount } from '@/utils/assign-discount'
import { assignRarity } from '@/utils/assign-rarity'
import { AxiosError } from 'axios'
import { httpClint } from '../http-client'

type GetByIdRequest = {
  id: number
}

type GetByIdResponseSuccess = {
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: Comic[]
  }
}

export async function getById({ id }: GetByIdRequest) {
  try {
    const response = await httpClint.get<GetByIdResponseSuccess>(
      `/comics/${id}`,
    )

    return {
      success: true,
      value: {
        ...response.data.data,
        results: assignDiscount(assignRarity(response.data.data.results)),
      },
    }
  } catch (err: unknown) {
    if (err instanceof AxiosError)
      return { success: false, error: { code: err.status!, status: err.code! } }

    return {
      success: false,
      error: { code: 500, status: 'INTERNAL SERVER ERROR' },
    }
  }
}
