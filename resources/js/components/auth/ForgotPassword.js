import React, { Component } from 'react';
import {
    Link
} from "react-router-dom"

class ForgotPassword extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:199}}>
                <div className="row">
                      <div className="col-md-6 offset-md-3">
                            <div className="card bg-dark" style={{borderRadius:0,width:405,boxShadow:'0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'}}>
                                   <h3 style={{textAlign:'center',marginTop:20,color:'white'}}> Forgot Password </h3>
                                   <form action="">
                                         <div style={{margin:20}}>
                                             <label htmlFor="email" className="text-light">Your Email : </label>
                                             <input type="gmail" className="form-control" placeholder="Inter Your Email" id="email" name="email" style={{borderRadius:0}}
                                             />
                                         </div>
                                         <div style={{margin:20}}>
                                             <button className="btn btn-primary" style={{borderRadius:0}}> Forgot </button>
                                         </div>
                                         <div className="row" style={{marginLeft:9,marginRight:20,marginBottom:20}}>
                                              <div className="col-md-6">
                                              <div>
                                                   <a href="" rel="noopener noreferrer"> <Link to="/">Back to login..</Link> </a>
                                               </div>
                                              </div>
                                         </div>
                                   </form>
                            </div>
                      </div>
                </div>
            </div>
        )
    }
}
export default ForgotPassword;


