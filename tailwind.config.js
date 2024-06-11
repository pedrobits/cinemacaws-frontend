/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#5EAC3C',
        customGreenDark: '#4A8B30',
        customDark: '#020617',
        customLightBlue: '#87CEEB',
      },
      backgroundImage: {
        'custom-hr': 'linear-gradient(to right, #4A8B30 18%, white 10%)',
      },
    },
  },
  plugins: [],
});
