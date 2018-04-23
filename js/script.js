// TeamTreeHouse - Project 1 - random qoute generator

// setting myInterval value ahead of clearInterval() and setInterval() to be used in printQuote
let myInterval = 30000;

// random number vars and array to track last qoute and color displayed
let randomQuoteNumber = 0;
let randomColorNumber = 0;
const randomQuoteArray = [];
const randomColorArray = [];


//selecting html the body and "qoute-box" div elements
const quoteBox = document.getElementById("quote-box");
const body = document.getElementsByTagName("body");
const loadQuote = document.getElementById('loadQuote');

/* the qoutes array:
    properties; QOUTE, SOURCE; statement and name of person who who said it
    optional properties...
     CITIATION propety, where quote taken from
     DATE property, when statment made, stores year or in milliseconds before or after Jan. 1st, 1970
     and a Tag propety (category)
*/

const quotes=[
  {
    quote: "Like apples of gold in silver carvings, Is a word spoken at the right time.",
    source: "Proverbs 25:11",
    tag: "Bible"
  },
  { quote: "All things, therefore, that you want men to do to you, you also must do to them.",
    source: "Matthew 7:12",
    tag: "Bible"
  },
  {
    quote: "I have come to know that everything the true God makes will endure forever.",
    source: "Ecclesiates 3:14",
    tag: "Bible"
  },
  {
    quote: " God is love.",
    source: "1 John 4:8",
    tag: "Bible"
  },
  {
    quote: "Of all the gin joints in all the towns in all the world, she walks into mine.",
    source: "Humphrey Bogart, as Rick",
    citation: "Casablanca",
    date: -855158400000,
    tag: "Movie"
  },
  {
    quote: "The Lord prefers common-looking people. That is why he makes so many of them.",
    source: "Abraham Lincoln",
    tag: "Presidents"
  },
  {
    quote: "To get the full value of joy you must have somebody to divide it with.",
    source: "Mark Twain",
    tag: "Writers"
  },
  {
    quote: "I HAVE a dream.",
    source: "Martin Luther King, Jr.",
    date: -200250000000,
    tag: "Inspiring"
  },
  {
    quote: "If I have seen further it is by standing on ye sholders of Giants.",
    source: "Isaac Newton",
    citation:  "2017 Historical Society of Pennsylvania - Digital Library HSP, photo of Letter from Sir Isaac Newton to Robert Hooke",
    date: -9306201600000,
    tag: "Scientists"
  },
  {
    quote: "Experience keeps a dear school, but fools will learn in no other, and scarce in that.",
    source: "Benjamin Franklin",
    citation: "Poor Richard Alamanc",
    tag: "American Founding Fathers"
  }
];

// used to set background-color attribute for body element and loadQuote button element
const colors = ["#ff4500", "#3cb371", "#6A5ACD", "#808080", "#800000", "#A52A2A", "#800080", "#FF7F50", "#008B8B", "#808000"];

/* The getRandomQoute function
    returns a random qoute object from the quotes array
*/
function getRandomQoute(quotes){

  // storing previous randomQuoteNumber
  randomQuoteArray.push(randomQuoteNumber);
  // getting a randomColorNumber
  randomQuoteNumber = Math.floor(Math.random() * quotes.length);

  // if previous randomNumber returned DOES NOT EQUAL new randomNumber, return it
  if ( randomQuoteNumber !== randomQuoteArray[ randomQuoteArray.length - 1 ] ) {
    return quotes[randomQuoteNumber];
  } else {
    // otherwise, get and return a second randomNumber
    randomQuoteNumber =  Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteNumber];
  }

}

// the getRandomColor function
function getRandomColor(colors){

  // storing previous randomColorNumber
  randomColorArray.push(randomQuoteNumber);
  // getting a new randomColorNumber
  randomColorNumber = Math.floor(Math.random() * colors.length);

  // if previous randomNumber returned DOES NOT EQUAL new randomNumber, return it
  if ( randomColorNumber !== randomColorArray[ randomColorArray.length - 1 ] ) {
    return colors[randomColorNumber];
  } else {
    // otherwise, get and return a second randomNumber
    randomColorNumber =  Math.floor(Math.random() * colors.length);
    return colors[randomColorNumber];
  }

}
/* the printQuote function
  takes NO paramaters, has no return statement
  get a random quote, concatenats with in approppriate html tags and writes to selected quote-box div
  also sets background-color for Body and loadQuote elements to a randomColor
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

// calling printQuote once before the addEventListener
// concatenats and write the quote object, wrapped in htmlString, to the selected quote-box element
// in addition...
// first thing printQuote function does is clearInterval(myInterval)
// last thing printQuote does is to set an myInterval of 30000 (or 30 secs ) before running again
printQuote();

// event listener to respond to clicks on "Show another quote" button
// when user clicks anywhere on the button, the "printQuote" function is called
loadQuote.addEventListener("click", printQuote, false);
