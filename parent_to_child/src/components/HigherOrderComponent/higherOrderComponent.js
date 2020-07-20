import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent, incrementAmount) => {

    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState(
                prevState => {
                    return { count: prevState.count + incrementAmount }
                }
            )
        }
        render() {
            return (
                <OriginalComponent count={this.state.count}
                    incrementClick={this.incrementCount}
                    {... this.props} />
            )
        }
    }
    return NewComponent
}
export default UpdatedComponent
