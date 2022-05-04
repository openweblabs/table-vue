import type { SearchResponse } from 'meilisearch'
import { MeiliSearch } from 'meilisearch'

export async function search(attrs: object = {}) {
  const query = tableStore.value.query?.trim() || ''
  const perPage = tableStore.value.perPage as number || 20
  const source = tableStore.value.source
  const options = { limit: perPage }
  const config = attrs
  // eslint-disable-next-line no-console
  console.log('config', config)
  // eslint-disable-next-line no-console
  console.log('options', options)

  // eslint-disable-next-line no-console
  console.log('source', source)

  // eslint-disable-next-line no-console
  console.log('query', query)
  const client = await getSearchClient()
  // eslint-disable-next-line no-console
  console.log('client', client)
  const index = client.index(source)
  // eslint-disable-next-line no-console
  console.log('index', index)
  const results: SearchResponse<Record<string, any>> = await index.search(query)

  // eslint-disable-next-line no-console
  console.log('results', results)

  return results
}

export async function getSearchClient(apiKey = '') {
  // eslint-disable-next-line no-console
  console.log('host', tableStore.value.source)
  return new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey,
  })
}
