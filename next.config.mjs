import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
      @import "${path.resolve(__dirname, 'libs/shared/styles/utils.scss')}";
    `,
  },
}

export default nextConfig
