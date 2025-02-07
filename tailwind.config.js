/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      abc:["Poppins","sherif"],
      head:["poetsen One","sherif"],
      title:["Playfair Display","sherif"],
      boxShadow: {
        'custom-green': '0px 4px 15px rgba(0, 255, 0, 0.5)',
      }
     }
    },
  },
  plugins: [],
}

