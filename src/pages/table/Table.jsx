import React, { Component } from 'react'
import Tab from '../../components/custom/Tab'
import InputForm from '../../components/custom/InputForm'

export default class Table extends Component {
  render() {
    return (
      <div className='content-wrapper'>
        <div className="row">
          <Tab content="Worawut" color="bg-info"/>
          <Tab content="app" color="bg-dark"/>
        </div>
        <InputForm name="fullname"/>
          <br />
          <InputForm name="email" />
          <div>OK Hello</div>
      </div>
    )
  }
}
