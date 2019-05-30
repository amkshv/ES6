'use strict';

var staticLanguages = ['C0', 'C++', 'Java'];
var dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

//let languages = [staticLanguages, 'C#', dynamicLanguages, 'Pyton'];
var languages = [].concat(staticLanguages, ['C#'], dynamicLanguages, ['Pyton']);

console.log(languages);

function add(x, y, z) {
    console.log(x + y + z);
}

var numbers = [1, 2, 3];

//add(numbers);
add.apply(undefined, numbers);