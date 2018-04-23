// random number vars and array to track last qoute and color displayed
let randomQuoteNumber = 0;
let randomColorNumber = 0;
const randomQuoteArray = [];
const randomColorArray = [];


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
