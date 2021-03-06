import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Calculator from './Calculator.jsx'
import Footer from './Footer.jsx'


export default class Layout extends Component {

  render() {
    return (
      <div className="container text-center mt-5">
        <h1 className="font-weight-light text-center">Currency Exchange</h1>
        <hr />
        <Calculator />
        <hr />
        <Footer />
      </div>
    )
  }
}
