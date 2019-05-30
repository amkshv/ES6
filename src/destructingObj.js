let user = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
}
// let firstName = person.firstName;
// let lastName = person.lastName;

// let {firstName, lastName} = user;
// let {firstName: first, lastName: last, age = 25} = user;

let {['first' + 'Name']: first, lastName: last, social: { facebook: fb }, age = 25} = user;

console.log(first, last, fb, age);

function post(url, { data: { firstName, lastName }, cache }) {
    console.log(firstName, lastName, cache);
}

let result = post('api/users', { data: user, cache: false });

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

let { firstname, lastname, social: { twitter }} = getUserInfo();

console.log( firstname, lastname, twitter);