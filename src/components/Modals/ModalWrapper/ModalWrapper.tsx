import React from 'react'

import CloseIcon from '@shared/img/svg/close.svg'
import clsx from 'clsx'

import { Button } from '@components/Button'

interface ModalWrapperProps {
	title: string
	isOpen: boolean
	className?: string
	onClose: () => void
	children: React.ReactNode
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({
	title,
	isOpen,
	className,
	onClose,
	children
}) => {
	return (
		<div
			className={clsx(
				{ hidden: !isOpen },
				'overflow-y-auto overflow-x-hidden bg-[#1B1B1B4D] backdrop-blur-xl fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
			)}
			onClick={onClose}
		>
			<div
				className={clsx(
					className,
					'bg-white rounded-2xl absolute top-[50%] left-[50%] py-[30px] px-[30px] transform -translate-x-1/2 -translate-y-1/2'
				)}
				onClick={e => e.stopPropagation()}
			>
				<div className="relative text-[40px] flex items-center justify-center pb-[20px]">
					<p className="text-[40px] mr-[30px]">{title}</p>
					<Button
						label={<CloseIcon />}
						type="icon"
						className="block w-[20px] h-[20px] absolute right-0 top-[15px]"
						onClick={onClose}
					/>
				</div>
				{children}
			</div>
		</div>
	)
}
