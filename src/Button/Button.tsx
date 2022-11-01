import React, { FC } from 'react'
import styled from 'styled-components'
import { BaseComponent } from '../BaseComponent'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
	title: string
	onClick: () => void

	theme?: 'default' | 'dark'
	color?: string
	bgColor?: string
}

export const Button: FC<ButtonProps> = ({
	theme = 'default',
	color,
	title,
	bgColor,
	onClick,
	...props
}) => {
	return (
		<BaseComponent theme={theme}>
			<StyledButton color={color} bgColor={bgColor} {...props}>
				{title}
			</StyledButton>
		</BaseComponent>
	)
}

interface StyledButtonProps {
	bgColor?: string
	color?: string
}

const StyledButton = styled.button<StyledButtonProps>(({
	bgColor,
	color,
	theme
}) => ({
	backgroundColor: bgColor ?? theme.colors.greenbright,
	color: color ?? theme.colors.mainwhite,
	fontWeight: 'bold',
	padding: '10px 24px',
	borderRadius: 8,
	border: 'none',
}))