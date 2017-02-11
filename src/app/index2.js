import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import {Home2} from "./components/Home2";
import {Home} from "./components/Home"
import {Root} from "./components/Root";
import {Header} from "./components/Header";
import {Project} from "./components/Project";

class App extends React.Component{
    render(){
        return(
            <Router history = {browserHistory}>
                <Route path = "/" component = {Root}>
                    <IndexRoute component = {Home2}/>
                    <Route path = "project/:id" component = {Project}/>
                    <Route path = "home" component = {Home2}/>
                </Route>
            </Router>
        );
    }
}

render(<App />,document.getElementById("app"));