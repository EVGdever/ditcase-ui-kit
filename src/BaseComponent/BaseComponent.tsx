import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from '../themes'


interface StyledThemeProviderProps {
	theme: string
	children: any
}

export function BaseComponent({ theme, children }: StyledThemeProviderProps): JSX.Element {
	let selectedTheme
	console.log(theme)
	switch (theme) {
		case 'dark':
			selectedTheme = darkTheme
			break
		default:
			selectedTheme = defaultTheme
	}

	console.log(selectedTheme)
	console.log(darkTheme)

	return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
}

