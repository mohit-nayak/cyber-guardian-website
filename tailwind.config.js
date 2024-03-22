/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: {
					light: "#44b3b7",
					DEFAULT: "#16A1A5",
					dark: "#0f7073",
				},
			},
			colors: {
				primary: {
					light: "#44b3b7",
					DEFAULT: "#16A1A5",
					dark: "#0f7073",
				},
			},
		},
	},
	plugins: [],
};
