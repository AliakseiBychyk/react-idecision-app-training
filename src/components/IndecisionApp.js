import React, { Component } from 'react'

import AddOption from './AddOption'
import Header from './Header'
import Actions from './Actions'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) this.setState({ options })
    } catch (e) {
      // do nothing at all
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
      
  }

  componentWillUnmount() {
    console.log('component wil unmount')
  }

  handleDeleteOptions = () => {
    this.setState({ options: [] })
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState({
      options: this.state.options.filter((option) => optionToRemove !== option)
    })
  }
  
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState({ selectedOption: option })
  }
  
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is already exist'
    } else {
      this.setState({
        options: [...this.state.options, option]
      })
    }
  }

  handleClearSelectedOption = () => {
    this.setState({
      selectedOption: null
    })
  }
  
  render () {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <h1>Title</h1>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Actions
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}