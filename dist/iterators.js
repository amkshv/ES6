'use strict';

var browsers = ['Chrome', 'Firefox', 'Edge', 'Safari'];

console.log('for');
for (var index = 0; index < browsers.length; index++) {
    console.log(browsers[index]);
}

console.log('for...in');
for (var _index in browsers) {
    console.log(browsers[_index]);
}

console.log('forEach');
browsers.forEach(function (browser) {
    return console.log(browser);
});

console.log('for...of');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = browsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var browser = _step.value;

        console.log(browser);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}