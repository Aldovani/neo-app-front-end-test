import CryptoJS from 'crypto-js'

export function generateHash() {
  const publicKey = process.env.MARVEL_API_PUBLIC_KEY as string
  const privateKey = process.env.MARVEL_API_PRIVATE_KEY as string
  const ts = new Date().getTime()

  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString()

  return { publicKey, ts, hash }
}
