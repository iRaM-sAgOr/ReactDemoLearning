import React, { Component } from 'react'
import "./apiPage.css"
import PostApi from "./PostApi/postApi"
import axios from "axios"

class GetApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errors: [],
            id: "",
            useId: "",
            title: "",
            body: ""
        }
    }

    componentDidMount() {
        axios.get("https://my-json-server.typicode.com/iRaM-sAgOr/apitesting/posts")
            .then((response) => {
                // console.log(response)
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errors: "Error Retriving Data"
                })
            })
    }

    onClickButton = (post) => {
        this.setState({
            id: post.id,
            title: post.title,
            body: post.body
        })
        console.log("hi console", post.id, this.state.id, post.body, this.state.body, post.title, this.state.title)
    }

    handleOnchangeUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hangleOnsubmit = (e) => {
        axios.put("https://my-json-server.typicode.com/iRaM-sAgOr/apitesting/posts/" + this.state.id, this.state).then(
            response => alert(`Update successfully ${response.data.id}`)
        ).catch(
            error => alert(`There are some error ${this.id}`)
        )
    }

    hangleDelete = (e) => {
        axios.delete("https://my-json-server.typicode.com/iRaM-sAgOr/apitesting/posts/" + this.state.id, this.state).then(
            response => alert(`Delete successfully`)
        ).catch(
            error => alert(`There are some error ${this.id}`)
        )
    }

    render() {
        const { posts, errors } = this.state
        return (
            <React.Fragment>
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
                                        <label className="mr-4 mb-4">User Id:</label>
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
                                <button type="button" className="btn btn-primary" onClick={this.hangleOnsubmit}>Update changes</button>
                                <button type="button" className="btn btn-danger" onClick={this.hangleDelete}>Delete Data</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <PostApi />
                <br />
                {/* <UpdateApi /> */}
                <div className="container">
                    <h1>Post Of that URL</h1>
                    <table className="table table-hover table-bordered table-dark tableSize">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Details</th>
                                <th>Action Update</th>
                                {/* <th>Action Delete</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.length ?
                                    posts.map((post,index) =>
                                        <tr>
                                            <td>{post.id}</td>
                                            <td>{post.title}</td>
                                            <td>{post.body}</td>
                                            <td>
                                                <button type="button" onClick={this.onClickButton.bind(this, post)} className="btn " id="modalBTN" data-toggle="modal" data-target="#UpdateModalCenter">
                                                    Update And Delete
                                                </button>
                                            </td>
                                            {/* <td><button className="btn btn-primary" onClick={<UpdateApi handleData={post.body}/>}>Update</button></td> */}
                                            {/* <td><UpdateApi handleData={post.id}/></td> */}
                                            {/* <td><button className="btn btn-primary" onClick={this.onClickButton.bind(this,post)}>Button </button></td> */}
                                        </tr>
                                    ) :
                                    <tr>
                                        <td>No Data</td>
                                        <td>No Data</td>
                                        <td>No Data</td>
                                    </tr>
                            }
                            {
                                errors ? <div>{errors}</div> : null
                            }
                        </tbody>
                    </table>
                </div >
            </React.Fragment>
        )
    }
}

export default GetApi
