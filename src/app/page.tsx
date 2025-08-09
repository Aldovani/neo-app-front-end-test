import { loadSearchParams } from '@/components/search-params'
import { SearchParams } from 'nuqs'
import { Suspense } from 'react'
import Catalog from './_components/catalog'
import { CatalogFallback } from './_components/catalog/components/fallback'
import { CatalogContainer } from './_components/catalog/components/container'
import { Hero } from './_components/hero'

type HomeProps = {
  searchParams: Promise<SearchParams>
}

export default async function Home({ searchParams }: HomeProps) {
  const { page } = await loadSearchParams(searchParams)

  return (
    <>
      <Hero />
      <CatalogContainer>
        <Suspense fallback={<CatalogFallback />} key={page}>
          <Catalog page={page} />
        </Suspense>
      </CatalogContainer>
    </>
  )
}
