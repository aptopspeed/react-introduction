import React, { Component } from 'react'
import Mystyle from '../../components/custom/Mystyle'
// import { MyStyle, MyStyle2 } from '../../components/custom/Mystyle'

export default class ShowMe extends Component {
  render() {
    return (
      <div className='content-wrapper'>
        <Mystyle color="red" empNo="LC833"/>
      </div>
    )
  }
}
