import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        {
          <footer>
            <div className="row">
              <div className="twelve columns">
                <ul className="social-links">
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
              <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#home">
                  <i className="icon-up-open" />
                </a>
              </div>
            </div>
          </footer>
        }
      </React.Fragment>
    );
  }
}
