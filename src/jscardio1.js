
// challenge 1 : Reverse a string
// Return a string in reverse 
// ex : reverseString('hello') === 'olleh'

function reverseString( str ){
    
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
// let reverseStringOp = reverseString('HelloWorld');
// console.log(reverseStringOp);



//challenge 2 : Validate a palindrome 
// return true if palindrome and false if not

function isPalindrome( str ){
    let revString = str.split('').reverse().join('');
    if( str = revString){
        console.log('palindrome');
    }else{
        console.log('not a palindrome');
    }
    return revString === str;
}


//challenge 3 : Reverse a integer
// return the reversed integer of the given integer

function reverseInt(integer){
    const revString = integer.toString().split('').reverse()
        .join('');

    return parseInt(revString);
}


// challenge 4 : Capitalize a character
// return a string with the first letter of the every word capitalized
// 'i love javascript' === 'I Love Javascript'

function capitilizeCharacter(str){
    
    // const strArr = str.toLowerCase().split(' ');
    // for( let i =0 ; i < str.length; i++){
    //     strArr[i] = strArr[i].substr(0,1).toUpperCase() 
    //     + strArr[i].substr(1);
    // }
    // return strArr.join(' ');    

    return str
    .toLowerCase()
    .split(' ')
    .map( word =>
         word[0].toUpperCase() + word.substr(1)
    )
    .join(' ');

    // return str.replace(/\b[a-z]/gi, function(char) {
    //      return char.toUpperCase();
    // })
}



//challenge 5: Max character
// return the character that is most common in a string
function maxCharacter( str ){
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
    // str.split('').forEach((char) => {
    //     if(charMap[char]){
    //         charMap[char]++;
    //     } else {
    //         charMap[char] = 1;
    //     }
    // });

    for(let i=0; i< str.length; i++){
        if(charMap[str[i]]){
            charMap[str[i]]++;
        }else{
            charMap[str[i]] =1;
        }
    }
    
    for( let char in charMap){
        if(charMap[char]> maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}


// challenge  : FIZZBUZZ
// write a program that prints all the numbers from 1 to 100. 
// for multiples of 3 print fizz, for multiples of 5 print buzz. for multiple of
// both 3 and 5 print fizzbuzz

function fizzbuzz(){

    for( let i=0; i<=100; i++){
        if( i%3 == 0 && i%5 == 0){
            console.log('fizzbuzz');
        } else if( i% 3 == 0){
            console.log('fizz');
        } else if( i%5 == 0) {
            console.log('buzz');
        } else {
            console.log(i);
            
        }

    }
}

fizzbuzz();

