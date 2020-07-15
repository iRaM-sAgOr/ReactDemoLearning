import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstPage from "../FirstPage/firstpage"
import SecondPage from "../SecondPage/secondPage"
import ApiPage from "../APIPage/apiPage"
import { createBrowserHistory as history } from 'history';


function routeComponent() {
    return (
        <React.Fragment>
          <Router history={history}></Router> 
          <switch>
              <Route path="/" exact component={FirstPage} />
              <Route path="/second" exact component={SecondPage} />
              <Route path="/api" component={ApiPage}/>
          </switch>
        </React.Fragment>
    )
}

export default routeComponent
