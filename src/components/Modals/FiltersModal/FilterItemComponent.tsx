import React from 'react'

import { FilterItem } from '@shared/api/types/Filter'
import { OnFilterChange } from '@shared/api/types/SearchRequest/SearchRequestFilter'

import { FilterOption } from './FilterOption'

interface FilterItemComponentProps {
	filterItem: FilterItem
	checkedOptions?: string[]
	onChange: OnFilterChange
}

export const FilterItemComponent: React.FC<FilterItemComponentProps> = ({
	filterItem: { options, id, name },
	checkedOptions,
	onChange
}) => {
	return (
		<li className="border-b border-gray py-[20px]">
			<h3 className="text-xl font-medium pb-[20px] ">{name}</h3>
			<ul className="grid grid-cols-3 font-base">
				{options.map(option => {
					const isOptionChecked = checkedOptions?.includes(option.id)
						? true
						: false
					return (
						<FilterOption
							key={option.id}
							filterId={id}
							option={option}
							isChecked={isOptionChecked}
							onChange={onChange}
						/>
					)
				})}
			</ul>
		</li>
	)
}
