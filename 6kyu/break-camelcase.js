// DESCRIPTION:

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//Solution 

// complete the function
function solution(string) {
    let i = 0;
    let variable = ''
      while(i < string.length){
        if(string[i] == string[i].toLowerCase()){
          variable += string[i]
        }else if (string[i] == string[i].toUpperCase()){
          variable += ' ' + string[i]
        }
        i++
      }
    return variable
   }