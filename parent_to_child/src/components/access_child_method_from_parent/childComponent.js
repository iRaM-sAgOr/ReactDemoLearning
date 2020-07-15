import React, { Component } from 'react'

export class childComponent extends Component {
    childMethod = (Data) => {
        alert(`This alert is from child function. clicked form ${Data}`)
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={()=>{this.childMethod("ChildComponent")}}>
                    Child Button
                </button>
            </div>
        )
    }
}

export default childComponent
