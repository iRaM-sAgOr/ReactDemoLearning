import React, { Component } from 'react'
import "./postApi.css"
import axios from "axios"

class PostApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleOnchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hangleOnsubmit = (e) => {
        e.preventDefault()
        axios.post("https://my-json-server.typicode.com/iRaM-sAgOr/apitesting/posts", this.state)
            .then(response => {
                alert(`New Item has been saved wherer ID: ${response.data.id}, Title: ${response.data.title}`)
            })
            .catch(error => alert(`New Item has been saved ${error}`))
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <button type="button" className="btn " id="modalBTN" data-toggle="modal" data-target="#exampleModalCenter">
                    Add New Item
                </button>
                {/* // <!--Modal --> */}
                <div className="modal fade FormStyle" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body ">
                                <div className="form-group">
                                    <form  >
                                        <label className="mr-4 mb-4">User Id</label>
                                        <input type="text" name="userId" value={userId} onChange={this.handleOnchange}></input><br />
                                        <label className="mr-4 mb-4">Title</label>&#160;&#160;&#160;&#160;&#160;
                                        <input type="text" name="title" value={title} onChange={this.handleOnchange}></input><br />
                                        <label className="mr-4 mb-4">Body</label>&#160;&#160;
                                        <input type="text" name="body" value={body} onChange={this.handleOnchange}></input><br />
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.hangleOnsubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostApi
