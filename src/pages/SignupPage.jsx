import React from 'react';
import { MDBContainer, MDBCard, MDBBtn, MDBRow } from 'mdbreact';



function SignupPage() {
    return (
        <MDBContainer sm="12" style={{ width: '65%', marginTop: '3rem' }}>
            <MDBCard>
          
                <div className="header pt-3 blue-gradient">
                    <MDBRow className="d-flex justify-content-center">
                        <h3 className="white-text mb-3 pt-3 font-weight-bold">Sign Up</h3>
                    </MDBRow>
                </div>
                <form className="text-center border border-light p-5" action="#!">
                <input type="text" id="defaultSignupFormfirstName" className="form-control mb-4" placeholder="Enter your First Name" />
  
                <input type="text" id="defaultSignupFormlastName" className="form-control mb-4" placeholder="Enter your Last Name" />

                <input type="email" id="defaultSignupFormEmail" className="form-control mb-4" placeholder="Enter your E-mail" />

                <input type="text" id="defaultSignupFormPassword" className="form-control mb-4" placeholder="Enter your Password" />

                <input type="text" id="defaultSignupFormAddress" className="form-control mb-4" placeholder="Enter your Address" />

                <input type="tel" id="defaunelSignupFormphoneNumber" className="form-control mb-4" placeholder="Enter your Phone Number" />
           
                <div className="text-center">
                    <div>
                        <div className="text-center custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                            <label className="custom-control-label" htmlFor="defaultLoginFormRemember">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <br />
                </div>
                <MDBBtn className="btn btn-block my-4" type="submit">
                    Sign up
                </MDBBtn>
  
                <p>
                    Already a member?
                <br />
                <a href="LoginPage.jsx">Login</a>
                </p>
                </form>

            </MDBCard>
        </MDBContainer>
    );
}











 export default SignupPage;