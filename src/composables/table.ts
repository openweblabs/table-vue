import type { SearchResponse } from 'meilisearch'
import type { Ref } from 'vue'

export interface TableStore {
  source: string
  type: string
  columns?: string | string[]
  searchable?: string | boolean
  query?: string
  sortable?: string | boolean
  sorts?: string | string[]
  filterable?: string | boolean
  filters?: string | string[]
  actionable?: string | boolean
  actions?: string | string[]
  perPage?: string | number
  results?: SearchResponse<Record<string, any>>

  // stickyHeader?: string | boolean
  // stickyFooter?: string | boolean
}

const initialData: TableStore = {
  source: '',
  type: '',
  columns: [],
  searchable: false,
  query: '',
  sortable: false,
  sorts: [],
  filterable: false,
  filters: [],
  actionable: false,
  actions: [],
  perPage: 20,
  results: {
    nbHits: 0,
    hits: [],
    offset: 0,
    limit: 20,
    processingTimeMs: 0,
    query: '',
    exhaustiveNbHits: false,
  },
  // TODO: stickyHeader?: string | boolean
  // TODO: stickyFooter?: string | boolean
}

export const tableStore: Ref<TableStore> = useStorage('table-store', initialData)
