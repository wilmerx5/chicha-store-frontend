/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx,tsx,}'
  ],
  theme: {
    extend: { 
      width: {
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '100vw': '100vw',
      },maxHeight: {
        '10vh': '10vh',
        '20vh': '20vh',
        '25vh': '25vh',

        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
      margin:{
        'header':'115px',
        '50vw':'50vw'
      },
      colors:{
        'brown':'#6F360C'
      }
    
    },
  },
  plugins: [],
}

