import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  vlog Channel
                </a>
              </li>
            </ul>{" "}
            {/* end #nav */}
          </nav>{" "}
          {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Hanyu Xi.</h1>
              {/* <h3>
                <span>Mechatronics Systems Engineering</span> student at{" "}
                <span>Western University</span> <br />
                Specialized in <span>Python</span>, <span>Linux</span>,{" "}
                <span>ReactJS</span>, <span>C++</span>, <span>Qt</span>,{" "}
                <span>Unittesting</span> <br />
                Former Engineering Intern at{" "}
                <a href="https://www.trudellmed.com/">
                  <span>Trudell Medical International Company </span>
                </a>
             </h3> */}
              <hr />
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100006435178367">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/HanyuXi">
                    <i className="fa fa-github" />
                  </a>
                </li>
                <li>
                  <a href="https://devpost.com/laoxi02/challenges">
                    <i className="fa fa-dropbox" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/hanyuxi/">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/laoxi02/">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCtjlb_H02gsCf2zKxlCJBrQ">
                    <i className="fa fa-youtube-square" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
