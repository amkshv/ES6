/*
function add(x, y) {
    return x + y;
}
*/

let add = (x, y) => x + y;
/*
let square = function(x) {
    return x * x;
}
*/
let square = x => x * x;
/*
let log = function() {
    console.log('logging');
}
*/
let log = () => console.log('logging');
/*
let multiply = function(x, y) {
    let result = x * y;
    return result;
}
*/
let multiply = (x, y) => {
    let result = x * y;
    return result;
}
/*
let getPerson = function() {
    return { name: 'John'};
}
*/
let getPerson = () => { name: 'John'};

//IIFE - immediately invoked function expression
/*
(function() {
    console.log('IIFE');
})();
*/
(() => console.log('IIFE'))();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
/*
numbers.forEach(function(num) {
    sum += num;
});
*/
numbers.forEach(num => sum += num);

let squared = numbers.map(n => n * n);

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
let person = {
    name: 'Bob',
    greet: function() {
        setTimeout(() => { //arrow-function escapes 'window' context of 'setTimeout' and uses 'person' as context
            console.log("Hi, I'm " + this.name);
            console.log('This is ', this);
        }, 1000);
        
    }
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

person.greet();