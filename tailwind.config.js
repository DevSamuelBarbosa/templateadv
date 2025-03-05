/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#540E10',
				primaryDark: '#460C0E',
				secondary: '#151414',
				tertiary: '#6C4141',
				quarterly: '#F0DDDB',
				quinary: '#1F1F1F'
			},
			fontFamily: {
				cinzel: ['Cinzel', 'serif'],
			},
		},
	},
	plugins: [],
}

