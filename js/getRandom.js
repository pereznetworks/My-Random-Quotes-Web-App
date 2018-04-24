// random number vars and array to track last qoute and color displayed
let randomQuoteNumber;
let randomColorNumber;
const randomQuoteArray = [];
const randomColorArray = [];


/* The getRandomQoute function
    returns a random qoute object from the quotes array
*/
function getRandomQoute(quotes){

  // storing previous randomQuoteNumber
  randomQuoteArray.push(randomQuoteNumber);
  console.dir(randomQuoteArray);

  // getting a randomQuoteNumber
  randomQuoteNumber = Math.floor(Math.random() * quotes.length);

  if (randomQuoteArray.length > quotes.length) {
      for(let i = (randomQuoteArray.length - quotes.length); i < randomQuoteArray.length ; i++){
        // if previous randomNumber returned is EQUAL to any get a new randomNumber
        if ( randomQuoteNumber === randomQuoteArray[i] ) {
          randomQuoteNumber =  Math.floor(Math.random() * quotes.length);
          i = (randomQuoteArray.length - quotes.length);
        }
      }
    } else {
      for(let i = 0; i < randomQuoteArray.length ; i++){
        // if previous randomNumber returned is EQUAL to any of the last 10 get a new randomNumber
        if ( randomQuoteNumber === randomQuoteArray[i] ) {
          randomQuoteNumber =  Math.floor(Math.random() * quotes.length);
          i = 0;
        }
      }
    }

  return quotes[randomQuoteNumber];
}

// the getRandomColor function
function getRandomColor(colors){

  // storing previous randomColorNumber
  randomColorArray.push(randomColorNumber);
  console.dir(randomColorArray);

  // getting a randomColorNumber
  randomColorNumber = Math.floor(Math.random() * colors.length);

  if (randomColorArray.length > colors.length) {
      for(let i = (randomColorArray.length - colors.length); i < randomColorArray.length ; i++){
        // if previous randomNumber returned is EQUAL to any get a new randomNumber
        if ( randomColorNumber === randomColorArray[i] ) {
          randomColorNumber =  Math.floor(Math.random() * colors.length);
          i = (randomColorArray.length - colors.length);
        }
      }
    } else {
      for(let i = 0; i < randomColorArray.length ; i++){
        // if previous randomNumber returned is EQUAL to any of the last 10 get a new randomNumber
        console.log("index: " + i );
        console.log("randomColorArray[i]: " + randomColorArray[i] );
        if ( randomColorNumber === randomColorArray[i] ) {
          randomColorNumber =  Math.floor(Math.random() * colors.length);
          i = 0;
        }
      }
    }

  return colors[randomColorNumber];
}
