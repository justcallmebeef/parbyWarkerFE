import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const UpdateProduct = (props) => {
    var [products] = props.products.filter(product => {
        return (product.id == props.selected)
    })
    return (
        <Fragment>
            <div className="challengeContainer">
                <h1>{products.name}</h1>
                <form>
                    <label>Product Name</label>
                    <input type="text" name="name" onChange={props.handleInput} defaultValue={products.name} required></input>
                    <label>Price</label>
                    <input type="text" name="price" onChange={props.handleInput} defaultValue={products.price} required></input>
                    <label>Code</label>
                    <input type="text" name="code" onChange={props.handleInput} defaultValue={products.code} required></input>
                    <label>Created By</label>
                    <input type="text" name="creator" onChange={props.handleInput} defaultValue={products.creator} required></input>
                    <Link to= "/challenge">
                        <button type="submit" onClick={props.updateProductMethod}>
                        Update Product
                    </button>
                    </Link>
                </form>
            </div>
        </Fragment>
    )
}

export default UpdateProduct