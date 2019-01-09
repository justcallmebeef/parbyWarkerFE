import React, { Component, Fragment } from 'react'
import './App.css'
import Home from './components/Home'
import Challenge from './components/Challenge'
import { Route, Link, Switch } from 'react-router-dom'
import ProductProfile from './components/ProductProfile';

const productAPI = "https://young-badlands-50402.herokuapp.com/"

class App extends Component {
  constructor() {
    super() 
    this.state = {
      products: [], 
      selected: ""
    }
  }

  componentDidMount() {
    fetch(productAPI)
    .then(response => response.json())
    .then(response => this.setState({ products: response.glasses}))
  }

  getProfile = (id) => {
    this.setState({
      selected: id 
    })
  }

  getMonth = (month) => {
    switch(month) {
      case 0: 
      month = "January"; 
      break; 
      case 1: 
      month = "February"; 
      break; 
      case 2: 
      month = "March"; 
      break;
      case 3: 
      month = "April"; 
      break;
      case 4: 
      month = "May"; 
      break;
      case 5: 
      month = "June"; 
      break;
      case 6: 
      month = "July"; 
      break;
      case 7: 
      month = "August"; 
      break;
      case 8: 
      month = "September"; 
      break;
      case 9: 
      month = "October"; 
      break;
      case 10: 
      month = "November"; 
      break;
      case 11: 
      month = "December"; 
      break;
    }
    return month
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/challenge' render={() => (<Challenge getMonth={this.getMonth} products={this.state.products} getProfile={this.getProfile}/>)} />
          <Route path='/productprofile/:id' render={() => (<ProductProfile products={this.state.products} selected={this.state.selected}/>)} />
        </Switch>
      </Fragment>
    )
  }
}

export default App
