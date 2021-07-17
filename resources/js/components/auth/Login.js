import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import User from "../Helper/User"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors:[]
        };
    }
    //loginSubmit function
    loginSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/auth/login", this.state)
            .then(res => {
              User.responseAfterLogin(res);
            })
            .catch(e => {
               this.setState({errors:e.response.data.errors})
            })

    };

    render() {
        console.log(this.errors)
        return (
            <div
                className="container"
                id="container"
                style={{ marginTop: 151 }}
            >
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div
                            className="card bg-dark"
                            style={{
                                borderRadius: 0,
                                width: 405,
                                boxShadow:
                                    "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
                                zIndex: 9999
                            }}
                            id="card"
                        >
                            <h3
                                style={{
                                    textAlign: "center",
                                    marginTop: 20,
                                    color: "white"
                                }}
                            >
                                {" "}
                                Please Login{" "}
                            </h3>
                        <form method="post" onSubmit={this.loginSubmit.bind(this)}>
                            <div style={{ margin: 20 }}>
                                <label htmlFor="email" className="text-light">
                                    Your Email :{" "}
                                </label>
                                <input
                                    type="gmail"
                                    className="form-control"
                                    placeholder="Inter Your Email"
                                    id="email"
                                    name="email"
                                    style={{ borderRadius: 0 }}
                                    onChange={e =>
                                        this.setState({ email: e.target.value })
                                    }
                                    value={this.state.email}
                                />
                                <small className="text-danger">{this.state.errors.length === 0 ? '' : this.state.errors.email[0]}</small>
                            </div>
                            <div style={{ margin: 20 }}>
                                <label
                                    htmlFor="password"
                                    className="text-light"
                                >
                                    Your Password :{" "}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Inter Your Password"
                                    id="password"
                                    name="password"
                                    style={{ borderRadius: 0 }}
                                    onChange={e =>
                                        this.setState({
                                            password: e.target.value
                                        })
                                    }
                                    value={this.state.password}
                                />
                                <small className="text-danger">{this.state.errors.length ===0 ? '' : this.state.errors.password[0] }</small>
                            </div>
                            <div style={{ margin: 20 }}>
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ borderRadius: 0 }}
                                    value="Login"
                                ></input>

                            </div>
                            </form>
                            <div
                                className="row"
                                style={{
                                    marginLeft: 9,
                                    marginRight: 20,
                                    marginBottom: 20
                                }}
                            >
                                <div className="col-md-6">
                                    <div>
                                        <a rel="noopener noreferrer">
                                            <Link to="/register">
                                                Create Account..
                                            </Link>{" "}
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <a rel="noopener noreferrer">
                                            <Link to="/forgot">
                                                Forgot Password..
                                            </Link>{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
