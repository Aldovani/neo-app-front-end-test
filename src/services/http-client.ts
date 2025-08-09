import { generateHash } from '@/utils/generate-hash'
import axios from 'axios'

export const httpClint = axios.create({
  baseURL: process.env.MARVEL_API_URL,
})

httpClint.interceptors.request.use((config) => {
  const { hash, publicKey, ts } = generateHash()

  config.params.ts = ts
  config.params.apikey = publicKey
  config.params.hash = hash

  return config
})
