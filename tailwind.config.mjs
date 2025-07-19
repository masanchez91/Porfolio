/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'holy': {
					'dark-primary': '#0F1F2E',
					'dark-secondary': '#162A3F',
					'action': '#28A745',
					'neutral': '#5A6C7E',
					'light-card': '#E9ECEF',
					'text-primary': '#FFFFFF',
					'text-secondary': '#5A6C7E',
				}
			},
			fontFamily: {
				'heading': ['Poppins', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'hero': ['48px', { lineHeight: '1.1' }],
				'hero-sm': ['36px', { lineHeight: '1.2' }],
				'h2': ['32px', { lineHeight: '1.3' }],
				'h2-sm': ['28px', { lineHeight: '1.3' }],
				'h3': ['24px', { lineHeight: '1.4' }],
				'h3-sm': ['20px', { lineHeight: '1.4' }],
				'button': ['18px', { lineHeight: '1.5' }],
				'button-sm': ['16px', { lineHeight: '1.5' }],
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
			screens: {
				'xs': '475px',
				'3xl': '1680px',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in',
				'slide-up': 'slideUp 0.5s ease-out',
				'slide-in-right': 'slideInRight 0.3s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideInRight: {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				}
			}
		},
	},
	plugins: [],
}
