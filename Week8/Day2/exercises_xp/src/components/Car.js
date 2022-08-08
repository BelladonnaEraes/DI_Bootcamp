/*const Car = (props) => {
  const {name, model} = props
  return (
    <h1>This car is {model}</h1>
  )*/
import React from 'react'

class Car extends React.Component {
    constructor() {
      super()
      this.state = {
        color: 'red'
      }
    }
    render() {
      return// eslint-disable-next-line
        (<div>
          <h2>This car is {this.state.color}</h2>
        </div>)
    }
  }


export default Car
