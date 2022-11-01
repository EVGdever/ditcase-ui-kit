import 'styled-components'

interface Spacings {
	xs: number
	s: number
	m: number
	l: number
	xl: number
}

interface Font {
	fontFamily: string
	fontWeight: number | string
	fontSize: number
	lineHeight: string
}

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			mainblack: string
			mainwhite: string
			main: string
			pacificblue: string
			bluealice: string
			blueDark: string
			wheat: string
			oldlace: string
			green: string
			greenbright: string
			greenbright05: string
			greenlight: string
			bluegray: string
			graylight: string
			lightmint: string
			gray4: string
			error: string
			darkgrey: string
			buttonhover: string
			buttonpressed: string
			disabled: string
			black30: string
			black50: string
			border: string
			lightbrown: string
			peach: string
			melrose: string
			melrose05: string
		}
		spacingsMobile: Spacings
		spacingsDesktop: Spacings
		sizes: {
			desktop: number
			tablet: number
			mobile: number
			extraMobile: number
			minScreen: number
		}
		mediaQueries: {
			mediaMinWidthMinScreen: string
			mediaMinWidthMobile: string
			mediaMinWidthExtraMobile: string
			mediaMinWidthTablet: string
			mediaMinWidthDesktop: string
			mediaTabletToDesktop: string
		}
		typography: {
			header56_60: Font
			header40_44: Font
			header36_48: Font
			header24_32: Font
			header24_28: Font
			header18_24: Font
			header16_22: Font
			header40_48: Font
			header30_36: Font
			header28_32: Font
			header20_24: Font
			text24_32: Font
			text20_32: Font
			text20_28: Font
			text20_26: Font
			text18_24: Font
			text16_22: Font
			text14_18: Font
			text12_16: Font
			text10_14: Font
		}
		mixins: {
			linkMain: any
		}
	}
}
