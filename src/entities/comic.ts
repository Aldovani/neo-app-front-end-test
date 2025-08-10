export type Comic = {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: [[object]]
  resourceURI: string
  urls: [[object]]
  series: {
    resourceURI: string
    name: string
  }
  variants: []
  collections: []
  collectedIssues: []
  dates: [[object], [object]]
  prices: { type: string; price: number }[]
  thumbnail: {
    path: string
    extension: string
  }
  images: [[object]]
  creators: {
    available: number
    collectionURI: string
    items: []
    returned: number
  }
  characters: {
    available: number
    collectionURI: string
    items: []
    returned: number
  }
  stories: {
    available: number
    collectionURI: string
    items: []
    returned: number
  }
  events: {
    available: number
    collectionURI: string
    items: []
    returned: number
  }
}
