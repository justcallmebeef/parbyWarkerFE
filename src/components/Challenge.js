import React, { Fragment } from 'react' 
import ProductTable from './ProductTable'

const Challenge = (props) => {
    return (
        <Fragment>
            <ProductTable getProfile={props.getProfile} getMonth={props.getMonth} products={props.products}/>
        </Fragment>
    )
}

export default Challenge 