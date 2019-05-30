'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('Hello, my name is ' + firstName + ' ' + lastName);
    },

    get: function get() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function set(value) {
        this.firstName = value;
    }
    /*
    Object.defineProperty(person, 'fullName', {
        get: function() {
            return this.firstName + ' ' + this.lastName;
        },
        set: function(value) {
            this.firstName = value;
        }
    });
    */
};console.log(person);
person.sayHello();

var property = 'firstName';

person[property];
person['firstName'];

/*
function createCar(prop, value) {
    var car = {};

    car[prop] = value;

    return car;
}
*/

function createCar(prop, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, prop, value), _defineProperty(_ref, prop.toUpperCase(), value), _defineProperty(_ref, 'get' + prop, function () {
        return this.prop;
    }), _ref;
}

var car = createCar('vin', 1);

console.log(car);