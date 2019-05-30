let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari'];

console.log('for');
for(let index = 0; index < browsers.length; index++) {
    console.log(browsers[index]);
}

console.log('for...in');
for(let index in browsers) {
    console.log(browsers[index]);
}

console.log('forEach');
browsers.forEach(browser => console.log(browser));

console.log('for...of');
for(let browser of browsers) {
    console.log(browser);
}