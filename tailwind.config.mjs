const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		flowbite.content(),
	],
	theme: {
		extend: {
			colors: {
				backgroundDark: '#09090b',
				background: '#ffffff',
				darkless: '#18181b',
				divider: '#3f3f46'
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
		flowbite.plugin(),
	],
}
