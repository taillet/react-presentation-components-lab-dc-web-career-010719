// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super()
    this.state = {mood: 'happy'}
  }
  whichMood() {return this.state.mood == 'happy' ?  'sad' : 'happy'}

  handleClick = () => {this.setState({mood: this.whichMood()})}

  render() {
    return(<div onClick={this.handleClick}>{this.state.mood}</div>)
  }
}

export default SimpleComponent
