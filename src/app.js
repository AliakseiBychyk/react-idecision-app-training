import React from 'react'
import ReactDOM from 'react-dom'

import IndecisionApp from './components/IndecisionApp'


ReactDOM.render(<IndecisionApp options={['option one', 'option two']}/>, document.getElementById('app'))
