import { createLoader, parseAsInteger } from 'nuqs/server'

// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const catalogFilterSearchParams = {
  page: parseAsInteger.withDefault(0),
}

export const loadSearchParams = createLoader(catalogFilterSearchParams)
