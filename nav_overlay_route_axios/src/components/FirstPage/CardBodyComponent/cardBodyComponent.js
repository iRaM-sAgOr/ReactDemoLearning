import React from 'react'
import SingleCard from "../singleCardComponent/singleCardComponent"
import "./cardBodyComponent.css"
import photo1 from "../assets/image/pic01.jpg"
import photo2 from "../assets/image/pic02.jpg"
import photo3 from "../assets/image/pic03.jpg"

function bodyCard() {
    return (
        <div className="container-fluid wrapper" >
            <div className="text-justify text-center lead" id="textStyle">
                <h1 >SEM TURPIS AMET SEMPER</h1>
                <p>
                    "In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet.
                    Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor."
                </p>
            </div>
            <div >
                <div className="row mb-4">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-3">
                        <SingleCard imagePath={photo1} />
                    </div>
                    <div className="col-sm-3">
                        <SingleCard imagePath={photo2} />
                    </div>
                    <div className="col-sm-3">
                        <SingleCard imagePath={photo3} />
                    </div>
                    <div className="col-sm-1 "></div>
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-3 ">
                        <SingleCard imagePath={photo1} />
                    </div>
                    <div className="col-sm-3">
                        <SingleCard imagePath={photo2} />
                    </div>
                    <div className="col-sm-3">
                        <SingleCard imagePath={photo3} />
                    </div>
                    <div className="col-sm-1 "></div>
                </div>
            </div>
        </div>
    )
}

export default bodyCard
