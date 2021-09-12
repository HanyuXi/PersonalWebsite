import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        {
          <section id="about">
            <div className="row">
              <div className="six columns">
                <img className="profile-pic" src="images/profilepic.jpg" alt />
              </div>
              <div className="six columns main-col">
                <h2>About Me</h2>
                <p>
                  I am a Data Engineer at Q4 Inc and also a part time 
                  Computer Engineering Master student at University of Toronto. 
                  Previously, I worked at IBM as a backend developer and software developer at Scotiabank.
                  My interests range from dev ops and design
                  to vlogging my travels and house music. Feel free to connect
                  with me if any of my skills and/or interests resonate with
                  you, or if you just want to geek out about the latest
                  technology!
                </p>
                {/*   <h3 style={{ color: "white" }}>
                  <span>Mechatronics Systems Engineering</span> student at{" "}
                  <span>Western University</span> <br />
                  Familiar skills include: <span>Python</span>,{" "}
                  <span>Linux</span>, <span>ReactJS</span>, <span>C++</span>,{" "}
                  <span>Jenkins</span>, <span>Unittesting</span> <br />
        </h3> */}
                <div className="row">
                  <div className="columns download">
                    <p>
                      <a href="/HX-resume.pdf" download className="button">
                        <i className="fa fa-download" />
                        Download Resume
                      </a>
                    </p>
                  </div>
                </div>{" "}
                {/* end row */}
              </div>{" "}
              {/* end .main-col */}
            </div>
          </section>
        }
      </React.Fragment>
    );
  }
}
