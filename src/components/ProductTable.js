import React, { Fragment } from "react"

const ProductTable = (props) => {
    var productList = props.products.map(product => {
        var date = new Date(product.last_modified).getDate()
        var month = props.getMonth(new Date(product.last_modified).getMonth())
        var year = new Date(product.last_modified).getFullYear()
        return (
            <Fragment>
                <div>
                    <div>
                        <ul>
                            <li>Parby Warker {product.name}</li>
                            <li>${product.price.toFixed(2)}</li>
                            <li>{product.code}</li>
                            <li>{product.creator}</li>
                            <li>{month} {date}, {year}</li>
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