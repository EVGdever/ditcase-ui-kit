import { DefaultTheme } from 'styled-components'

const colors = {
	mainblack: '#000',
	mainwhite: '#fff',
	main: '#00a1dc',
	pacificblue: '#c2e9ff',
	bluealice: '#edf8ff',
	blueDark: '#262d47',
	wheat: '#f7e1bc',
	oldlace: '#f7f2ea',
	green: '#53a770',
	greenbright: '#62e6ac',
	greenbright05: 'rgba(98, 230, 172, 0.5)',
	greenlight: '#d7f9ea',
	bluegray: '#d5e0e0',
	graylight: '#fcfcfc',
	lightmint: '#f2f5f4',
	gray4: '#bdbdbd',
	error: '#fd2c2c',
	darkgrey: '#36445e',
	buttonhover: '#33b4e3',
	buttonpressed: '#0099d1',
	disabled: '#bdbdbd',
	black30: 'rgb(0 0 0 / 30%)',
	black50: 'rgb(0 0 0 / 50%)',
	border: '#f2f2f2',
	lightbrown: '#9DBFB4',
	peach: '#D9D9D9',
	melrose: '#AFA7FF',
	melrose05: 'rgba(175, 167, 255, 0.5)',
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

export const defaultTheme: DefaultTheme = {
	colors,
	spacingsMobile,
	spacingsDesktop,
	sizes,
	mediaQueries,
	typography,
	mixins,
}
