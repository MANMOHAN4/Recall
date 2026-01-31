import { createServerFn } from '@tanstack/react-start'
import { firecrawl } from '../lib/firecrawl.ts'
import { importSchema } from '../schemas/import.ts'

export const scrapeUrlFn = createServerFn({ method: 'POST' }).inputValidator(importSchema).handler(
  async ({data}) => {
    const result = await firecrawl.scrape(data.url, {
      formats: ['markdown'],
      onlyMainContent: true,
    })

    console.log(result)
  },
)
