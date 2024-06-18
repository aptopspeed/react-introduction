import React, { Component } from "react";

export default class TestState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Worawut Boonwong",
      employeeNumber : "LC883"
    };
  }

handleClick =()=> {
    this.setState({name : "ok"})
}


  render() {
    return(
    <div className="content-wrapper">
        <h1>{this.state.name}</h1>
        <button onClick={this.handleClick}>Click to see only lastname</button>
    </div>
    ) 
  }
}


// import React, { useState } from 'react'

// function TestState() {
//     const [nameActive, setNameActive] = useState("Worawut Boonwong")

//     const handleClick =()=> {
//      setNameActive("OK")
//     }

//   return (
//     <div className="content-wrapper">
//         <h1>{nameActive}</h1>
//         <button onClick={handleClick}>Click to see only lastname</button>
//      </div>
//   )
// }

// export default TestState
