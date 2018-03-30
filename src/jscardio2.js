// challenge1 : Longest word.
// Return the longest word of a string.
function longertWord( sent ){
    const wordArr = sent.toLowerCase().match(/[a-z0-9]+/g);

    
    const sorted = wordArr.sort( function(a, b) {
        // console.log(a + b);
        
        return console.log(b.length - a.length);
    });
    console.log(sorted);
    
    
}

longertWord('Hai, this is deepak');
// console.log(longertWord);


