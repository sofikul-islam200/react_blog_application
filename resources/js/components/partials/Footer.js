import React, { Component } from "react";

class BottomFooter extends Component {
    render() {
        return (
            <>
                {/* <!-- Footer --> */}
                <footer class="sticky-footer">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>
                {/* <!-- End of Footer --> */}
            </>
        );
    }
}

const Footer = () =>{
    return (
         <>
             {
                 location.pathname != '/' && location.pathname != '/register' && location.pathname != '/forgot' ?  <BottomFooter /> : null
             }
         </>
    )
}
export default Footer;
