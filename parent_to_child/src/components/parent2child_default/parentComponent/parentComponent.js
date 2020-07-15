import React, { Component } from 'react'
import ChildComponent from "../childComponent/childComponent"

class parentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentData :"Rowshan"
        }
    }
    parentMethod = (data) =>{
        alert(`This is from parent function. Data passed from child is ${data}. 
        Thus we can access parent function from child component`)
    }
    
    render() {
        return (
            <div>
                <h1>This is Parent Component</h1>
                <ChildComponent propData1="Mahbub" propData2={this.state.parentData} propMethod={this.parentMethod}/>
            </div>
        )
    }
}

export default parentComponent
