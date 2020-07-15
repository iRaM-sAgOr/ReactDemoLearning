import React, { Component } from 'react'
import "./formComponent.css"
class FormComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            remember: false,
            radio: "",
            dropdown: "",
            comment: "",
            checkbox: "",
            checkbox1: false,
            checkbox2: false,
        }
    }

    hadleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    hadlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    hadleRememberChange = (event) => {
        this.setState({
            remember: !this.state.remember
        })
    }

    hadleRadioChange = (event) => {
        this.setState({
            radio: event.target.value
        })
    }

    hadleDropdownChange = (event) => {
        this.setState({
            dropdown: event.target.value
        })
    }

    hadleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    hadleCheckboxChange = (event) => {
        if (event.target.value === "front") {
            this.setState({
                checkbox1: !this.state.checkbox1
            })
        }
        if (event.target.value === "back") {
            this.setState({
                checkbox2: !this.state.checkbox2
            })
        }

    }

    handlerSubmit = event => {
        alert(`Email = ${this.state.email} and Password = ${this.state.password} and Remember= ${this.state.remember} 
        and Language = ${this.state.radio} and Working place =  ${this.state.dropdown} and 
        Comment = ${this.state.comment} and BackEnd = ${this.state.checkbox1} and FrontEnd = ${this.state.checkbox2} `)
        event.preventDefault()
        // This line prevent to lost the value in the boxes
    }

    render() {
        return (
            <div className="container form-class mb-4">
                <h2 className="inputStyle">INLINE FORM</h2>
                <form onSubmit={this.handlerSubmit}>
                    {/* UserName and PassWord Block Start */}
                    <div className="form-inline">
                        <label for="email2" className="inputTest mb-2 mr-sm-2">Email:</label>
                        <input onChange={this.hadleEmailChange} value={this.state.email} type="text" className="inputStyle form-control mb-2 mr-sm-2 form-control-lg" id="email2" placeholder="Enter email" name="email" />
                        <label for="pwd2" className="inputTest mb-2 mr-sm-2">Password:</label>
                        <input onChange={this.hadlePasswordChange} value={this.state.password} type="text" className="inputStyle form-control form-control-lg mb-2 mr-sm-2" id="pwd2" placeholder="Enter password" name="pswd" />
                        <div className="form-check mb-4 ">
                            <label className="inputTest form-check-label mr-sm-2">
                                <input checked={this.state.remember} onChange={this.hadleRememberChange} value={this.state.remember} type="checkbox" className="checkBox form-check-input mr-sm-2" name="remember" /> Remember me
                        </label>
                        </div>
                    </div>
                    {/* UserName and PassWord Block Finish */}
                    {/* Radio Button Block Start */}
                    <div className="radioStyle" onChange={this.hadleRadioChange}>
                        <label className="radio-inline">
                            <input name="optradio" type="radio" value="Java" />Java
                        </label>
                        <label class="radio-inline">
                            <input name="optradio" type="radio" value="Python" />Python
                        </label>
                        <label class="radio-inline">
                            <input name="optradio" type="radio" value="C#" />C#
                        </label>
                    </div>
                    {/* Radio Button Block Finish */}
                    {/* Dropdown Block start */}
                    <div className="dropdownStle" onChange={this.hadleDropdownChange}>
                        <select name="cars" className="custom-select-lg">
                            <option value="skill unselected" selected>Working place preference</option>
                            <option value="home">Working From Home</option>
                            <option value="office">Working From Office</option>
                            <option value="nowork">Don't want to work</option>
                        </select>
                    </div>
                    {/* Dropdown Block Finish */}
                    <br />
                    {/* Comment Block Start */}
                    <div className="form-group dropdownStle" onChange={this.hadleCommentChange}>
                        <label className="inputStyle" for="comment">Comment:</label>
                        <textarea value={this.state.comment} className="form-control" rows="5" id="comment"></textarea>
                    </div>
                    {/* Comment Block Finish */}
                    {/* Checkbox Block Start */}
                    <br />
                    <div className="radioStyle" onChange={this.hadleCheckboxChange}>
                        <label className="checkbox-inline"><input checked={this.state.checkbox1} type="checkbox" value="front" />Front End</label>
                        <label className="checkbox-inline"><input checked={this.state.checkbox2} type="checkbox" value="back" />Back End</label>
                    </div>
                    <br />
                    {/* Checkbox Block Finish */}
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div >
        )
    }
}

export default FormComponents
