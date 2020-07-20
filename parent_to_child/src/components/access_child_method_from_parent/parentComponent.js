import React, { Component } from 'react'
import ChildComponent from "./childComponent"

class parentComponent extends Component {
    constructor(props) {
        super(props)
        this.childRef = React.createRef()
        // stepOne: create a ref
    }
    
    parentMethod=()=>{
        this.childRef.current.childMethod("ParentComponent Bagum")
        // stepThree:Execue the ref
    }
    render() {
        return (
            <div>
                <h1>This if from Parent component two</h1>
                
                <button className="btn btn-danger" onClick={this.parentMethod}>
                    ParentButton
                </button>
                <ChildComponent ref={this.childRef}/>
                {/* stepTwo:assign the ref */}
            </div>
        )
    }
}

export default parentComponent
