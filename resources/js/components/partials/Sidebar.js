import React, { Component } from "react";
import { Link } from "react-router-dom";

class LeftSidebar extends Component {
    render() {
        return (
            <>
                <ul
                    className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                    id="accordionSidebar"
                >
                    {/* <!-- Sidebar - Brand --> */}
                    <a
                        className="sidebar-brand d-flex align-items-center justify-content-center"
                    >
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">
                          <Link to="/dashboard" style={{color:'white',textDecoration:'none'}}>     SBS<sup>blog</sup> </Link>
                        </div>
                    </a>

                    {/* <!-- Divider --> */}
                    {/*
<!-- Nav Item - Dashboard --> */}
                    <li className="nav-item active">
                        <a className="nav-link">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span><Link to="/dashboard" style={{color:'white',textDecoration:'none'}}>Dashboard</Link></span>
                        </a>
                    </li>

                    {/* <!-- Divider --> */}

                    {/* <!-- Heading --> */}
                    {/*
    <!-- Nav Item - Pages Collapse Menu --> */}
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                        >
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Manage Category</span>
                        </a>
                        <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionSidebar"
                        >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <a className="collapse-item">
                                    <Link
                                        to="/category"
                                        style={{ color: "black" }}
                                    >
                                        {" "}
                                        Add Category{" "}
                                    </Link>
                                </a>
                                <a className="collapse-item" href="">
                                    <Link to="" style={{ color: "black" }}>
                                        {" "}
                                        View Category{" "}
                                    </Link>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseUtilities"
                            aria-expanded="true"
                            aria-controls="collapseUtilities"
                        >
                            <i className="fas fa-fw fa-wrench"></i>
                            <span>Utilities</span>
                        </a>
                        <div
                            id="collapseUtilities"
                            className="collapse"
                            aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar"
                        >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">
                                    Custom Utilities:
                                </h6>
                                <a className="collapse-item" href="">
                                    Colors
                                </a>
                                <a className="collapse-item" href="">
                                    Borders
                                </a>
                                <a className="collapse-item" href="">
                                    Animations
                                </a>
                                <a className="collapse-item" href="">
                                    Other
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapsePages"
                            aria-expanded="true"
                            aria-controls="collapsePages"
                        >
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                        <div
                            id="collapsePages"
                            className="collapse"
                            aria-labelledby="headingPages"
                            data-parent="#accordionSidebar"
                        >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">
                                    Login Screens:
                                </h6>
                                <a className="collapse-item" href="login.html">
                                    Login
                                </a>
                                <a
                                    className="collapse-item"
                                    href="register.html"
                                >
                                    Register
                                </a>
                                <a
                                    className="collapse-item"
                                    href="forgot-password.html"
                                >
                                    Forgot Password
                                </a>
                                <div className="collapse-divider"></div>
                                <h6 className="collapse-header">
                                    Other Pages:
                                </h6>
                                <a className="collapse-item" href="404.html">
                                    404 Page
                                </a>
                                <a className="collapse-item" href="blank.html">
                                    Blank Page
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </>
        );
    }
}


const Sidebar = () => {
    return (
       <>
             {
                 location.pathname != '/' && location.pathname != '/register' && location.pathname != '/forgot' ?  <LeftSidebar /> : null
             }
       </>
    )
}



export default Sidebar;
