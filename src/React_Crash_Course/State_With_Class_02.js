/*State is managed with in Component
Vairable declare in the function Body
state can be changed
useState Hook- function Components
this.state- Class Components
*/

import React, { Component } from 'react'

export default class State_With_Class_02 extends Component {
constructor() {
  super()
    this.state={
      message: "Welcom to you"
    }
}

changeMessage(){
  this.setState({
    message: "Thank you for subscribe"
  })
}


  render() {
    return (
      <div>
        <h1>{this.state.message} </h1>
      <button onClick={()=>this.changeMessage()}>Subcribe</button>
      </div>
    )
  }
}
