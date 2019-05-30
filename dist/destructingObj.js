'use strict';

var user = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
    // let firstName = person.firstName;
    // let lastName = person.lastName;

    // let {firstName, lastName} = user;
    // let {firstName: first, lastName: last, age = 25} = user;

};var first = user['first' + 'Name'],
    last = user.lastName,
    fb = user.social.facebook,
    _user$age = user.age,
    age = _user$age === undefined ? 25 : _user$age;


console.log(first, last, fb, age);

function post(url, _ref) {
    var _ref$data = _ref.data,
        firstName = _ref$data.firstName,
        lastName = _ref$data.lastName,
        cache = _ref.cache;

    console.log(firstName, lastName, cache);
}

var result = post('api/users', { data: user, cache: false });

function getUserInfo() {
    return {
        firstname: 'John',
        lastname: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    };
}

var _getUserInfo = getUserInfo(),
    firstname = _getUserInfo.firstname,
    lastname = _getUserInfo.lastname,
    twitter = _getUserInfo.social.twitter;

console.log(firstname, lastname, twitter);