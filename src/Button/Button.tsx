import React, { FC } from 'react'

interface ButtonProps {
	title: string
	color?: string
}

export const Button: FC<ButtonProps> = ({color, title}) => {
	return (
		<button style={{color}}>
			{title}
		</button>
	)
}