import logo from './logo.svg';
import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Chart } from "react-google-charts";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from "react-i18next";


export const data = [
  ["Task", "Hours per Day"],
  ['Antarctica', 0],
  ['Africa', 2400],
  ['Asia', 2750],
  ['Australia', 800],
  ['Europe', 3800],
  ['North America', 4500],
  ['South America', 1900]
];

export const options = {
  title: "Number of students enrolled from various continents",
};

function App() {

  const { t, i18n } = useTranslation();

  const handleLanguage = (e) => { 
    i18n.changeLanguage(e.target.value);
  }
  
  // modal for enrollment confirmation
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // modal for contact us message confirmation
  const [showMsg, setShowMsg] = useState(false);

  const handleCloseMsg = () => { {
    setShowMsg(false)
    window.location.reload()}};
  const handleShowMsg = () => setShowMsg(true);





  return (
    <div className="App">
      
      {/*     Navigation Bar    */}
      
      <nav className="navbar fixed-top bg-light navbar-expand-md navbar-light pb-2">
        <div className="container-xxl border-bottom border-2 border-secondary">

          {/*  website logo */}
          <a className="navbar-brand" href="#home">
            <img src= {require('./assets/logo1.png')} alt="logo" />
          </a>

          {/*  mobile nav display version --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          {/*    navbar menu links  */}
          <div className="collapse navbar-collapse justify-content-center" id="main-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#courses">Our Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#teachers">Our Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Assessments">Quick Assessments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
              <li className="nav-item d-md-none">
                <a className="nav-link" href="#enroll">Enroll in a Course</a>
              </li>
              <li className="nav-item ms-2 d-none d-md-inline">
                <a className="btn btn-primary fw-bold"  href="#enroll" style={{color:"white"}}>Enroll in a Course</a>
              </li>
              
            </ul>
          </div>

          <span className="me-3 py-2 text-dark">
                        <select className="form-select form-select-sm language-switcher" onClick={handleLanguage}>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                        </select>
          </span>
        </div>
      </nav>


      {/*  Home Page section  */}
      
      <section id="home">
        <div className="container-lg mt-4">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-6 text-center">
                    
                    <div className="h1 text-primary mb-2">{t('academy_title')}</div> 
                    <div className="h4">{t('weclcoming')}</div>
                    
                    
                </div>
            </div>
        </div>


        <div className="container-fluid">
            <div className="row justify-content-center bg-secondary mx-5 rounded">
                <div className="col-md-5 px-2">
                    <p className="h4 ps-4 pt-4 ms-4 mt-4 text-light text-start">{t('home_intro')}</p>
                    <div className="text-center">  
                        <a href="#enroll" className="btn btn-primary btn-lg mt-3 fw-bold text-light">{t('enroll_now')}</a>
                    </div>
                    
                </div>
                <div className="col-md-5 ps-4 py-1">
                    <img className="img-fluid rounded-pill" src= {require("./assets/home.jpeg")} alt="Home Page" />
                </div>
            </div>
        </div>


        <div className="container-lg mt-4">
            <div className="row justify-content-center">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header h5 bg-warning text-center text-light">{t('Quick_Assessments')}</div>
                        <div className="card-body">
                          <p className="card-text px-3 mb-2 text-start">{t('Quick_Assessments_text')}</p>
                          
                          <div className="text-center">  
                            <a href="#play-and-practice" className="btn btn-primary mt-3 fw-bold">{t('learn_more')}</a>
                          </div>
                        </div>
                        
                    </div>
                </div>
                
                <div className="col-3">
                    <div className="card">
                        <div className="card-header h5 bg-success text-center text-light">{t('courses')}</div>
                        <div className="card-body">
                          <p className="card-text px-3 mb-2 text-start">{t('courses_text')} </p>

                            <div className="text-center">  
                                <a href="#courses" className="btn btn-primary mt-3 fw-bold">{t('learn_more')}</a>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
      
    </section>

    {/*   Courses section  */}

    <section id="courses" className="bg-light">
        <div className="container">
            <div className="row justify-content-evenly">
                <div className="col-7 text-start">
                    <div className="h1 text-primary">Our Courses</div>
                    <p className="lead fw-normal"> Success Academy offers a range of courses based on your learning needs!</p>
                </div>
                <div className="col-1"></div>
            </div>

            <div className="row justify-content-center">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="container mt-4">
                      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="">

                        {/*    English courses   */}

                        <Tab eventKey="home" title="General English" className="tabs tab1">
                          <div className="container p-3">
                            <div className="row justify-content-center mx-3">
                              <div className="col">
                                <Card className="card my-4">
                                  <Card.Img variant="top" className='rounded mx-auto d-block mt-4' src={require("./assets/EngSpeaking.png")} />
                                  <Card.Body className=''>
                                    <div className="h5 text-center">English Speaking Course</div>
                                    <div className="h5 text-primary text-center">45 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start"> Embark on an English speaking journey with our courses! Gain fluency, confidence, and effective communication skills. 
                                                                              Our experienced instructors will guide you through interactive lessons and engaging conversations.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$399.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                  <Card.Img variant="top" className='rounded mx-auto d-block mt-4' src={require("./assets/EngWriting.png")} />
                                  <Card.Body className=''>
                                    <div className="h5 text-center">English Writing Course</div>
                                    <div className="h5 text-primary text-center">45 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start">Enhance your writing skills with our courses! Our experienced instructors will guide you in developing
                                                                             effective communication through interactive lessons and personalized feedback. Unlock your writing 
                                                                             potential and express yourself with confidence.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$399.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                  <Card.Img variant="top" className='rounded mx-auto d-block mt-4' src={require("./assets/EngGrammar.png")} />
                                  <Card.Body className=''>
                                    <div className="h5 text-center">English Grammar Course</div>
                                    <div className="h5 text-primary text-center">45 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start"> Master English grammar with our courses! Our experienced instructors will guide you through interactive lessons
                                                                              and practical exercises to develop a deep understanding of grammar principles.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$399.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            </div>   
                          </div>                       
                        </Tab>

                        {/* Math Courses  To be implemented */}

                        {/* Science Courses  To be implemented */}

                        {/* Test preperation  To be implemented */}  
                        
                      </Tabs>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
      </div>
    </section>


    {/* Our Team section To be implemented*/}


    {/*  Dashboard Analyze section  */}

    <section id="dashboard" className="bg-light">
        <div className="container-lg">
            <div className="row justify-content-center text-center mb-0 pb-0">
                <div className="h1 text-primary mb-4 text-center">Why Choose Success Academy?</div>

                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-person-check-fill text-primary"></i>
                    <div className="h3 text-light">3,500+</div>
                    <div className="h5 text-light pb-3">Active Enrolled Students</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-emoji-smile-fill text-primary"></i>
                    <div className="h3 text-light">14,800+</div>
                    <div className="h5 text-light pb-3">Satisfied Students</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-journal-check text-primary"></i>
                    <div className="h3 text-light">16,500+</div>
                    <div className="h5 text-light pb-3">Total Enrollments</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-check-circle-fill text-primary"></i>
                    <div className="h3 text-light">94%</div>
                    <div className="h5 text-light pb-3">Course Completion Rate</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-globe2 text-primary"></i>
                    <div className="h3 text-light">25+</div>
                    <div className="h5 text-light pb-3">Countries Reached</div>
                </div>
            </div>

                {/*  pie chart  */}
                <div className="row justify-content-center my-0 py-0">
                    <div className="col-3"></div>
                    <div className="col-6 ps-4 pb-4 mt-4 bg-secondary rounded">
                        <div className="text-center">
                            <div className="h5 text-center text-light mt-4">Our learning services have reached students globally, providing educational opportunities to learners worldwide!</div>

                            <div id="chart_div" className="my-0 py-0">

                              <Chart
                                chartType="PieChart"
                                data={data}
                                options={options}
                                width={600}
                                height={300}
                              />
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            
        </div>
        
    </section>


    {/*  Contact Us section  */}
    <section id="contact">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-md-5 me-4 pe-2 text-start">
            <div className="h1 text-primary mb-3">{t('FAQ')}</div>

            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{t('FAQ1')}</Accordion.Header>
                <Accordion.Body>
                {t('Ans1')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{t('FAQ2')}</Accordion.Header>
                <Accordion.Body>
                {t('Ans2')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>{t('FAQ3')}</Accordion.Header>
                <Accordion.Body>
                {t('Ans3')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>{t('FAQ4')}</Accordion.Header>
                <Accordion.Body>
                {t('Ans4')}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="col-md-4 ms-1 ps-1 text-start">
            <div className="h1 text-primary mb-3 text-center">{t('contact_us')}</div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">{t('your_name')}</label>
                <input type="text" className="form-control border border-primary border-3" id="exampleFormControlInput1" placeholder="Full Name"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">{t('phone')}</label>
                <input type="tel" className="form-control border border-primary border-3" id="exampleFormControlInput2" placeholder="e.g. +1123-456-7890"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">{t('email')}</label>
                <input type="email" className="form-control border border-primary border-3" id="exampleFormControlInput3" placeholder="e.g. name@example.com"/>
            </div>

            <label for="subject" className="form-label">{t('option')}</label>
            <select className="form-select border border-primary border-3 mb-3" id="subject">
                <option selected value="appointment">{t('enrollment')}</option>
                <option value="other">{t('other')}</option>
              </select>

            <div className="mb-4">
                <label for="exampleFormControlTextarea1" className="form-label">{t('msg')}</label>
                <textarea className="form-control border border-primary border-3" id="exampleFormControlTextarea1" rows="3" placeholder={t('msg_place')}></textarea>
            </div>

            <div className="mb-4 text-center">
                <a type="submit" className="btn btn-primary fw-bold" style={{color: "white"}} href="#contact" 
                onClick={handleShowMsg}>{t('send')}</a>
            </div>
            
          </div>
        </div>
      </div>

          {/*   Message/Request Confirmation   */}
                
            <Modal show={showMsg} onHide={handleCloseMsg}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <div className="h3 text-center ps-4 text-primary">
                    Request Confirmation
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <p class="lead fs-5 fw-bold">
                      Thank you for contacting us!
                      <br/> We have received your request and will be reaching out to you via email soon (usually within 2 business days).
                    </p>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" className='fw-bold px-5' onClick={handleCloseMsg} style={{color:"white"}}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

    </section>

     {/*   Quick Assessments section To be implemented   */}


     {/*    Enroll in a Course section   */}

    <section id="enroll">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">

                    <div className="h1 text-primary mb-4 text-center">Enroll in a Course</div>

                    <div className="text-start">
                      <label for="service list" className="form-label">Select a Course</label>
                      <select className="form-select border border-primary border-3 mb-3" id="service list">
                          <option selected value="select course">Please select an option...</option>
                          <option value="English Speaking Course">English Speaking Course</option>
                          <option value="English Writing Course">English Writing Course</option>
                          <option value="English Grammar Course">English Grammar Course</option>
                          
                          {/* More options to be added here after implementing all the courses options        */}
                          


                      </select>
                    </div>

                    <div className="h3 text-center mt-4" id="contact-info">Your Contact Informations</div>
    
                    <div className="mb-3 text-start">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control border border-primary border-3 mb-3" id="exampleFormControlInput1" placeholder="First Name"/>
                        <input type="text" className="form-control border border-primary border-3" id="exampleFormControlInput1" placeholder="Last Name"/>
                    </div>
                    <div className="mb-3 text-start">
                        <label for="exampleFormControlInput2" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control border border-primary border-3" id="exampleFormControlInput2" placeholder="e.g. +1123-456-7890"/>
                    </div>
                    <div className="mb-3 text-start">
                        <label for="exampleFormControlInput3" className="form-label">Email address</label>
                        <input type="email" className="form-control border border-primary border-3" id="exampleFormControlInput3" placeholder="e.g. name@example.com"/>
                    </div>
            
                    <div className="row justify-content-center my-4 text-center">
                        <div className="col-4">
                            <a type="submit" className="btn btn-outline-danger px-5 ms-2 fw-bold" href="#booking" onClick={() => window.location.reload()}>Cancel</a>
                        </div>
                        <div className="col-6">
                            <a type="submit" className="btn btn-primary fw-bold px-5 ms-2" style={{color: "white"}} onClick={handleShow} role="button">
                                Enroll
                              </a>
                        </div>
                        
                    </div>
                </div>


                {/*   Booking Confirmation section   */}
                
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <div className="h3 text-center ps-4 text-primary">
                        Course Enrollment Confirmation
                      </div>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div class="h4 ms-5">Your Enrollment Details</div>
                      <div class="container mb-1 px-5">
                        <div class="row mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Selected Course:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}>English Writing Course</div>
                        </div>

                        <div class="row my-2 mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Teacher's Name:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}> Add the name after implementing team section</div>
                        </div>

                        <div class="row my-2 mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Date of Booking:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}>Monday, July 3rd, 2023</div>
                        </div>

                        <div class="row my-2 mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Duration of Course:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}>Access Valid Until December 31th, 2023</div>
                        </div>

                        <p class="lead fs-5 fw-bold mt-5">
                          A confirmation email was sent to you with your course enrollment details. <br/> Thank you for choosing Success Academy!
                        </p>

                    </div>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" className='fw-bold px-5' onClick={handleClose} style={{color:"white"}}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

            </div>
        </div>
        
    </section>
  
    </div>
  );
}

export default App;
