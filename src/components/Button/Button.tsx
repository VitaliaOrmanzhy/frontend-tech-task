import React from 'react'

import clsx from 'clsx'

interface ButtonProps {
	label: string | React.ReactNode
	className?: string
	type: 'contained' | 'text' | 'outlined' | 'icon'
	disabled?: boolean
	onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
	label,
	className,
	type,
	disabled,
	onClick
}) => {
	return (
		<button
			className={clsx(
				{
					'px-[40px] py-[20px] md:px-[60px] md:py-[20px] rounded-xl md:rounded-2xl font-semibold':
						type !== 'icon' && type !== 'text',
					'bg-primary text-white hover:bg-primary-hover': type === 'contained',
					'px-0 py-0': type === 'icon',
					'text-secondary underline font-medium': type === 'text',
					'border-2 border-gray hover:border-gray-hover': type === 'outlined'
				},
				'text-base',
				className
			)}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	)
}
