/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    // Ensure this points to your source code
    "./src/app/**/*.{js,tsx,ts,jsx}",
    // If you use a `src` directory, add: './src/**/*.{js,tsx,ts,jsx}'
    // Do the same with `components`, `hooks`, `styles`, or any other top-level directories
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        surfer: ["OriginalSurfer"], // Doit correspondre au nom configuré dans useFonts
        sans: ["DMSans"],
      },
    },
  },
  plugins: [],
};
