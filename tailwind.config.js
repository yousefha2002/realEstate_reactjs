/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        "primary":"#6f10a2",
        "lightGray":"#555"
      }
    },
  },
  plugins: [],
}

