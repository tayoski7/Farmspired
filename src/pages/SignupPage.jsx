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

                <input type="number" id="defaultSignupFormphoneNumber" className="form-control mb-4" placeholder="Enter your Phone Number" />
           
                <MDBBtn className="btn btn-block my-4" type="submit">
                    Sign up
                </MDBBtn>
  
                <p>
                    Already a member?
                <br />
                <a href="/Login">Login</a>
                </p>
                </form>

            </MDBCard>
        </MDBContainer>
    );
}


export default SignupPage;