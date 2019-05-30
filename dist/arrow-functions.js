'use strict';

/*
function add(x, y) {
    return x + y;
}
*/

var add = function add(x, y) {
    return x + y;
};
/*
let square = function(x) {
    return x * x;
}
*/
var square = function square(x) {
    return x * x;
};
/*
let log = function() {
    console.log('logging');
}
*/
var log = function log() {
    return console.log('logging');
};
/*
let multiply = function(x, y) {
    let result = x * y;
    return result;
}
*/
var multiply = function multiply(x, y) {
    var result = x * y;
    return result;
};
/*
let getPerson = function() {
    return { name: 'John'};
}
*/
var getPerson = function getPerson() {
    name: 'John';
};

//IIFE - immediately invoked function expression
/*
(function() {
    console.log('IIFE');
})();
*/
(function () {
    return console.log('IIFE');
})();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = 0;
/*
numbers.forEach(function(num) {
    sum += num;
});
*/
numbers.forEach(function (num) {
    return sum += num;
});

var squared = numbers.map(function (n) {
    return n * n;
});

//console.log(sum);
// console.log(squared);

/*
let person = {
    name: 'Bob',
    greet: function()  {
        var that = this;                            //added var here
        setTimeout(function(){
            console.log("Hi, I'm " + that.name);    //sustituted 'this' to 'that'
            console.log('This is ', this);
            console.log('That is ', that);
        }, 1000);
        
    }
}
*/
var person = {
    name: 'Bob',
    greet: function greet() {
        var _this = this;

        setTimeout(function () {
            //arrow-function escapes 'window' context of 'setTimeout' and uses 'person' as context
            console.log("Hi, I'm " + _this.name);
            console.log('This is ', _this);
        }, 1000);
    }
    /*
    let person = {
        name: 'Bob',
        greet: () => { //it won't work, arrow-function escapes 'person' context and jumps to 'window' context
            console.log("Hi, I'm " + this.name);
            console.log(this);
        }
    }
    */

};person.greet();