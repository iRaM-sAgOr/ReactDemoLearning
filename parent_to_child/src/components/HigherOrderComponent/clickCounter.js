import React, { Component } from 'react'
import UpdatedComponent from "./higherOrderComponent"

class clickCounter extends Component {
    render() {
        const { count, incrementClick } = this.props
        return (
            <div>
                <button className="btn btn-primary"
                    onClick={incrementClick}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(clickCounter, 5)
