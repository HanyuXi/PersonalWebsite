import React, { Component } from "react";
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
        {
          <section id="testimonials">
            <div className="text-container">
              <div className="row">
                <div className="two columns header-col">
                  <h1>
                    <span>Client Testimonials</span>
                  </h1>
                </div>
                <div className="ten columns flex-container">
                  <div className="flexslider">
                    <ul className="slides">
                      <li>
                        <blockquote>
                          <p>
                            Hanyu is the definition of dependability and
                            innovation. I have collaborated with him on numerous
                            projects over the years and he stays consistent.
                            From extra-curricular engagements to course-related
                            projects, he consistently gives 110%. Any
                            organization would be better off with his talents.
                            Also a great travel partner
                          </p>
                          <cite>Gamaliel Obynian</cite>
                        </blockquote>
                      </li>{" "}
                      {/* slide ends */}
                      <li>
                        <blockquote>
                          <p>
                            You are the greatest human being on this planet.
                          </p>
                          <cite>Seran Thirugnanam</cite>
                        </blockquote>
                      </li>{" "}
                      {/* slide ends */}
                    </ul>
                  </div>{" "}
                  {/* div.flexslider ends */}
                </div>{" "}
                {/* div.flex-container ends */}
              </div>{" "}
              {/* row ends */}
            </div>{" "}
            {/* text-container ends */}
          </section>
        }
      </React.Fragment>
    );
  }
}
