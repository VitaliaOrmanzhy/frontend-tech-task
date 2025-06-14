import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TailSpin } from 'react-loader-spinner'

import { FilterItem } from '@shared/api/types/Filter'
import {
	OnFilterChange,
	SearchRequestFilter
} from '@shared/api/types/SearchRequest/SearchRequestFilter'

import { Button } from '../../Button'
import { ConfirmModal } from '../ConfirmModal'
import { ModalWrapper } from '../ModalWrapper/ModalWrapper'
import { BaseModalProps } from '../interface'
import { FiltersList } from './FiltersList'

interface FiltersModalProps extends BaseModalProps {
	filters?: FilterItem[]
	activeFilters: SearchRequestFilter
	isPending: boolean
	error: Error | null
	onChange: OnFilterChange
	onReset: () => void
	onSubmit: () => void
}

export const FiltersModal: React.FC<FiltersModalProps> = ({
	isOpen,
	filters,
	activeFilters,
	isPending,
	error,
	onClose,
	onChange,
	onReset,
	onSubmit
}) => {
	const [isConfirmOpen, setIsConfirmOpen] = useState(false)
	const buttonsDisabled = isPending || error != null

	const { t } = useTranslation('filter')

	const handleOpenConfirm = () => {
		setIsConfirmOpen(true)
	}

	const handleCloseConfirm = () => {
		setIsConfirmOpen(false)
	}

	const handleConfirm = () => {
		onSubmit()
		handleCloseConfirm()
		onClose()
	}

	return (
		<>
			<ModalWrapper
				title={t('title')}
				isOpen={isOpen}
				onClose={onClose}
				className="w-[80%] mt-[50px]"
			>
				<div className="border-t border-gray">
					{filters && (
						<FiltersList
							filters={filters}
							activeFilters={activeFilters}
							onChange={onChange}
						/>
					)}
					{isPending && (
						<TailSpin
							visible={true}
							height="80"
							width="80"
							color="#000000"
							ariaLabel="tail-spin-loading"
							radius="1"
						/>
					)}

					<div className="relative flex justify-center pt-[20px]">
						<Button
							label={t('apply-label')}
							type="contained"
							disabled={buttonsDisabled}
							onClick={handleOpenConfirm}
						/>
						<Button
							label={t('reset-label')}
							type="text"
							disabled={buttonsDisabled}
							className="absolute right-0 top-[50%]"
							onClick={onReset}
						/>
					</div>
				</div>
			</ModalWrapper>
			<ConfirmModal
				title={t('confirm-title')}
				isOpen={isConfirmOpen}
				onClose={handleCloseConfirm}
				actions={
					<>
						<Button
							label={t('cancel-label')}
							type="outlined"
							onClick={handleCloseConfirm}
						/>
						<Button
							label={t('confirm-label')}
							type="contained"
							onClick={handleConfirm}
						/>
					</>
				}
			/>
		</>
	)
}
