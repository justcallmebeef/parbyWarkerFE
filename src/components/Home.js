import React, { Fragment } from "react"
import { Link } from 'react-router-dom'
import backboneLogo from '../backboneLogo.png'

const Home = () => {
    return (
        <Fragment>
            <div className="homeContainer">
                <div className="logoContainer">
                    <img src={backboneLogo}></img>
                    <h1>backbone</h1>
                    <h2>coding challenge</h2>
                </div>
                <div className="buttonContainer">
                    <Link to="/challenge"><button>Your future Dev awaits...</button></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Home 