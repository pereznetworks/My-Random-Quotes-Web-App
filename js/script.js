// TeamTreeHouse - Project 1 - random qoute generator

// move into printQuote function, before submitting
let htmlString = "test";

//move into getRandomQoute function before submitting
let randomNumber = 0;

// del before submitting
let times = 0;


//selecting html the body and "qoute-box" div elements
const quoteBox = document.getElementById("quote-box");
const body = document.getElementsByTagName("body");
const loadQuote = document.getElementById('loadQuote');

// used to track last quote displayed and prevent displaying the same qoute twice in a row
const numArray = [];

/* the qoutes array:
    properties; QOUTE, SOURCE; statement and name of person who who said it
    optional properties...
    CITIATION where qoute is taken from,
     and the YEAR person made the statement,
     and a Tag propety (category)
*/

const quotes = [
  {
    quote: "Like apples of gold in silver carvings, Is a word spoken at the right time.",
    source: "Proverbs 25:11",
    tag: "Bible"
  },
  {
    quote: "Of all the gin joints in all the towns in all the world, she walks into mine.",
    source: "Humphrey Bogart, as Rick",
    citation: "Casablanca",
    year: 1942,
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
    year: 1963,
    tag: "Inspiring"
  },
  {
    quote: "If I have seen further it is by standing on ye sholders of Giants.",
    source: "Isaac Newton",
    citation:  "2017 Historical Society of Pennsylvania - Digital Library HSP, photo of Letter from Sir Isaac Newton to Robert Hooke, dated February 5, 1675",
    year: 1675,
    tag: "Scientists"
  },
  {
    quote: "Experience keeps a dear school, but fools will learn in no other, and scarce in that.",
    source: "Benjamin Franklin",
    citation: "Poor Richard Alamanc",
    year: 1732,
    tag: "American Founding Fathers"
  }
];

// used for body tag background-color
const colors = ["red", "green", "blue", "grey", "maroon", "brown", "purple"];

// simple function to return a whole random number between 1 and a given maxNum
// added a number Array and if statement to prevent the same number from being returned twice
function getRandomNum(maxNum){

  // storing index (randomNumber) of last randomNumber returned
  numArray.push(randomNumber);
  // setting i, an index to last element on numArray
  let i = numArray.length - 1;
  console.dir(numArray);

  randomNumber = Math.floor(Math.random() * maxNum);

  console.log(`randomNumber: ${randomNumber}\nnumArray[${i}]:${numArray[i]}`);

  // if last randomNumber returned DOES NOT EQUAL new randomNumber, return it
  if ( randomNumber !== numArray[ numArray.length - 1 ] ) {
    return randomNumber;
  } else {
    // otherwise, get and return a second randomNumber
    randomNumber =  Math.floor(Math.random() * maxNum);
    console.log(`randomNumber: ${randomNumber}`);
    return randomNumber;
  }

}

/* The getRandomQoute function
    returns a random qoute object from the quotesArray
*/
function getRandomQoute(quotesArray){

  // getting a randomNumber
  randomNumber = getRandomNum(quotesArray.length);
  // using randomNumber as index to return a random qoute object from quotesArray
  return quotesArray[randomNumber];

}

/* the printQuote function
  takes NO paramaters, no return statement
  get a random quote, wraps in approppriate html tags and writes to html doc
  Body element background-color set to a randomColor when new qoute displayed
*/


function printQuote(){

  // remove before submitting
  times += 1;
  console.log("here another qoute: " + times + "\ndisplaying quote number: " + randomNumber);

  //calls the getRandomQoute, stores the result in const, displayQuote
  const displayQuote = getRandomQoute(quotes);

  // concatenat string, wrapping quote values in approppriate html tags in an htmlString
  htmlString = `<p class="quote">${displayQuote.quote}</p><p class="source">${displayQuote.source}`;

  // if .citation property is present the value is added to htmlString
  if (displayQuote.citation) {
      htmlString += `<span class="citation">${displayQuote.citation}</span>`;
  }

  // if .year propety is present the value is added to htmlString as well
  if (displayQuote.year) {
      htmlString += `<span class="year">${displayQuote.year}</span></p>`;
  }

  // if .tag propety is present the value is added to htmlString as well
  if (displayQuote.tag) {
      htmlString += `<p class="tag"><span>${displayQuote.tag}</span></p>`;
  }
   // write the htmlString to the approppriate div
   quoteBox.innerHTML = htmlString;

   // using same randomNumber, get a random color from colors Array
   var randomColor = colors[randomNumber];

   // and assign the randomColor to the Body element background-color attribute
   body[0].style = `background-color:${randomColor};`;
  // and assign the randomColor to the loadQuote element background-color attribute
   loadQuote.style = `color:black;background-color:${randomColor};`;

};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

// calling printQuote once before the addEventListener so a random quote displays when loading the page
printQuote();

// addEventListener activates when button clicked, displaying another random quote

loadQuote.addEventListener("click", printQuote, false);
setInterval(function (){printQuote();}, 10000);
