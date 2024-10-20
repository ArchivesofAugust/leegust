import { MetadataRoute } from 'next'

import { DOMAIN } from '@/libs/shared/constants/meta'
import { isProduction } from '@/libs/shared/functions/environment'

export default function robots(): MetadataRoute.Robots {
  if (!isProduction()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
      ],
    },
    sitemap: [
      `https://www.${DOMAIN}/sitemap.xml`,
      `https://${DOMAIN}/sitemap.xml`,
    ],
  }
}
