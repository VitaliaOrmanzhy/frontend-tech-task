import { FilterType } from '../Filter'

export interface SearchRequestFilterBase {
	id: string
	type: FilterType
}

export interface SearchRequestOptions extends SearchRequestFilterBase {
	type: FilterType.OPTION
	optionsIds: string[]
}

export type SearchRequestFilter = SearchRequestOptions[]

export type OnFilterChange = (filterId: string, optionId: string) => void
