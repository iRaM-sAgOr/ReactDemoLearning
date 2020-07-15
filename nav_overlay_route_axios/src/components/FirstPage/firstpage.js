import React from 'react'
import "./firstpage.css"
import VideoAdd from "./VideoComponent/videoComponent"
import CardBodyComponent from "./CardBodyComponent/cardBodyComponent"
import BlockQuoteComponent from "./BlockQuotesComponent/quotesCoponent"

function firstpage() {
    return (
        <div >
            {/* <div className="container-fluid CoverStyleBanner" >
                <h1 className="text-center textStyle">Home Page</h1>
            </div> */}
            <VideoAdd />
            <div className="font-weight-bolder bodyBackground" >
                <div className="jumbotron jumbotronGnericStyle" >
                    <h1 className="text-danger">FEUGIAT CONSEQUAT</h1>
                    <p>
                        Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget.
                        tempus euismod. Magna et cursus lorem faucibus vestibulum.
                        Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                        Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod tempus.
                        Vestibulum ante ipsum primis in faucibus vestibulum.
                        Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                        Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod.
                        Vestibulum ante ipsum primis in faucibus vestibulum.
                        Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                        Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor sit amet dolor feugiat consequat
                </p>
                    <p>
                        Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget.
                        tempus euismod. Magna et cursus lorem faucibus vestibulum.
                        Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                        Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod tempus.
                        Vestibulum ante ipsum primis in faucibus vestibulum.
                        Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                        Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod.
                        Vestibulum ante ipsum primis in faucibus vestibulum.
                        Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                        Integer ac sed amet praesent.
                        Nunc lacinia ante nunc ac gravida lorem ipsum dolor sit amet dolor feugiat consequat.
                </p>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <h1 className="text-danger">MAGNA ODIO TEMPUS COMMODO</h1>
                    <p>
                        In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet.
                        Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.
                        Ante commodo blandit adipiscing integer semper orci eget.
                        Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan ac praesent.
                    </p>
                    <br />
                    <p>
                        Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                        Integer ac pellentesque praesent tincidunt felis sagittis eget.
                        tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum.
                        Blandit adipiscing eu ipsum primis in faucibus vestibulum.
                        Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum dolor sit amet nullam.
                    </p>
                    <br />
                    <CardBodyComponent />
                    <br />
                    <hr />
                    <br />
                    <BlockQuoteComponent />
                </div>
            </div>

        </div>
    )
}

export default firstpage
