/*  Props get passed to the components
    Function Parameters
    Props are immutable
    Props-function Components
    this.props- Class Components
*/

import React from 'react'

const Props_1st = (Props) => {
  return (
    <div>


        <h1>This is a Props Components</h1>
        <h2>Name: {Props.name}</h2>
        <h2>LastName: {Props.lastName}</h2>
    </div>
  )
}

export default Props_1st