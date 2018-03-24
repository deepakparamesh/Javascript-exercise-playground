'use strict';

// challenge 1 : Reverse a string
// Return a string in reverse 
// ex : reverseString('hello') === 'olleh'

function reverseString(str) {

    //method 1 using predefined methods
    // return str.split('')
    //  .reverse()
    //  .join('');

    // method 2 - using negative decrement
    // let revString = '';
    // for(let i = str.length-1 ; i >= 0; i--){
    //     revString = revString +  str[i]; 
    // }
    // return revString;

    // method 3 - using a increment for loop
    // let revString = '';
    // for(let i= 0 ; i< str.length ; i++){
    //     revString = str[i] + revString;
    // }
    // return revString;

    //method 4 - using 
    // let revString = '';
    // for ( let char of str){
    //     revString = char + revString;
    // }
    // return revString;

    // method 5 - Higher order array method
    // let revString = '';
    // str.split('').forEach((element) => {
    //     revString = element + revString;
    // });
    // return revString;

    //method 6 - 
    // return str.split('').reduce( (revString, char) =>{
    //     return char + revString;
    // }, '');

}

var output = reverseString('itanimullI');
console.log(output);

//challenge 2 : Validate a palindrome 
// return true if palindrome and false if not

function isPalindrome(str) {
    var revString = str.split('').reverse().join('');

    if (str = revString) {
        console.log('palindrome');
    } else {
        console.log('not a palindrome');
    }

    return revString === str;
}

var palindrome = isPalindrome('Malayalam');
console.log(palindrome);

//challenge 3 : Reverse a integer
// return the reversed integer of the given integer

function reverseInt(integer) {
    var revString = integer.toString().split('').reverse().join('');

    return parseInt(revString);
}

var reverseIntop = reverseInt(123654789);
console.log(reverseIntop);

// challenge 4 : Capitalize a character
// return a string with the first letter of the every word capitalized
// 'i love javascript' === 'I Love Javascript'
function capitilizeCharacter(str) {
    var strArr = str.toLowerCase().split(' ');

    for (var i = 0; i < str.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    }

    return strArr.join(' ');
}

var capitilizeOp = capitilizeCharacter('I Love mySELF');