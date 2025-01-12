/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			colors: {
				backgroundDark: '#09090b',
				background: '#ffffff',
				darkless: '#18181b',
				divider: '#3f3f46'
			},
			aspectRatio: {
				'og': '40 / 21'
			}
		},
	},
}
