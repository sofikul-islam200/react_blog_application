import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:71}}>
                <div className="row">
                      <div className="col-md-6 offset-md-3">
                            <div className="card bg-dark" style={{borderRadius:0,width:405,boxShadow:'0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'}}>
                                   <h3 style={{textAlign:'center',marginTop:20,color:'white'}}> Create New Account</h3>


                                   <form action="">
                                        <div style={{margin:20}}>
                                             <label htmlFor="Username" className="text-light">Your Username : </label>
                                             <input type="text" className="form-control" placeholder="Inter Your UserName" id="username" name="username" style={{borderRadius:0}}
                                             />
                                         </div>
                                         <div style={{margin:20}}>
                                             <label htmlFor="phone" className="text-light">Your Phone : </label>
                                             <input type="number" className="form-control" placeholder="Inter Your Phone Number" id="phone" name="phone" style={{borderRadius:0}}
                                             />
                                         </div>
                                         <div style={{margin:20}}>
                                             <label htmlFor="email" className="text-light">Your Email : </label>
                                             <input type="gmail" className="form-control" placeholder="Inter Your Email" id="email" name="email" style={{borderRadius:0}}
                                             />
                                         </div>
                                         <div style={{margin:20}} className="text-light">
                                             <label htmlFor="password">Your Password : </label>
                                             <input type="text" className="form-control" placeholder="Inter Your Password" id="password" name="password" style={{borderRadius:0}}
                                             />
                                         </div>
                                         <div style={{margin:20}} className="text-light">
                                             <input type="submit" value="Register" className="btn btn-primary" style={{borderRadius:0}}/>
                                         </div>
                                         <div style={{margin:20}}>
                                             <a href="" rel="noopener noreferrer"><Link to="/"> Already have an account.. </Link></a>
                                         </div>
                                   </form>
                            </div>
                      </div>
                </div>
            </div>
        )
    }
}
export default Register;


