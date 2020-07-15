import React, { Component } from 'react'
import ChildComponent from "./childComponent"

class parentComponent extends Component {
    parentMethod=()=>{
        this.refs.childRef.childMethod("ParentComponent")
    }
    render() {
        return (
            <div>
                <h1>This if from Parent component two</h1>
                
                <button className="btn btn-danger" onClick={this.parentMethod}>
                    ParentButton
                </button>
                <ChildComponent ref="childRef"/>
            </div>
        )
    }
}

export default parentComponent
