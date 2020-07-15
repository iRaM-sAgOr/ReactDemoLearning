import React, { Component } from 'react'
import "./modalComponent"

class modalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.propID,
            // useId: "",
            title: "0",
            body: "0"
        }
    }
    handleOnchangeUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    isToast = () => {
        alert(`This is updated list ${this.state.id} ${this.state.title} ${this.state.body} `)
    }
    onClickButton = (post) => {
        this.setState({
            id: this.props.propID,
            title: this.props.propTitle,
            body: this.props.propBody
        })
        console.log("hi console", post.id, this.state.id, post.body, this.state.body, post.title, this.state.title)
    }
    render() {
        return (
            <div style={{ "color": "black" }}>
                

                <button onClick={this.onClickButton} style={{ "textAlign": "right" }} type="button" className="btn btn-primary" id="modalBTN" data-toggle="modal" data-target="#UpdateModalCenter">
                    Update And Delete
                </button>
                <h1>{this.props.propID}</h1>
                <h1>{this.state.id}</h1>
                <br />
                <br />
                {/* // <!--Modal --> */}
                <div className="modal fade FormStyle" id="UpdateModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Update the Information</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body ">
                                <div className="form-group">
                                    <form  >
                                        <h1>{this.state.id}</h1>
                                        <h1>{this.props.propTitle}</h1>
                                        <h1>{this.props.propID}</h1>
                                        {alert(`this is modal ${this.state.id} ${this.state.title}  ${this.state.id}`)}
                                        <label className="mr-4 mb-4">Id:</label>
                                        <input type="text" name="id" value={this.state.id} onChange={this.handleOnchangeUpdate}></input><br />
                                        <label className="mr-4 mb-4">Title</label>&#160;&#160;&#160;&#160;&#160;
                                        <input type="text" name="title" value={this.state.title} onChange={this.handleOnchangeUpdate}></input><br />
                                        <label className="mr-4 mb-4">Body</label>&#160;&#160;
                                        <input type="text" name="body" value={this.state.body} onChange={this.handleOnchangeUpdate}></input><br />
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Discard</button>
                                <button type="button" className="btn btn-primary" onClick={this.isToast}>Update changes</button>
                                {/* <button type="button" className="btn btn-danger" onClick={this.hangleDelete}>Delete Data</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

export default modalComponent
