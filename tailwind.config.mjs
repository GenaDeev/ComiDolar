const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		flowbite.content(),
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin'),
		flowbite.plugin(),
	],
}
