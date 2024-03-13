/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"black": "#000000",
			"white": "#FFFFFf",
			"gray": "#abb8c3",
			"surface": "#F1F2EB",
			"outline": "#08394A",
			"pink": "#f78da7",
			"red": "#cf2e2e",
			"orange": "#F28B30",
			"slate-orange": "#F2AA6B",
			"amber": "#fcb900",
			"green": "#3BBF74"
		},
		extend: {
			fontFamily: {
				"inter": ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
}
