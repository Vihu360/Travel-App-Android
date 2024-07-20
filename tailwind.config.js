/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
		extend: {
			fontFamily: {
        outfit: ['Outfit-Regular', 'Outfit-Bold', 'Outfit-Italic'],
      },

		},
  },
  plugins: [],
}
