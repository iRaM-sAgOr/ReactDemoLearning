import React from 'react'

function footerjumbox() {
    const bodyStyle = {
        backgroundColor: "black",
        fontSize: "large"
    }

    const hrStyle = {
        marginTop: "1rem",
        marginBottom: "1rem",
        border: "0"
    }

    const pageStyle = {
        paddingTop: '0px'
    }

    return (
        <div style={pageStyle}>
            <footer class="page-footer text-white" style={bodyStyle}>
                <div>
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center"></div>
                    </div>
                </div>
                <div className="container-fluid text-center text-md-left mt-5">
                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                            <h2 className="text-uppercase font-weight-bold">ACCUMSAN MONTES VIVERRA</h2>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet.
                            Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum.
                         Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
                        </div>
                        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4" >
                            <h6 className="text-uppercase font-weight-bold">SEM TURPIS AMET SEMPER</h6>
                            <p><a href="#!">Dolor pulvinar sed etiam.</a></p>
                            <p><a href="#!">Etiam vel lorem sed amet.</a></p>
                            <p><a href="#!">Felis enim feugiat viverra.</a></p>
                            <p><a href="#!">Dolor pulvinar magna etiam.</a></p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase font-weight-bold">MAGNA SED IPSUM</h6>
                            <p><i className="fa fa-facebook-square white-text mr-4"></i> Facebook</p>
                            <p><i className="fa fa-twitter white-text mr-4"></i> Twitter</p>
                            <p><i className="fa fa-google-plus-official white-text mr-4"></i>Google Plus</p>
                            <p><i className="fa fa-linkedin-square white-text mr-4"></i>Linkdin</p>
                            <p><i className="fa fa-instagram white-text mr-4"></i>Instagram</p>
                        </div>
                    </div>
                </div>
                <hr className="accent-2 mb-8 mt-4 d-inline-block mx-auto" style={hrStyle} />
                <div className="footer-copyright text-center py-3 mb-4 border-top-2">© Untitled. Photos Unsplash, Video Coverr.
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
                <hr className="accent-2 mb-8 mt-4 d-inline-block mx-auto" style={hrStyle} />
            </footer>
        </div>
    )
}

export default footerjumbox
