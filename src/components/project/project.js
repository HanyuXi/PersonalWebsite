import React, { Component } from "react";
export default class Project extends Component {
  render() {
    return (
      <React.Fragment>
        {
          <section id="portfolio">
            <div className="row">
              <div className="twelve columns collapsed">
                <h1>Check Out Some of My Projects.</h1>
                {/* portfolio-wrapper */}
                <div
                  id="portfolio-wrapper"
                  className="bgrid-quarters s-bgrid-thirds cf"
                >
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-01" title>
                        <img alt src="images/portfolio/dashplotly.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Heatmap Calendar</h5>
                            <p>Python+ Dash</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="icon-plus" />
                        </div>
                      </a>
                    </div>
                  </div>{" "}
                  {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-02" title>
                        <img alt src="images/portfolio/refyfree.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>RefyFree</h5>
                            <p> Swift/ReactJS</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="icon-plus" />
                        </div>
                      </a>
                    </div>
                  </div>{" "}
                  {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-03" title>
                        <img alt src="images/portfolio/cookme.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Cookme</h5>
                            <p>Objective C</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="icon-plus" />
                        </div>
                      </a>
                    </div>
                  </div>{" "}
                  {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-04" title>
                        <img alt src="images/portfolio/prism.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Pdf divider</h5>
                            <p>Qt+Python</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="icon-plus" />
                        </div>
                      </a>
                    </div>
                  </div>{" "}
                  {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-05" title>
                        <img alt src="images/portfolio/oculusrift.jpg" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>BeThere</h5>
                            <p>Oculus Rift/VR</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="icon-plus" />
                        </div>
                      </a>
                    </div>
                  </div>{" "}
                  {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-06" title>
                        <img alt src="images/portfolio/arduino.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Arduino/C++</h5>
                            <p>Robotic Cars</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="icon-plus" />
                        </div>
                      </a>
                    </div>
                  </div>{" "}
                  {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-07" title>
                        <img alt src="images/portfolio/d3t.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>D3.js</h5>
                            <p>Time Series vs Date plot</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="icon-plus" />
                        </div>
                      </a>
                    </div>
                  </div>{" "}
                  {/* item end */}
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-08" title>
                        <img alt src="images/portfolio/pi.png" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Raspberry Pi</h5>
                            <p>Linux/GPIO Pins/OpenCV</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="icon-plus" />
                        </div>
                      </a>
                    </div>
                  </div>{" "}
                  {/* item end */}
                </div>{" "}
                {/* portfolio-wrapper end */}
              </div>{" "}
              {/* twelve columns end */}
              {/* Modal Popup
   --------------------------------------------------------------- */}
              <div id="modal-01" className="popup-modal mfp-hide">
                <img
                  className="scale-with-grid"
                  src="images/portfolio/modals/heatmap.png"
                  alt
                />
                <div className="description-box">
                  <h4>Heatmap Calendar</h4>
                  <p>
                    This script helps python programmers or data analysts
                    develop heatmap calendar projects. This application was
                    developed in python using dash and plotly module (MIT
                    Licensed). The heatmap calendar is used to uncover insights
                    from their data. More information can be found on Github or
                    Plotly Forum.
                  </p>
                  <span className="categories">
                    <i className="fa fa-tag" />
                    Plotting tool
                  </span>
                </div>
                <div className="link-box">
                  <a href="https://github.com/HanyuXi/Calendar_Heatmap_Dash_Plotly_Python">
                    Details
                  </a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              {/* modal-01 End */}
              <div id="modal-02" className="popup-modal mfp-hide">
                <img
                  className="scale-with-grid"
                  src="images/portfolio/modals/lighthouse.png"
                  alt
                />
                <div className="description-box">
                  <h4>RefyFree</h4>
                  <p>
                    RefyouFree is to provide a faster, and a more convenient
                    resource to allow those in need to apply to countries as
                    refugee’s to start a better life. This project was developed
                    in ruby on rails and IOS Swift. Refyoufree was also a Hack
                    Western 2 Winner Project.
                  </p>
                  <span className="categories">
                    <i className="fa fa-tag" />
                    Web/Mobile Development
                  </span>
                </div>
                <div className="link-box">
                  <a href="https://devpost.com/software/refyoufree">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              {/* modal-02 End */}
              <div id="modal-03" className="popup-modal mfp-hide">
                <img
                  className="scale-with-grid"
                  src="images/portfolio/modals/m-cookme.jpg"
                  alt
                />
                <div className="description-box">
                  <h4>Cookme</h4>
                  <p>
                    CookMe provides a way to scan receipts from grocery stores
                    to remember what you have in your kitchen and pantry at
                    home. It logs when your groceries were purchased to help you
                    keep track of expiration dates and reminds you when you have
                    food that is approaching its best before date. This project
                    was developed in Java.
                  </p>
                  <span className="categories">
                    <i className="fa fa-tag" />
                    Mobile App Design
                  </span>
                </div>
                <div className="link-box">
                  <a href="https://devpost.com/software/cookme">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              {/* modal-03 End */}
              <div id="modal-04" className="popup-modal mfp-hide">
                <img
                  className="scale-with-grid"
                  src="images/portfolio/modals/m-prism.png"
                  alt
                />
                <div className="description-box">
                  <h4>Prism PDF Divider</h4>
                  <p>
                    The Prism Qt GUI is a desktop application for filtering PDF
                    files into colour and non-colour workflows. The project was
                    developed in Python and PyQt5. It helps students and
                    businesses to manage their miscellaneous cost.
                  </p>
                  <span className="categories">
                    <i className="fa fa-tag" />
                    Desktop App
                  </span>
                </div>
                <div className="link-box">
                  <a href="https://github.com/HanyuXi/Prism_GUI">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              {/* modal-04 End */}
              <div id="modal-05" className="popup-modal mfp-hide">
                <img
                  className="scale-with-grid"
                  src="images/portfolio/modals/bethere.jpg"
                  alt
                />
                <div className="description-box">
                  <h4>BeThere</h4>
                  <p>
                    BeThere provides an opportunity for users to experience the
                    Virtual Reality of the concert from their home. The project
                    was developed in C# and 360 degree camera mount was designed
                    on Solidworks. In order to combine the video streams
                    together, open source APIs that would automate video
                    stitching was used.
                  </p>
                  <span className="categories">
                    <i className="fa fa-tag" />
                    App/Jig/VR Design
                  </span>
                </div>
                <div className="link-box">
                  <a href="https://devpost.com/software/bethere-e7vuj">
                    Details
                  </a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              {/* modal-05 End */}
              <div id="modal-06" className="popup-modal mfp-hide">
                <img
                  className="scale-with-grid"
                  src="images/portfolio/modals/robot-m.jpg"
                  alt
                />
                <div className="description-box">
                  <h4> Robots with Arduino</h4>
                  <p>
                    An autonomous robot is capable of efficient navigation and
                    package delivery. C++ programming language and I2C
                    communications protocol were used. The robot won the top
                    three price in robotics car competition at Western
                    University
                  </p>
                  <span className="categories">
                    <i className="fa fa-tag" />
                    Arduino/C++
                  </span>
                </div>
    <div className="link-box">
              
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              {/* modal-06 End */}
              <div id="modal-07" className="popup-modal mfp-hide">
                <img
                  className="scale-with-grid"
                  src="images/portfolio/modals/d3.png"
                  alt
                />
                <div className="description-box">
                  <h4>Time series vs Date graph</h4>
                  <p>
                    This script helps python programmers or data analysts
                    develop "date vs time series" projects. This application was
                    developed in Javascript using D3 framework and data was
                    through Jinja2 Engine from Python to frontend. The
                    "data-time series graph" is also used to uncover insights
                    from their data. More information can be found on Github or
                    Plotly Forum.
                  </p>
                  <span className="categories">
                    <i className="fa fa-tag" />
                    Web development/Python
                  </span>
                </div>
                <div className="link-box">
                  <a href="https://github.com/HanyuXi/D3-Javascript-Time-Series-vs-Date-Graph">
                    Details
                  </a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              {/* modal-07 End */}
              <div id="modal-08" className="popup-modal mfp-hide">
                <img
                  className="scale-with-grid"
                  src="images/portfolio/modals/webcam.jpg"
                  alt
                />
                <div className="description-box">
                  <h4>Raspberry Pi Projects</h4>
                  <p>
                    The First project is an online video chat app hosting on
                    Raspoberry Pi. Linux and python were used to set up a IP
                    camera from Raspberry Pi and Raspberry Pi camera module. In
                    a separate project, Raspberry Pi GPIO pins were used to
                    design a waveform display box to visualize company's
                    product's performance compared to competitors' products
                    performance. The waveform display box was presented at
                    European Respiratory Society Conference in 2017 and 2018
                  </p>
                  <span className="categories">
                    <i className="fa fa-tag" />
                    Embedded Design, Linux
                  </span>
                </div>
    <div className="link-box">
              
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              {/* modal-01 End */}
            </div>{" "}
            {/* row End */}
          </section>
        }
      </React.Fragment>
    );
  }
}
