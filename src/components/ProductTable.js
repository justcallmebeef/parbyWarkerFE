import React, { Fragment } from "react"

const ProductTable = (props) => {
    var productList = props.products.map(product => {
        return (
            <Fragment>
                <div>
                    <div>
                        <ul>
                            <li>Parby Warker {product.name}</li>
                            <li>{product.price}</li>
                            <li>{product.code}</li>
                            <li>{product.creator}</li>
                            <li>{product.last_modified}</li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    })

        return (
            <Fragment>
                { productList }
            </Fragment>
        )
}

export default ProductTable 