import React from 'react'
import Overlay from "../overlay/overlay"
import "./navbar.css"

function navbar() {
    const fontStyle = {
        fontSize: '26px'
    }
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top text-white bg-dark" >
                <div className="container-fluid">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item">
                            <a className="navbar-brand fontStyle" href="www.google.com"><b>BJIT Limited</b></a>
                        </li>
                    </ul>
                    {/* <ul className="nav navbar-nav">
                        <h1>Menu</h1>
                    </ul> */}
                    <ul className="nav navbar-nav">
                        <Overlay/>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default navbar
