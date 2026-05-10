import type { APIRoute } from 'astro'
import { profile } from '../data/portfolio'

export const GET: APIRoute = () => {
  const siteUrl = profile.socials.website

  return new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${new URL('/sitemap.xml', siteUrl).toString()}`,
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  )
}
