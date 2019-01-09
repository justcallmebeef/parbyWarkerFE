import React, { Fragment } from 'react' 
import ProductTable from './ProductTable'

const Challenge = (props) => {
    return (
        <Fragment>
            <ProductTable products={props.products}/>
        </Fragment>
    )
}

export default Challenge 