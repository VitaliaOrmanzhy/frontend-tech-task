import React from 'react'

import { FilterChooseOption } from '@shared/api/types/Filter'
import { OnFilterChange } from '@shared/api/types/SearchRequest/SearchRequestFilter'

interface FilterOptionProps {
	option: FilterChooseOption
	filterId: string
	isChecked?: boolean
	onChange: OnFilterChange
}

export const FilterOption: React.FC<FilterOptionProps> = ({
	option: { id: optionId, name },
	filterId,
	isChecked,
	onChange
}) => {
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = () => {
		onChange(filterId, optionId)
	}
	return (
		<div className="flex gap-[15px] items-center">
			<input
				className="w-[20px] h-[20px]"
				checked={isChecked}
				type="checkbox"
				onChange={handleChange}
				name={name}
			/>
			<span>{name}</span>
		</div>
	)
}
