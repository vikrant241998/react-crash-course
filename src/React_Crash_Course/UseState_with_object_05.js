import React, {useState} from 'react'

const UseState_with_object_05 = () => {
    const [name, setName] = useState({firstName:'', middleName:'', lastName:''})
  return (
    <div>
        <form>
            <input type="text" value={name.firstName} placeholder="Enter your Name" onChange={e=> setName({...name, firstName: e.target.value})}/> &nbsp;
            <input type="text" value={name.lastName} placeholder="Enter your Name" onChange={e=> setName({...name, lastName: e.target.value})}/>
            <input type="text" value={name.middleName} placeholder="Enter your Name" onChange={e=> setName({...name, middleName: e.target.value})}/>
            <br/>
            <p>Your Name is: {name.firstName}</p>
            <p>Your Last Name is: {name.lastName}</p>
            <p>Your Middle Name is: {name.middleName}</p>
        </form>
    </div>
  )
}

export default UseState_with_object_05