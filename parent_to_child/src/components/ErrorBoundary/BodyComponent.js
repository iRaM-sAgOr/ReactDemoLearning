import React, { Component } from 'react'

class BodyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggleVariable: true
        }
    }

    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({
    //             toggleVariable: !this.state.toggleVariable
    //         })
    //     }, 2000);

    // }
    onclickhandler = () => {
        this.setState({
            toggleVariable: !this.state.toggleVariable
        })
    }
    render() {
        if (this.state.toggleVariable) {
            return (
                <div>

                    <h1>We will describe some theory about error boundory here</h1>
                    <ul>
                        <span style={{ "fontSize": "20px" }}>Error Handling Phase Methods</span>
                        <li style={{ "fontSize": "20px" }}>1. static getDerivedStateFromError(error)</li>
                        <li style={{ "fontSize": "20px" }}>2. componentDidCatch(error,info</li>
                        <p style={{ "fontSize": "20px" }}>A class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes
                        an error boundary.</p>
                        <p style={{ "fontSize": "20px" }}>The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown
                        and the componentDidCatch method is used to log the error information
                        </p>
                        <p>It offer the service in constructor,rendering ,life cycle. but not in event handler like onclick handled. Then we sould use try catch</p>
                    </ul>
                    <button className="btn btn-danger" onClick={this.onclickhandler}>Check the Error Boundary</button>
                </div>
            )
        }
        else {
            // console.log(`Console print ${this.state.toggleVariable}`)
            throw new Error("There are some problems")
            // return (
            //     <h1>Error</h1>
            // )
        }

    }
}

export default BodyComponent
