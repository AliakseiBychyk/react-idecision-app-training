import './utils.js'
import subtract, { square, add } from './utils.js'
import isSenior, { isAdult, canDrink } from './person.js'

console.log('app.js is running')
console.log(square(7))
console.log(add(28, 3485))
console.log(subtract(100, 85))

// person.js
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if 21 and over, otherwise false
// import isAdult and canDrink
// use both printing result to the console

console.log('isAdult', isAdult(18))
console.log('canDrink', canDrink(18))

console.log('isSenior', isSenior(18))

// setting the default export and function
// grab the default and call it 