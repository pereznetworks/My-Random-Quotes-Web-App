// setting myInterval value ahead of clearInterval() and setInterval() to be used in printQuote
let myInterval = 30000;

//selecting html the body and "qoute-box" div elements
const quoteBox = document.getElementById("quote-box");
const body = document.getElementsByTagName("body");
const loadQuote = document.getElementById('loadQuote');

/* the printQuote function
  // concatenats and write the quote object, wrapped in htmlString, to the selected quote-box element
  // in addition...
  // first thing printQuote function does is clearInterval(myInterval)
  // last thing printQuote does is to set an myInterval of 30000 (or 30 secs ) before running again
*/
function printQuote(){

  //when printQuote is run, stop or clear myInterval,
  clearInterval(myInterval);

  //calls the getRandomQoute, stores the result in const, displayQuote
  let displayQuote = getRandomQoute(quotes);

  //calls the getRandomColor, stores the result in const, displayColor
  let displayColor = getRandomColor(colors);

  // concatenat string, wrapping quote values in approppriate html tags in an htmlString
  let htmlString = `<p class="quote">${displayQuote.quote}</p><p class="source">${displayQuote.source}`;

  // if .citation property is present the value is added to htmlString
  if (displayQuote.citation) {
      htmlString += `<span class="citation">${displayQuote.citation}</span>`;
  }

  // if .year propety is present the value is added to htmlString as well
  if (displayQuote.date) {
      let quoteDate = new Date(displayQuote.date);
      htmlString += `<span class="year">${quoteDate.getFullYear()}</span></p>`;
  }

  // if .tag propety is present the value is added to htmlString as well
  if (displayQuote.tag) {
      htmlString += `<p class="tag"><span>${displayQuote.tag}</span></p>`;
  }
   // write the htmlString to the quote-box div
   quoteBox.innerHTML = htmlString;

   // and assign randomColorNumber, stored in the displayColor var, to the Body element background-color attribute
   body[0].style = `background-color:${displayColor};`;
  // and assign the displayColor also to the loadQuote button element background-color attribute
   loadQuote.style = `color:black;background-color:${displayColor};`;

   // reset myInterval, by setting Interval to wait 30 secs before running printQuote again
   myInterval = setInterval(function (){printQuote();}, 30000);


};
