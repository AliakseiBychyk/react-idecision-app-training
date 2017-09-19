import React from 'react'
import ReactDOM from 'react-dom'

import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(
  <IndecisionApp options={['option one', 'option two']}/>,
  document.getElementById('app')
)

class OldSyntax {
  constructor() {
    this.name='Mike'
    this.getGreeting = this.getGreeting.bind(this)
  }

  getGreeting() {
    return `Hi. My name is ${this.name}`
  }
}
const oldSyntax = new OldSyntax()
const oldGetGreeting = oldSyntax.getGreeting
console.log(oldGetGreeting())  // won't work without binding

// -------------------

class NewSyntax {
  name = 'Jen'

  getGreeting = () => {
    return `Hi. My name is ${this.name}`
  }
}
const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting())