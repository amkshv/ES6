/*
function applyForVisa(documents, resolve, reject) {
    console.log('Application processing...');
    setTimeout(() => { 
        Math.random() > .5 ? resolve({}) : reject('Visa denied!')
    }, 2000)
}
*/

function applyForVisa(documents) {
    console.log('Application processing...');
    let promise = new Promise(function(resolve, reject) {
            setTimeout(() => { 
                Math.random() > .5 ? resolve({}) : reject('Visa denied!')
            }, 2000);
        });
        return promise;
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Booking Hotel.');
}

function buyTickets() {
    console.log('Buying tickets.');
}
/*
applyForVisa({}, function(visa) {
    console.info("You've got Visa!");
    bookHotel(visa, function(reservation) {
        buyTickets(reservation, function(){

        })
    }, function() {
        
    })

}, function(reason) {
    console.error(reason)
};
*/
/*
applyForVisa({})
    .then(function(visa) {
        console.info("You've got Visa!");
    },
    function(reason) {
        console.error(reason);
    });
*/
applyForVisa({})
    .then(visa => {
        console.info("You've got Visa!");
        return visa; 
    })
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error));