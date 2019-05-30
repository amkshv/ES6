let firstName = 'Bill',
lastName = 'Gates',
email = 'billgates@microsoft.com';

let person = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hello, my name is ${firstName} ${lastName}`)
    },
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(value) {
        this.firstName = value;
    }
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
console.log(person);
person.sayHello();

let property = 'firstName';

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
    return {
        [prop]: value,
        [prop.toUpperCase()]: value,
        ['get' + prop]() {
            return this.prop
        }
    }
}

let car = createCar('vin', 1);

console.log(car);