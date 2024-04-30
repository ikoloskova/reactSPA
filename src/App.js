import React, {Component} from "react";
import {
    Route, 
    Navlink, 
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


class App extends Component {
    
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>SPA application</h1>
                    <ul className="header">
                        <li><Navlink to="/">Main</Navlink></li>
                        <li><Navlink to="/stuff">PRODUCTS</Navlink></li>
                        <li><Navlink to="/contact">Contact</Navlink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
