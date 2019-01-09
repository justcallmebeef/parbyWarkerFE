import React, { Fragment } from 'react'

const ProductProfile = (props) => {
    var [products] = props.products.filter(product => {
        return product.id == props.selected
    })
    return (
        <Fragment>
            <h1>{products.name}</h1>
        </Fragment>
    )
}

export default ProductProfile