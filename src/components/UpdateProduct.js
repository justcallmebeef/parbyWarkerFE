import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const UpdateProduct = (props) => {
    var [products] = props.products.filter(product => {
        return (product.id == props.selected)
    })
    return (
        <Fragment>
            <div className="backgroundImage">
                <div className="challengeContainer">
                    <h1>{products.name}</h1>
                    <form>
                        <label>Product Name</label>
                        <input type="text" name="name" onChange={props.handleInput} defaultValue={products.name} required></input>
                        <label>Price</label>
                        <input type="number" name="price" onChange={props.handleInput} defaultValue={products.price} required></input>
                        <label>Code</label>
                        <input type="text" name="code" onChange={props.handleInput} defaultValue={products.code} required></input>
                        <label>Created By</label>
                        <input type="text" name="creator" onChange={props.handleInput} defaultValue={products.creator} required></input>
                        <Link to= "/challenge">
                            <button type="submit" onClick={props.updateProductMethod}>
                                UPDATE PRODUCT
                            </button>
                        </Link>
                        <Link to= "/challenge">
                            <button>
                                CANCEL
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateProduct