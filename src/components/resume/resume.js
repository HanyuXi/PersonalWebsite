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
                <img className="profile-pic" src="images/uoft.jpg" alt />
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>University of Toronto</h3>
                    <p className="info">
                      M.Eng. Computer Engineering <span>•</span>{" "}
                      <em className="date">In progress - December 2021</em>
                    </p>
                    <p>
                      As a part time student, I'm currently pursuing my Master of Computer Engineering Degree. Relevant Coursework: Advanced Algorithms, 
                      Cloud Computing (AWS, Flask, Serverless Computing, DynamoDB/MySQL), Machine Learning, Web Scale Applications，Creative Mobile Applications,
                      Big Data Science (Spark, Azure), Parallel Programming, Advanced Data Systems.
                    </p>
                  </div>
                </div>{" "}
              </div>{" "}
              </div>{" "}
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
                <img className="profile-pic" src="images/Q4.png" alt />
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Q4 Inc</h3>
                    <p className="info">
                      Data Engineer <span>•</span>{" "}
                      <em className="date">July 2021 - Present</em>
                    </p>
                    <p>
                      Re-designed and optimized company's data pipeline architecture.
                      Tech stacks include Snowflake, SQL, AWS, Python, Streaming architecture, ETL
                    </p>
                  </div>
                </div>{" "}
                {/* item end */}
                {/* item end */}
              </div>{" "}
              {/* main-col end */}
            </div>{" "}
         <div className="row work">
              <div className="three columns header-col">
                <h1>
                  <span>Work</span>
                </h1>
                <img className="profile-pic" src="images/ibm.jpg" alt />
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Scotiabank</h3>
                    <p className="info">
                      Backend Developer <span>•</span>{" "}
                      <em className="date">Jan 2021 - Jun 2021</em>
                    </p>
                    <p>
                      My primary duties as a backend developer at IBM Data and AI department include fixing variety of defects and issues that help improve Db2 application
                      availability and scalability, assisting in developing new features for Db2 v12 release.
                  
                    </p>
                  </div>
                </div>{" "}
                {/* item end */}
                {/* item end */}
              </div>{" "}
              {/* main-col end */}
            </div>{" "}
         <div className="row work">
              <div className="three columns header-col">
                <h1>
                  <span>Work</span>
                </h1>
                <img className="profile-pic" src="images/scotiabank.jpg" alt />
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Scotiabank</h3>
                    <p className="info">
                      Programmer Analyst <span>•</span>{" "}
                      <em className="date">June 2019 - Present</em>
                    </p>
                    <p>
                      As a programmer analyst at Scotiabank Global Risk Technology department,
                      my main duties include implementing code enhancement of existing risk data processing application 
                      to ensure that the client’s updated requirements are met. I'm also a technical lead in a web application project
                      that enables clients to streamline and modify bank’s counterparty risk data 
                      using Vue.js, Django, Kafka, and Docker. Apart from application development work, I have also assisted in migrating internal risk data calculation software applications 
                      from on-premise servers to Google Cloud Platform.
                    </p>
                  </div>
                </div>{" "}
                {/* item end */}
                {/* item end */}
              </div>{" "}
              {/* main-col end */}
            </div>{" "}
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
                      Software Engineering Intern <span>•</span>{" "}
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
                      src="images/skills/vue.jpg"
                      alt
                    />
                    <h1>Vue.js</h1>
                  </div>
                  <div className="three columns header-col">
                    <img
                      className="skill-pic"
                      src="images/skills/jenkin.jpg"
                      alt
                    />
                    <h1>Jenkins</h1>
                  </div>
                </div>

                <div className="rows">
                  <div className="three columns header-col">
                    <img
                      className="skill-pic"
                      src="images/skills/linux.jpg"
                      alt
                    />
                    <h1>Bash</h1>
                  </div>
                  <div className="three columns header-col">
                    <img
                      className="skill-pic"
                      src="images/skills/aws.jpg"
                      alt
                    />
                    <h1>Cloud Computing</h1>
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
                    <img className="skill-pic" src="images/skills/java.jpg" alt />
                    <h1>Java</h1>
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
