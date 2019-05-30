/*
function greet(greeting, name) {
    console.log(`${greeting} ${name}`);
}
*/

function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet('hi');
greet(undefined, 'John');
greet();
/*
function sum() {
    console.log(arguments instanceof Array);
    var sum = 0;
    Array.prototype.forEach.call(arguments, function (value) { sum += value });
    console.log(sum);
}
*/

function sum(...values) {
    // console.log(arguments instanceof Array);
    // let sum = 0;
    // values.forEach(value => sum += value );
    
    console.log(values.reduce((prev, curr) => prev + curr));
}

sum(5, 4, 7, 11);