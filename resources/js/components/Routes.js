import React, { Component } from "react";
import { Route,Switch} from "react-router-dom";
import Category from "./content/Category";
import ContainerFluid from "./content/ContainerFluid";
class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/category">
                    <Category />
                </Route>
                <Route path="/">
                    <ContainerFluid />
                </Route>
            </Switch>
        );
    }
}
export default Routes;
