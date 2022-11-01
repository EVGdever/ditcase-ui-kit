import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from '../themes'


interface StyledThemeProviderProps {
	theme: string
	children: any
}

export function BaseComponent({ theme, children }: StyledThemeProviderProps): JSX.Element {
	let selectedTheme

	switch (theme) {
		case 'dark':
			selectedTheme = darkTheme
			break
		default:
			selectedTheme = defaultTheme
	}

	return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
}

