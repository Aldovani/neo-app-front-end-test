import { createLoader, parseAsInteger } from 'nuqs/server'

export const catalogFilterSearchParams = {
  page: parseAsInteger.withDefault(1),
}

export const loadSearchParams = createLoader(catalogFilterSearchParams)
