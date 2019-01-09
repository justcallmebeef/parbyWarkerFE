import React, { Component, Fragment } from 'react'
import './App.css'
import Home from './components/Home'

const glassesAPI = "https://young-badlands-50402.herokuapp.com/"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Home />
      </Fragment>
    )
  }
}

export default App
