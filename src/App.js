import React, { Component, Fragment } from 'react'
import './App.css'
import Home from './components/Home'
import Challenge from './components/Challenge'
import { Route, Link, Switch } from 'react-router-dom'

const productAPI = "https://young-badlands-50402.herokuapp.com/"

class App extends Component {
  constructor() {
    super() 
    this.state = {
      products: [], 
    }
  }

  componentDidMount() {
    fetch(productAPI)
    .then(response => response.json())
    .then(response => this.setState({ products: response.glasses}))
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/challenge' render={() => (<Challenge products={this.state.products} />)} />
        </Switch>
      </Fragment>
    )
  }
}

export default App
