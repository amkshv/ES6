'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];
/*
let js = languages[0];
let php = languages[1];
let py = languages[2];
let ruby = languages[3];
*/

//let js, php, py, ruby;
//let [js, php, py, ruby] = languages

var js = 'JavaScript',
    php = 'PHP',
    py = 'Python',
    ruby = 'Ruby';


console.log(js, php, py, ruby);

// let scores = [3, 4, 5];
// let [low, ...rest] = scores;
// console.log(low, rest);

// let scores = [3, 4];
// let [low, mid, high = 5] = scores;
// console.log(low, mid, high);

var scores = [3, 4, [5, 6]];

var low = scores[0],
    mid = scores[1],
    _scores$ = _slicedToArray(scores[2], 2),
    high = _scores$[0],
    highest = _scores$[1];

console.log(low, mid, high, highest);

function computeScore(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        low = _ref2[0],
        mid = _ref2[1];

    console.log(low, mid);
}

computeScore([3, 4]);

function getScores() {
    return [3, 4, 5];
}

var score = getScores();
console.log(score);

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    l = _getScores2[0],
    m = _getScores2[1],
    h = _getScores2[2];

console.log(l, m, h);

var yes = 'yes';
var no = 'no';

var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];

console.log(yes, no);