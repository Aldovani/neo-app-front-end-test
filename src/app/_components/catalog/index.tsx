import { ComicsService } from '@/services/comics'
import { CatalogClient } from './client'
import { Pagination } from './components/pagination'

type CatalogProps = {
  page?: number
}

export default async function Catalog({ page = 1 }: CatalogProps) {
  const response = await ComicsService.getAll({
    page,
    limit: 20,
  })

  if (!response.success || !response.value) {
    return <div></div>
  }

  return (
    <CatalogClient
      comics={response.value.results}
      offset={response.value.offset}
      totalElement={response.value.total}
    >
      <Pagination currentPage={page} totalOfElements={response.value.total} />
    </CatalogClient>
  )
}
