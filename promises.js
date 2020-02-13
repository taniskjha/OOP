/* Promises has three states

Pending: initial state, neither fulfilled nor rejected.

Fulfilled: meaning that the operation completed successfully. resolve() was called

Rejected: meaning that the operation failed. reject() was called

A pending promise can either be fulfilled with a value, or rejected with a reason (error)   */

// Callback 1

function ex(behavior, callback) {
    if(!behavior) {
        return callback(`ex is no where to found error`)
    } else {

    return callback(`ex was ${behavior}` ) }
}

ex('crazy', console.log);
ex(null, console.log)

// Converting Callback to promise 1

const ex = (behavior) => {
    return new Promise((resolve,reject) => {
        if(!behavior) {
            reject(`ex is no where to found error`)
        } else {
            resolve((`ex was ${behavior}` ))
        }
    })
};

ex('crazy').then(console.log);
ex().catch(console.log)

// Callback 2 

function hungry(food,callback) {
    if(!food) {
        return callback(`drink cola`)
    } else {
        return callback(`eat ${food}`)
    }
}

hungry('pizza', console.log)
hungry(null, console.log)

// converting Callback 2 to promise

const hungry = food => {
    return new Promise((resolve,reject) => {
        if(!food) {
            reject(`drink cola`) 
        } else {
            resolve(`eat ${food}`)
        }
    })
}

hungry('pizza').then(console.log)
hungry('').catch(console.log)



