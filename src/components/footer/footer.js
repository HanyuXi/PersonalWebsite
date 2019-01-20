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
