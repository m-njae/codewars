// DESCRIPTION:

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//Solution 

function getCount(str) {
    let count = 0;
    let vowel = ['a', 'e', 'i', 'o', 'u']
    for(i = 0; i < str.length; i++){
      for(j = 0; j < vowel.length; j++){
        if(str[i] === vowel[j]){
          count++
        }      
      }
    }
    return count;
  }