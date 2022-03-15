module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      spacing:{
        "width":"633px",
        "height":"612px",
        "70": "70px",
        "158": "158px",
        "307": "307px",
      },
      colors:{
        "bg":"#E5E5E5",
        "tw":"#58ACEA",
        "fc":"#3D5A96",
        "go":"#D14B3E"
      }
    },
  },
  plugins: [],
}
