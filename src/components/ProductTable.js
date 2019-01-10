import React, { Fragment } from "react"
import { Link } from 'react-router-dom'

const ProductTable = (props) => {
    var productList = props.products.map(product => {
        var date = new Date(product.last_modified).getDate()
        var month = props.getMonth(new Date(product.last_modified).getMonth())
        var year = new Date(product.last_modified).getFullYear()
        var fixedPrice = product.price

        return (
            <Fragment>
                    <tr onClick={() => props.getProfile(product.id) } className="productTable">
                        <td><img className="productImage" src={product.image} /></td>
                        <td id="productListing">Parby Warker {product.name}</td>
                        <td id="priceListing">${fixedPrice.toFixed(2)}</td>
                        <td id="codeListing">{product.code}</td>
                        <td id="creatorListing">{product.creator}</td>
                        <td id="dateListing">{month} {date}, {year}</td>
                        <td><Link to={`/updateproduct/${product.id}`} style={{ textDecoration: 'none', color: '#333333' }}><button id={product.id} onClick={props.formPopulation}>UPDATE</button></Link></td>
                        <td><button id={product.id} onClick={props.deleteProduct}>DELETE</button></td>
                    </tr>
            </Fragment>
        )
    })
        return (
            <Fragment>
                <table>
                    <tr>
                        <th>PRODUCT</th>
                        <th></th>
                        <th>PRICE</th>
                        <th>CODE</th>
                        <th>CREATED BY</th>
                        <th>LAST MODIFIED</th>
                    </tr>
                { productList }
                </table>
            </Fragment>
        )
}

export default ProductTable 