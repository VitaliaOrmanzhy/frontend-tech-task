import React from 'react'

import { FilterItem } from '@shared/api/types/Filter'
import {
	OnFilterChange,
	SearchRequestFilter
} from '@shared/api/types/SearchRequest/SearchRequestFilter'

import { FilterItemComponent } from './FilterItemComponent'

interface FiltersListProps {
	filters: FilterItem[]
	activeFilters: SearchRequestFilter
	onChange: OnFilterChange
}

export const FiltersList: React.FC<FiltersListProps> = ({
	filters,
	activeFilters,
	onChange
}) => {
	return (
		<ul className="border-t-gray pt-[20px]">
			{filters.map(filterItem => {
				return (
					<FilterItemComponent
						key={filterItem.id}
						filterItem={filterItem}
						checkedOptions={
							activeFilters?.find(filter => filter.id === filterItem.id)
								?.optionsIds
						}
						onChange={onChange}
					/>
				)
			})}
		</ul>
	)
}
