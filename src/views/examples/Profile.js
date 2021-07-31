/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col,Badge,CardBody } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/theme/download.png";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0" 
          style={{"background-image":"linear-gradient(150deg, #8f6ed5 13%, #AC92EE 50%, #412A8E 90%)"}}>
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button style={{"background":"linear-gradient(150deg, #AC92EE 15%, #8f6ed5 70%, #412A8E 94%)","color":"white"}}
                          className="mr-4"
                          href="https://www.linkedin.com/in/farah-jamal-5a599218a/"
                          
                          size="sm"
                        >
                          Connect
                        </Button>
                  
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">12</span>
                          <span className="description">Projects</span>
                        </div>
                        <div>
                          <span className="heading">15</span>
                          <span className="description">certificates</span>
                        </div>
                        <div>
                          <span className="heading">3</span>
                          <span className="description">Experiences
</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Farah Jamal{" "}
                      <span className="font-weight-light">, 22</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Amman, Jordan
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Full stack developer - ASAC-LTUC
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Al-Balqa' Applied university
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        I have graduated of Al-Balqa Applied University with a major in Computer Science / Prince Abdullah Bin Ghazi College of Information Technology.

Now I am learning Cyber Security and Web development and trying new way to life.

I consider myself a disciplined, enthusiastic and quick-learner person, as I invested my spare time during my university studies by studying several programming courses through the different educational websites and the different training courses that were held to support my Computer Science degree. I continuously deepen my programming skills by finding creative solutions to some of the complex programming challenges
                        </p>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>

           
          </section>

          <Container style={{"margin-bottom":"50px"}}>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                                Hogwarts website
                          </h6>
                          <p className="description mt-3">
                             potter heads site has some information about hogwarts houses,
                             quiz and funny page to showing pictures for hogwarts characters.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://harrypotterhogwarts.farahsarese98.repl.co/"
                            
                          >
                            Learn more
                          </Button>
                          
                        </CardBody>
                      
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="fas fa-cookie" />
                          </div>
                          <h6 className="text-success text-uppercase">
Salmon cookies 
                                      </h6>
                          <p className="description mt-3">
                           this is another website for sell salmon cookies use user friendly design and 
                           such an amazing technologies using vanilla web languages. 

                           
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://farahjamal.github.io/cookie-stand/"
                            
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
        
                  </Row>
                </Col>
              </Row>
              </Container>

              <Container style={{"margin-top":"50px","margin-bottom":"50px"}}>

              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
              <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-plane" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Take Me Away
                          </h6>
                          <p className="description mt-3">
                         Tour website to let people know more about cities and plan their trip 
                         this website has quiz and more amazing feature check it now!
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://201-angry-nerds.github.io/201-Final-angry-nerds/"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="fa fa-bus" />
                          </div>
                          <h6 className="text-info text-uppercase">

Bus Mall                          </h6>
                          <p className="description mt-3">
                         shopping website to help sellers put their products and let the customer choose and voted for them.
                          </p>
                          <div>
                            <Badge color="info" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="info"
                            href="https://farahjamal.github.io/bus-mall/"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    </Row>
                </Col>
              </Row>
              </Container>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
