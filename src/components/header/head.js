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
              <h1 className="responsive-headline">Hi there,<br /> I'm Hanyu Xi.</h1>
             
              <hr />
              <ul className="social">
                <li>
                  <a href="https://github.com/HanyuXi">
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li>
                  <a href="https://devpost.com/laoxi02/challenges">
                    <i className="fab fa-dev" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/hanyuxi/">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/laoxi02/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCtjlb_H02gsCf2zKxlCJBrQ">
                    <i className="fab fa-youtube-square" />
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
