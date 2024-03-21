/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
		extend: {
			"fontSize":{
				"7xl": '7rem'
			},
			colors: {
				"98-grey": '#c0c0c0',
				'98-blue': "#008080",
				"notepad-blue": "#0100a8"
			}
		},
	},
	plugins: [],
}
