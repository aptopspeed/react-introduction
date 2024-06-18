import React, { Component } from "react";

export default class InputForm extends Component {
  render() {
    return (
      <>
        <label>{this.props.name}</label>
        <br />
        <input type="text" />
      </>
    );
  }
}

// const InputForm = ({ name }) => {
//   return (
//     <>
//       <label>{name}</label>
//       <br />
//       <input type="text" />
//     </>
//   );
// };
// export default InputForm;
