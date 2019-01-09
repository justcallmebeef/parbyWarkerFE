import React, { Fragment } from 'react' 
import ProductTable from './ProductTable'

const Challenge = (props) => {
    return (
        <Fragment>
            <ProductTable getMonth={props.getMonth} products={props.products}/>
        </Fragment>
    )
}

export default Challenge 