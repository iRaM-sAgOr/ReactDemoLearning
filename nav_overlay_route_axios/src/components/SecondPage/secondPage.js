import React from 'react'
import "./secondPage.css"
import FormComponent from "./FormComponent/formComponent"

function secondPage() {
    return (
        <div >
            <div className="container-fluid CoverStyleBanner" >
                <h1 className="text-center textStyle">GENERIC PAGE</h1>
            </div>
            <div className="font-weight-bolder bodyBackground" >
                <div className="jumbotron jumbotronGnericStyle" >
                   <FormComponent/>
                </div>
            </div>
        </div>
    )
}

export default secondPage
