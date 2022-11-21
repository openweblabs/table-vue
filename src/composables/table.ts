import { calculatePagination, currentPage, filterName, filters, goToNextPage, goToPage, goToPrevPage, hits, index, lastPageNumber, perPage, query, results, search, searchFilters, searchParams, setTotalHits, sort, sorts, totalPages } from '@stacksjs/search-engine'
import { isObject, isString, useStorage } from '@vueuse/core'
import type { Ref } from 'vue'
import { computed } from 'vue-demi'
import type { TableStore } from '~/types'

const table = (useStorage('table', determineState()).value as TableStore)

// table related
const columns = computed(() => table.columns)
const actions = computed(() => table.actions)
const actionable = computed(() => table.actionable)
const selectedRows = computed(() => table.selectedRows)
const selectedAll = computed(() => table.selectedAll)
const pages: Ref<number[]> = ref([])
const indeterminate = computed(() => (table?.selectedRows?.length ?? 0) > 0 && (table?.selectedRows?.length ?? 0) < hits.value.length)
const lastColumn = computed(() => {
  return table.columns[table.columns.length - 1]
})
const readableLastColumn = computed(() => lastColumn[0]?.includes(':') ? lastColumn[0].split(':')[1].trim() : lastColumn[0])

// this watchEffect picks up any reactivity changes from `query` and `searchParams` and it will then trigger a search
watchEffect(async () => {
  // console.log('watchEffect', query, searchParams)

  const results = await search(query.value, searchParams.value)

  if (results) {
    table.results = results
    table.hits = results.hits
  }

  setTotalHits(table.results?.nbHits ?? 1)
  calculatePagination()
})

watchDebounced(
  query,
  () => {
    // eslint-disable-next-line no-console
    console.log('watchDebounced')

    if (table === undefined)
      return

    if (isRef(table.query))
      table.query = query.value
  },
  { debounce: 500 },
)

function determineState(): TableStore {
  const ls = localStorage.getItem('table')

  if (isString(ls))
    return JSON.parse(ls)

  // initial default state - overwrite with properties passed down from parent component
  const table: TableStore = {
    source: '',
    password: '',
    index: '',
    columns: [],
    filters: [],
    perPage: 20,
    currentPage: 1,
    query: '',
  }

  return table
}

function isColumnSortable(col: string): Boolean {
  if (!hasTableLoaded(table))
    return false

  if (col === undefined)
    return false

  if (col.includes(':'))
    col = col.split(':')[0]

  if (table.sorts?.includes(col))
    return true

  return false
}

function hasTableLoaded(state?: any): Boolean {
  if (state?.index !== '')
    return true

  return isString(table?.index) && table.index !== '' // a lazy way to check if the table is loaded
}

function isColumnUsedAsSort(col: string | object) {
  let sortKey

  if (isObject(col))
    sortKey = col[0].includes(':') ? col[0].split(':')[0].trim() : col[0]

  else
    sortKey = col.includes(':') ? col.split(':')[0].trim() : col

  return table.sort?.includes(sortKey)
}

function toggleSort(col: string | Ref<string>) {
  if (isRef(col))
    col = unref(col)

  const sortKey = (col as string).includes(':') ? (col as string).split(':')[0].trim() : col

  if (table.sort?.includes('desc')) {
    table.sort = `${sortKey}:asc`

    // eslint-disable-next-line no-console
    console.log('sort included asc it is now desc for', sortKey)

    return
  }

  if (table.sort?.includes('asc')) {
    table.sort = undefined

    // eslint-disable-next-line no-console
    console.log('sort included desc it is now "" for', sortKey)

    return
  }

  // eslint-disable-next-line no-console
  console.log('there was no sort. Setting it now in asc order for', sortKey)

  table.sort = `${sortKey}:desc`

  // eslint-disable-next-line no-console
  console.log('table.sort', table.sort)
}

function columnName(col: string) {
  return col.split(':')[0].trim()
}

export async function useTable(store?: TableStore) {
  return {
    store,
    table,
    index,
    columns,
    isColumnSortable,
    filters,
    sort,
    sorts,
    query,
    results,
    hits,
    perPage,
    currentPage,
    goToPrevPage,
    goToNextPage,
    goToPage,
    search,
    searchFilters,
    searchParams,
    toggleSort,
    isColumnUsedAsSort,
    actionable,
    actions,
    columnName,
    indeterminate,
    lastColumn,
    readableLastColumn,
    lastPageNumber,
    selectedRows,
    selectedAll,
    totalPages,
    pages,
    filterName,
  }
}
