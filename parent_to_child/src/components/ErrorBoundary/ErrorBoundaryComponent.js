import React, { Component } from 'react'

class ErrorBoundaryComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    // This is for toggling the screen with error and non error.
    // By commenting this function we can stop the toggling and manually can do the toggle by a button. Button is made in the bodycomponent
    componentDidMount() {
        setInterval(() => {
            this.setState({
                hasError: !this.state.hasError
            })
        }, 2000)
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
    
    render() {
        if (this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundaryComponent
