import React, { Component } from 'react'

class childComponent extends Component {
    render() {
        return (
            <div>
                <h1>This is child Component</h1>
                <p>Data received from parent is {this.props.propData1} and {this.props.propData2}</p>
                <button className="btn btn-primary" onClick={()=>{this.props.propMethod("sagor")}}>
                    ChildButton
                </button>
            </div>
        )
    }
}

export default childComponent
