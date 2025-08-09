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

  return (
    <CatalogClient
      comics={response.results}
      offset={response.offset}
      totalElement={response.total}
    >
      <Pagination currentPage={page} totalOfElements={response.total} />
    </CatalogClient>
  )
}
