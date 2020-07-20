import UpdatedComponent from "./higherOrderComponent"
import React, { Component } from 'react'

class hoverCounter extends Component {
    render() {
        const { count, incrementClick } = this.props
        return (
            <div>
                <button className="btn btn-primary" onMouseOver={incrementClick}>
                    {this.props.name} Hovered {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(hoverCounter, 10)
