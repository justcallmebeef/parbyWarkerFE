import React, { Fragment } from 'react' 
import ProductTable from './ProductTable'

const Challenge = (props) => {
    return (
        <Fragment>
            <div className="challengeContainer">
            <h1>The Challenge</h1>
            <p>Click below to see more details.</p>
            <ProductTable getProfile={props.getProfile} getMonth={props.getMonth} products={props.products}/>
            </div>
        </Fragment>
    )
}

export default Challenge 