import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FilterType } from '@shared/api/types/Filter'
import { SearchRequestFilter } from '@shared/api/types/SearchRequest/SearchRequestFilter'
import useFilters from '@shared/hooks/useFilters'
import { useGetFilterData } from '@shared/hooks/useGetFilterData'

import { Button } from '@components/Button'
import { FiltersModal } from '@components/Modals/FiltersModal'

export const App = () => {
	const { isPending, error, data } = useGetFilterData()
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation('home')
	const { searchRequestFilter, setSearchRequestFilter } = useFilters(
		state => state
	)
	const [activeFilters, setActiveFilters] = useState<SearchRequestFilter>([])

	const handleOpen = () => {
		setIsOpen(true)
	}

	const handleClose = () => {
		setIsOpen(false)
	}

	const handleChange = (filterId: string, optionId: string) => {
		const filter = activeFilters.find(filter => filter.id === filterId)
		if (filter) {
			const optionsIds = filter.optionsIds
			const newOptionIds = optionsIds.includes(optionId)
				? optionsIds.filter(id => id !== optionId)
				: [...optionsIds, optionId]

			const newActiveFilters = activeFilters.map(filter => {
				if (filter.id === filterId) {
					filter.optionsIds = newOptionIds
				}
				return filter
			})
			setActiveFilters(newActiveFilters)
			return
		}
		setActiveFilters([
			...activeFilters,
			{ id: filterId, type: FilterType.OPTION, optionsIds: [optionId] }
		])
	}

	const handleReset = () => {
		setActiveFilters([])
	}

	const handleFiltersSubmit = () => {
		setSearchRequestFilter(activeFilters)
	}

	return (
		<section className="font-display w-full h-dvh flex flex-col items-center justify-center text-[#31393C]">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-6xl text-gray-600 mb-12">
				WinWinTravel frontend test task
			</h1>
			<Button
				label={t('open-filters')}
				type="contained"
				onClick={handleOpen}
			/>
			<p className="max-w-[50%] mt-[20px]">
				{JSON.stringify(searchRequestFilter)}
			</p>
			<FiltersModal
				isOpen={isOpen}
				filters={data?.filterItems}
				activeFilters={activeFilters}
				isPending={isPending}
				error={error}
				onClose={handleClose}
				onChange={handleChange}
				onReset={handleReset}
				onSubmit={handleFiltersSubmit}
			/>
		</section>
	)
}
