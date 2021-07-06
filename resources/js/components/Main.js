import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import Header from "./partials/Header";
import Sidebar from "./partials/Sidebar";
import Routes from "./Routes"
import Footer from "./partials/Footer";

class Main extends Component {
    render() {
        return (
            <Router>
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" class="d-flex flex-column">
                        <div id="content">
                            <Header />
                            {/* react router content here  */}
                               <Routes />
                            {/* end react router content  */}
                        </div>
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}
export default Main;

if (document.getElementById("Main")) {
    ReactDOM.render(<Main />, document.getElementById("Main"));
}
