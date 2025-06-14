import React from 'react'

import { ModalWrapper } from '../ModalWrapper'
import { BaseModalProps } from '../interface'

interface ConfirmModalProps extends BaseModalProps {
	title: string
	actions: React.ReactNode
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
	title,
	isOpen,
	actions,
	onClose
}) => {
	return (
		<ModalWrapper
			className="w-[80%]"
			title={title}
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className="flex gap-[15px] justify-center mt-[20px]">{actions}</div>
		</ModalWrapper>
	)
}
