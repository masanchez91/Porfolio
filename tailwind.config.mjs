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
				'hero': '48px',
				'h2': '32px',
				'h3': '24px',
				'button': '18px',
			}
		},
	},
	plugins: [],
}
