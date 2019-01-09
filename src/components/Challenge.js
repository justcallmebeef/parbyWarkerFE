import React, { Fragment } from 'react' 
import ProductTable from './ProductTable'

const Challenge = (props) => {
    return (
        <Fragment>
            <div className="challengeContainer">
            <h1>The Challenge</h1>
            <ProductTable formPopulation={props.formPopulation} deleteProduct={props.deleteProduct} getProfile={props.getProfile} getMonth={props.getMonth} products={props.products}/>
            </div>
        </Fragment>
    )
}

export default Challenge 