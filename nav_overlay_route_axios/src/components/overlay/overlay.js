import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./overlay.css"

export class overlay extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            weigth: "0px",
            fakeDivWeigth: "0px"
        })
    }

    isExpand = () => {
        this.setState({
            weigth: "350px",
            fakeDivWeigth: "100%"
        })
    }

    isClose = () => {
        this.setState({
            weigth: "0px",
            fakeDivWeigth: "0px"

        })
    }
    render() {
        const styleButton = {
            fontSize: '30px',
            cursor: 'pointer',
            color: 'white',
            float: "right"
        }

        const styleBar = {
            width: this.state.weigth,
            float: "right"
        }
        const fakeDivStyle = {
            width: this.state.fakeDivWeigth,
            // float: "right"

        }
        return (
            <div>
                <body>
                    <div className="FakeDiv" style={fakeDivStyle} onClick={this.isClose}></div>
                    <div className="sidenav right" style={styleBar}>
                        <a href="javascript:void(0)" className="closebtn" onClick={this.isClose} >&times;</a>
                        {/* <a href="www.google.com">Home</a> */}
                        <Link to="/">First Page</Link>
                        <hr></hr>
                        {/* <a href="www.google.com">Element</a> */}
                        <Link to="/second">Second Page</Link>
                        <hr></hr>
                        <Link to="/api">Api Page</Link>
                    </div>
                    <span style={styleButton} onClick={this.isExpand}>&#9776; Menu</span>
                </body>
            </div>
        )
    }
}

export default overlay
