import React, { Component } from "react";
import { Route,Switch} from "react-router-dom";
import Category from "./content/Category";
import ContainerFluid from "./content/ContainerFluid";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword"
class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/category">
                    <Category />
                </Route>
                <Route path="/dashboard">
                    <ContainerFluid />
                </Route>
                <Route path="/forgot">
                    <ForgotPassword />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        );
    }
}
export default Routes;
