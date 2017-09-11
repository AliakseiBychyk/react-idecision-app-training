const getFirstName = (fullName) => fullName.split(' ')[0]

// arguments object - no longer bound with arrow functions

const add = function (a, b) {
  console.log(arguments) // in arrow function arguments is not defined
  return a + b
}

console.log(55, 1, 1001)

// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Philadelfia', 'New York', 'Dublin'],
  printPlacesLived: function () {
    console.log(this.name)    // accessible
    console.log(this.cities)  // accessible 


    this.cities.forEach(function (city) {
      console.log(this.name + ' has lived in ' + city )  // not accessible
    })

    const that = this
    this.cities.forEach(function (city) {
      console.log(that.name + ' has lived in ' + city)  // accessible because we define implicitly
    })

    this.cities.forEach(city => {
      console.log(this.name + ' has lived in ' + city)  // accessible 
    })
  }

  showPlaceLived: () => {
    this.cities.forEach(city => {
      console.log(this.name + ' has lived in ' + city) // not accessible because showPlaceLived is an arrow function and this of object 'user' does not bound to it
    })
  }

  checkPlaceLived() {
    this.cities.forEach(city => {
      console.log(this.name + ' has lived in ' + city)  // accessible because new synax of defining methods in es6
    })

    const cityMessages = this.cities.map(city => {
      return city;                                      // we create new array with the same items as in cities 
    })

  }

}

// Challenge area


const multipliers = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the number have been multiplied

  numbers: [5, 10, 15, 20],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy)
  },

}

console.log(multipliers.multiply()) // [25, 50, 75, 100]





