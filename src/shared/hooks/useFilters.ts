import { create } from 'zustand'

import { SearchRequestFilter } from '../api/types/SearchRequest/SearchRequestFilter'

interface FiltersState {
	searchRequestFilter: SearchRequestFilter
	setSearchRequestFilter: (selectedFilters: SearchRequestFilter) => void
}

const useFilters = create<FiltersState>(set => ({
	searchRequestFilter: [],
	setSearchRequestFilter: selectedFilters =>
		set({ searchRequestFilter: selectedFilters })
}))

export default useFilters
