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

//  GET / 200 in 1796ms
//  ✓ Compiled in 38ms
//  ✓ Compiled / in 44ms
// {
//   id: 82967,
//   digitalId: 0,
//   title: 'Marvel Previews (2017)',
//   issueNumber: 0,
//   variantDescription: '',
//   description: '',
//   modified: '2019-11-07T08:46:15+0000',
//   isbn: '',
//   upc: '75960608839302811',
//   diamondCode: '',
//   ean: '',
//   issn: '',
//   format: '',
//   pageCount: 112,
//   textObjects: [],
//   resourceURI: 'https://gateway.marvel.com/v1/public/comics/82967',
//   urls: [
//     {
//       type: 'detail',
//       url: 'http://marvel.com/comics/issue/82967/marvel_previews_2017?utm_campaign=apiRef&utm_source=aae3c5e119ce9958a503c669ebe91ff2'
//     }
//   ],
//   series: {
//     resourceURI: 'https://gateway.marvel.com/v1/public/series/23665',
//     name: 'Marvel Previews (2017 - Present)'
//   },
//   variants: [
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/82965',
//       name: 'Marvel Previews (2017)'
//     },
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/82970',
//       name: 'Marvel Previews (2017)'
//     },
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/82969',
//       name: 'Marvel Previews (2017)'
//     },
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/74697',
//       name: 'Marvel Previews (2017)'
//     },
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/72736',
//       name: 'Marvel Previews (2017)'
//     },
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/75668',
//       name: 'Marvel Previews (2017)'
//     },
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/65364',
//       name: 'Marvel Previews (2017)'
//     },
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/65158',
//       name: 'Marvel Previews (2017)'
//     },
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/65028',
//       name: 'Marvel Previews (2017)'
//     },
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/75662',
//       name: 'Marvel Previews (2017)'
//     },
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/74320',
//       name: 'Marvel Previews (2017)'
//     },
//     {
//       resourceURI: 'https://gateway.marvel.com/v1/public/comics/73776',
//       name: 'Marvel Previews (2017)'
//     }
//   ],
//   collections: [],
//   collectedIssues: [],
//   dates: [
//     { type: 'onsaleDate', date: '2099-10-30T00:00:00+0000' },
//     { type: 'focDate', date: '2019-10-07T00:00:00+0000' }
//   ],
//   prices: [ { type: 'printPrice', price: 0 } ],
//   thumbnail: {
//     path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
//     extension: 'jpg'
//   },
//   images: [],
//   creators: {
//     available: 1,
//     collectionURI: 'https://gateway.marvel.com/v1/public/comics/82967/creators',
//     items: [ [Object] ],
//     returned: 1
//   },
//   characters: {
//     available: 0,
//     collectionURI: 'https://gateway.marvel.com/v1/public/comics/82967/characters',
//     items: [],
//     returned: 0
//   },
//   stories: {
//     available: 2,
//     collectionURI: 'https://gateway.marvel.com/v1/public/comics/82967/stories',
//     items: [ [Object], [Object] ],
//     returned: 2
//   },
//   events: {
//     available: 0,
//     collectionURI: 'https://gateway.marvel.com/v1/public/comics/82967/events',
//     items: [],
//     returned: 0
//   }
// }
