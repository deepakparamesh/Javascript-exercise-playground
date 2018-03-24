'use strict';

function testVar() {
    var a = 5;

    if (true) {
        var a = 10;
        console.log(a);
    }
    console.log(a);
}
testVar();

function testLet() {
    var a = 5;

    if (true) {
        var _a = 10;
        console.log(_a);
    }
    console.log(a);
}
testLet();

for (var index = 0; index < 10; index++) {
    console.log(index);
}

var sample = 'Hai This is constant! you cannot change it';
console.log(sample);