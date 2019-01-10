import React, { Component, Fragment } from 'react'
import './App.css'
import Home from './components/Home'
import Challenge from './components/Challenge'
import { Route, Link, Switch } from 'react-router-dom'
import UpdateProduct from './components/UpdateProduct';

const productAPI = "https://young-badlands-50402.herokuapp.com/"

class App extends Component {
  constructor() {
    super() 
    this.state = {
      products: [], 
      selected: "", 
      name: "", 
      price: 0, 
      code: "", 
      creator: "" 
    }
  }

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = () => {
    fetch(productAPI)
    .then(response => response.json())
    .then(response => this.setState({ products: response.glasses}))
  }

  deleteProduct = (event) => {
    fetch(`${productAPI}${event.target.id}`, {
      method: "DELETE", 
    })
    .then(() => this.loadProducts())
  }

  getProfile = (id) => {
    this.setState({
      selected: id 
    })
  }

  handleInput = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  formPopulation = (event) => {
    fetch(`${productAPI}${event.target.id}`)
    .then(response => response.json())
    .then(response => {
      this.setState({
        image: response[0].image, 
        name: response[0].name, 
        price: response[0].price, 
        code: response[0].code, 
        creator: response[0].creator 
      })
    })
  }

  updateProductMethod = () => {
    let update = {
      image: this.state.image, 
      name: this.state.name, 
      price: Number(this.state.price), 
      code: this.state.code, 
      creator: this.state.creator, 
      last_modified: new Date()
    }
    fetch(`${productAPI}${this.state.selected}`, {
      method: "PUT", 
      body: JSON.stringify(update), 
      headers: {
        "Content-Type": "application/json", 
      }
    })
    .then(updateProductMethod => updateProductMethod.json())
    .then(() => this.loadProducts())
    // .then(alert("You updated the product! Continue updating or return to Products List"))
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
          <Route path='/challenge' render={() => (<Challenge formPopulation={this.formPopulation} deleteProduct={this.deleteProduct} getMonth={this.getMonth} products={this.state.products} getProfile={this.getProfile}/>)} />
          <Route path='/updateproduct/:id' render={() => (<UpdateProduct handleInput={this.handleInput} updateProductMethod={this.updateProductMethod} products={this.state.products} selected={this.state.selected} />)} />
        </Switch>
      </Fragment>
    )
  }
}

export default App
