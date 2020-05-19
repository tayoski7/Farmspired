/* eslint-disable class-methods-use-this */
/* eslint-disable semi */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  MDBBtn,
  MDBJumbotron,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation
} from 'mdbreact';
import './HomePage.css';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    return this.window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MDBJumbotron fluid>
          <MDBContainer className="text-white text-center mt-5">
            <h1 className="h1-responsive display-2">Enter, team_232!</h1>
            <hr />

            <p className="display-5 mx-5 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio
              vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui,
              dolorum!
            </p>
            <MDBBtn href="#" gradient="purple" rounded>
              More
            </MDBBtn>
          </MDBContainer>
        </MDBJumbotron>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="mt-4">
              <h2 className="text-center my-5 font-weight-bold">Get FarmSpired By team_232! #weRock</h2>
            </MDBCol>
            <MDBCol md="6">
              <p className="mb-1">
                Omnis fugit magni magnam quo necessitatibus amet harum vel! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Id quam hic, debitis blanditiis, eum similique itaque maiores error cumque in corrupti
              </p>
              <p className="text-muted mb-1">
                lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum
                lorem ipsum dalum ipsum
              </p>
              <p className=" text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quam hic, debitis blanditiis, eum similique
                itaque maiores error cumque in corrupti, omnis fugit magni magnam quo necessitatibus amet harum vel!
              </p>
              <hr className="my-5 " />
            </MDBCol>
            <MDBCol md="6">
              <p className="mb-1">
                Omnis fugit magni magnam quo necessitatibus amet harum vel! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Id quam hic, debitis blanditiis, eum similique itaque maiores error cumque in corrupti
              </p>
              <p className="text-muted mb-1">
                lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum
                lorem ipsum dalum ipsum
              </p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quam hic, debitis blanditiis, eum similique
                itaque maiores error cumque in corrupti, omnis fugit magni magnam quo necessitatibus amet harum vel!
              </p>
              <hr className="my-5" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="bars" className="pink-text pr-2" />
                      <strong>FARM</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum
                      dalum lorem ipsum dalum ipsum
                    </MDBCardText>
                    <MDBBtn href="#" gradient="aqua" rounded>
                      More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="css3" brand className="pink-text pr-2" />
                      <strong>CSS</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum
                      dalum lorem ipsum dalum ipsum
                    </MDBCardText>
                    <MDBBtn href="#" gradient="peach" rounded>
                      More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInDown">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="cubes" className="blue-text pr-2" />
                      <strong>REACT</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum
                      dalum lorem ipsum dalum ipsum
                    </MDBCardText>
                    <MDBBtn href="#" gradient="blue" rounded>
                      More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>

            <MDBCol md="4">
              <MDBAnimation reveal type="fadeIn">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="css3" brand className="pink-text pr-2" />
                      <strong>PRODUCTS</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum
                      dalum lorem ipsum dalum ipsum
                    </MDBCardText>
                    <MDBBtn href="#" gradient="peach" rounded>
                      More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="table" className="green-text pr-2" />
                      <strong>DATABASE</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum
                      dalum lorem ipsum dalum ipsum.
                    </MDBCardText>
                    <MDBBtn href="#" gradient="aqua" rounded>
                      More
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInUp">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBCardImage cascade className="img-fluid" />
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <MDBIcon icon="arrows-alt" className="blue-text pr-2" />
                      <strong>MR VICKY...lol</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum dalum lorem ipsum dalum ipsum lorem ipsum
                      dalum lorem ipsum dalum ipsum
                    </MDBCardText>

                    <MDBBtn>More</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default HomePage;
