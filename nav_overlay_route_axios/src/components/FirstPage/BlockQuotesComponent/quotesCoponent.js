import React from 'react'

function blockquote() {
    const imageSize = {
        width: "30%",
        maxHight: "auto",
        align: 'left'
    }

    return (
        <div className="container " >
            <div class="mx-auto mb-10 text-center">
                <h1>FAUCIBUS CONSEQUAT LOREM</h1>
                <p><i>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. </i></p>
                <p><i>Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor</i></p>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card" styleName={"width: 18rem;"}>
                        <div className="card-body">
                            <blockquote class="blockquote text-center">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" alt="100*100"
                                    className="rounded-circle z-depth-2 mb-4 " style={imageSize} />
                                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card" styleName={"width: 18rem;"}>
                        <div className="card-body">
                            <blockquote class="blockquote text-center">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" alt="100*100"
                                    className="rounded-circle z-depth-2 mb-4 " style={imageSize} />
                                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card" styleName={"width: 18rem;"}>
                        <div className="card-body">
                            <blockquote class="blockquote text-center">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" alt="100*100"
                                    className="rounded-circle z-depth-2 mb-4 " style={imageSize} />
                                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default blockquote
