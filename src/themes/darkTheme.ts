import { DefaultTheme } from 'styled-components'

const colors = {
	mainblack: '#36445e',
	mainwhite: '#fff',
	main: '#36445e',
	pacificblue: '#36445e',
	bluealice: '#36445e',
	blueDark: '#36445e',
	wheat: '#36445e',
	oldlace: '#36445e',
	green: '#36445e',
	greenbright: '#36445e',
	greenbright05: '#36445e',
	greenlight: '#36445e',
	bluegray: '#36445e',
	graylight: '#36445e',
	lightmint: '#36445e',
	gray4: '#36445e',
	error: '#36445e',
	darkgrey: '#36445e',
	buttonhover: '#36445e',
	buttonpressed: '#36445e',
	disabled: '#36445e',
	black30: '#36445e',
	black50: 'rgb(0 0 0 / 50%)',
	border: '#36445e',
	lightbrown: '#36445e',
	peach: '#36445e',
	melrose: '#36445e',
	melrose05: '#36445e',
}

const spacingsMobile = { xs: 8, s: 16, m: 24, l: 32, xl: 56 }

const spacingsDesktop = {
	xs: 8,
	s: 16,
	m: 24,
	l: 40,
	xl: 80,
}

const sizes = {
	desktop: 1200,
	tablet: 1024,
	mobile: 768,
	extraMobile: 540,
	minScreen: 320,
}

const mediaQueries = {
	mediaMinWidthMinScreen: `@media(min-width: ${sizes.minScreen}px)`,
	mediaMinWidthMobile: `@media(min-width: ${sizes.mobile}px)`,
	mediaMinWidthExtraMobile: `@media(min-width: ${sizes.extraMobile}px)`,
	mediaMinWidthTablet: `@media(min-width: ${sizes.tablet}px)`,
	mediaMinWidthDesktop: `@media(min-width: ${sizes.desktop}px)`,

	mediaTabletToDesktop: `@media(min-width: ${sizes.tablet}px) and (max-width:${
		sizes.desktop - 1
	}px)`,
}

const typography = {
	header56_60: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 800,
		fontSize: 56,
		lineHeight: '60px',
	},
	header40_44: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 800,
		fontSize: 40,
		lineHeight: '44px',
	},
	header36_48: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 800,
		fontSize: 36,
		lineHeight: '48px',
	},
	header40_48: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 800,
		fontSize: 40,
		lineHeight: '48px',
	},
	header30_36: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 800,
		fontSize: 30,
		lineHeight: '36px',
	},
	header28_32: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 600,
		fontSize: 28,
		lineHeight: '32px',
	},
	header24_32: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 700,
		fontSize: 24,
		lineHeight: '32px',
	},
	header24_28: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 800,
		fontSize: 24,
		lineHeight: '28px',
	},
	header20_24: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 600,
		fontSize: 20,
		lineHeight: '24px',
	},
	header18_24: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 700,
		fontSize: 18,
		lineHeight: '24px',
	},
	header16_22: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 700,
		fontSize: 16,
		lineHeight: '22px',
	},
	text24_32: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 500,
		fontSize: 24,
		lineHeight: '32px',
	},
	text20_32: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 500,
		fontSize: 20,
		lineHeight: '32px',
	},
	text20_28: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 500,
		fontSize: 20,
		lineHeight: '28px',
	},
	text20_26: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 500,
		fontSize: 20,
		lineHeight: '26px',
	},
	text18_24: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 500,
		fontSize: 18,
		lineHeight: '24px',
	},
	text16_22: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 500,
		fontSize: 16,
		lineHeight: '22px',
	},
	text14_18: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 500,
		fontSize: 14,
		lineHeight: '18px',
	},
	text12_16: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 500,
		fontSize: 12,
		lineHeight: '16px',
	},
	text10_14: {
		fontFamily: '"Uni Neue", serif',
		fontWeight: 500,
		fontSize: 10,
		lineHeight: '14px',
	},
}

const mixins = {
	linkMain: {
		color: colors.main,
		'&:hover': {
			color: colors.buttonhover,
		},
		'&:active': {
			color: colors.buttonhover,
		},
	},
}

export const darkTheme: DefaultTheme = {
	colors,
	spacingsMobile,
	spacingsDesktop,
	sizes,
	mediaQueries,
	typography,
	mixins,
}
