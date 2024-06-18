import React, { Component } from 'react'

export default class Mystyle extends Component {
  render() {
    return (
      <div style={{color: `${this.props.color}`}}>
        <h1>{this.props.empNo}</h1>
      </div>
    )
  }
}


// const MyStyle =({color, empNo}) =>{
//     return(
//     <div style={{color: `${color}`}}>
//         <h1>{empNo}</h1>
//     </div>
//     )
// }

// const MyStyle2 =({color, empNo, name}) =>{
//     return(
//     <div style={{color: `${color}`}}>
//         <h1>{empNo}</h1>
//         <h1>{name}</h1>
//     </div>
//     )
// }

// export {MyStyle, MyStyle2}