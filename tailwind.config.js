module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      "colors": {
        "darkpo":"#141414",
        "blackpo":"#101010",
        "bluepo":"#2330A3",
        "greypo" : "#C1C1C1",
        "transpo" : "#171717",
        "hoverpo" : "#1F1F1F",
        "bluelightpo" : "#375DCE",
        "greyhoverpo" : "#202020",
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
        'gloock' :['Gloock'],
        'poppins':['Poppins'],
      },
      "screens" : {
        "laptoplarge" : "1250px",
        "laptopmax" : "1310px",
      },
      "fontSize" : {
        "xxs" : "0.675rem"

      },
      "letterSpacing" : {
        "widexl" : ".40em",

      },
    },

  },
  plugins: [],
}
