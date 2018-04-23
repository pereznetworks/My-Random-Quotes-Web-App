// TeamTreeHouse - Project 1 - random qoute generator

/* required files
   js/data.js  - quotes and colors array
   js/getRandom.js - functions for gettings random quotes and random colors
   js/printQuote - function for concatenating quote object into htmlString and printing to html 
*/

//calling printQuote once so that a quote appears when the html first document loads
printQuote();

// event listener to respond to clicks on "Show another quote" button
// when user clicks anywhere on the button, the "printQuote" function is called
loadQuote.addEventListener("click", printQuote, false);
