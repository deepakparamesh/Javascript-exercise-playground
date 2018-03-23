

function testVar(){
    var a = 5;
    
    if(true){
       var a = 10
        console.log(a);
    }
    console.log(a)
}
testVar();


function testLet(){
    let a = 5;

    if(true){
        let a = 10
        console.log(a);        
    }
    console.log(a);
}
testLet();


for (let index = 0; index < 10; index++) {
    console.log(index);
}

const sample = 'Hai This is constant! you cannot change it'
console.log(sample);

