let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];
/*
let js = languages[0];
let php = languages[1];
let py = languages[2];
let ruby = languages[3];
*/

//let js, php, py, ruby;
//let [js, php, py, ruby] = languages

let [js, php, py, ruby] = ['JavaScript', 'PHP', 'Python', 'Ruby'];

console.log(js, php, py, ruby);


// let scores = [3, 4, 5];
// let [low, ...rest] = scores;
// console.log(low, rest);

// let scores = [3, 4];
// let [low, mid, high = 5] = scores;
// console.log(low, mid, high);

let scores = [3, 4, [5, 6]];
let [low, mid, [high, highest]] = scores;
console.log(low, mid, high, highest);

function computeScore([low, mid]) {
    console.log(low, mid);
}

computeScore([3, 4]);

function getScores() {
    return [3, 4, 5]
}

let score = getScores();
console.log(score);
let [l, m, h] = getScores();
console.log(l, m, h);

let yes = 'yes';
let no = 'no';

[yes, no] = [no, yes];
console.log(yes, no);