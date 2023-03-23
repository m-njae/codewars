// DESCRIPTION:

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//Solution 

function reverseWords(str) {
    return(str.split(" ")
              .map(word => 
                  word.split('')
                      .reverse()
                      .join(''))  
              .join(' '))
  }
  
  //split the string into an array, separated by 1 space.
  //alter the array so that each individual word, is split into arrays, (so arrays within an array)
  //then reverse those characters within each array
  //then join them back together into 1 word strings.
  // now you have an array with all words reversed
  //then you join the array together into a string.