import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        {
          <section id="resume">
            {/* Education
         ----------------------------------------------- */}
            <div className="row education">
              <div className="three columns header-col ">
                <h1>
                  <span>Education</span>
                </h1>
                <img className="profile-pic" src="images/university.jpg" alt />
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Western University</h3>
                    <p className="info">
                      B.E.Sc Mechatronics System Engineer <span>•</span>{" "}
                      <em className="date">September 2014 - April 2019</em>
                    </p>
                    <p>
                      Over the course of my university career, I have taken on a
                      variety of projects that allow me to test the limits of my
                      comfort zone and acquire the skills necessary to grow as a
                      Software Developer. Among my more notable projects, I
                      developed a digital platform capable of reducing the
                      current processing times associated with individuals
                      claiming refugee status in Canada. Additionally, I
                      developed a desktop application for filtering PDF files
                      into colour and non-colour workflows to allow businesses
                      better manage their miscellaneous costs.
                    </p>
                  </div>
                </div>{" "}
              </div>{" "}
              {/* main-col end */}
            </div>{" "}
            {/* End Education */}
            {/* Work
         ----------------------------------------------- */}
            <div className="row work">
              <div className="three columns header-col">
                <h1>
                  <span>Work</span>
                </h1>
                <img className="profile-pic" src="images/trudell.gif" alt />
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Trudell Medical International Company</h3>
                    <p className="info">
                      Mechatronics Engineering Intern <span>•</span>{" "}
                      <em className="date">May 2017 - September 2018</em>
                    </p>
                    <p>
                      During my 16-month work-term at Trudell Medical
                      International, I took on the responsibility of designing
                      and developing an online dashboard to enable doctors to
                      visualize otherwise cryptic patient data. The dashboard
                      was developed using Python, React.js, Linux and SQL which
                      I held to enterprise standards by implementing a testing
                      platform and writing test scripts to validate scalability,
                      performance and optimize response time. Through my
                      efforts, this platform was presented at the European
                      Respiratory Society Conference where medical practitioners
                      had the opportunity to use the product.
                    </p>
                  </div>
                </div>{" "}
                {/* item end */}
                {/* item end */}
              </div>{" "}
              {/* main-col end */}
            </div>{" "}
            {/* End Work */}
            {/* Skills
         ----------------------------------------------- */}
            <div className="row skill">
              <div className="three columns header-col">
                <h1>
                  <span>Skills</span>
                </h1>
              </div>
              <div className="nine columns main-col">
                <p
                  style={{
                    fontSize: "30px",
                    fontStyle: "italic",
                    fontFamily: "Arial"
                  }}
                >
                  "I believe robust skillset is the key to success."{" "}
                </p>
                <div className="rows">
                  <div className="three columns header-col">
                    <img
                      className="skill-pic"
                      src="images/skills/python.jpg"
                      alt
                    />
                    <h1>Python</h1>
                  </div>
                  <div className="three columns header-col">
                    <img
                      className="skill-pic"
                      src="images/skills/c++.jpg"
                      alt
                    />
                    <h1>C++</h1>
                  </div>
                  <div className="three columns header-col">
                    <img
                      className="skill-pic"
                      src="images/skills/html.jpg"
                      alt
                    />
                    <h1>HTML5/CSS3</h1>
                  </div>
                  <div className="three columns header-col">
                    <img
                      className="skill-pic"
                      src="images/skills/jenkin.jpg"
                      alt
                    />
                    <h1>Jenkin</h1>
                  </div>
                </div>

                <div className="rows">
                  <div className="three columns header-col">
                    <img
                      className="skill-pic"
                      src="images/skills/linux.jpg"
                      alt
                    />
                    <h1>Linux/Bash script</h1>
                  </div>
                  <div className="three columns header-col">
                    <img
                      className="skill-pic"
                      src="images/skills/matlab.jpg"
                      alt
                    />
                    <h1>Matlab</h1>
                  </div>
                  <div className="three columns header-col">
                    <img
                      className="skill-pic"
                      src="images/skills/react.jpg"
                      alt
                    />
                    <h1>ReactJs</h1>
                  </div>
                  <div className="three columns header-col">
                    <img className="skill-pic" src="images/skills/d3.jpg" alt />
                    <h1>D3Js</h1>
                  </div>
                </div>
                {/* end skill-bars */}
              </div>{" "}
              {/* main-col end */}
            </div>{" "}
            {/* End skills */}
          </section>
        }
      </React.Fragment>
    );
  }
}
