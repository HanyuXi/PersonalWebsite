import React, { Component } from "react";
import YouTube from "react-youtube";
import InstagramEmbed from "react-instagram-embed";
export default class Vlog extends Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <React.Fragment>
        {
          <section id="contact">
            <div className="row">
              <div className="six columns">
                <InstagramEmbed
                  url="https://www.instagram.com/p/BbUkVWSArEL/"
                  maxWidth={320}
                  hideCaption={false}
                  containerTagName="div"
                  protocol=""
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {}}
                />
              </div>
              <div className="six columns main-col">
                <YouTube
                  videoId="bDql0qWv4is"
                  opts={opts}
                  onReady={this._onReady}
                />
                <h4>
                  If you like traveling, music festivals, house music or
                  programming, please contact me or follow my Youtube channel:{" "}
                  <a href="https://www.youtube.com/channel/UCtjlb_H02gsCf2zKxlCJBrQ">
                    XI HANYU
                  </a>{" "}
                  to view more vlogs. I like to meet like-minded people.
                </h4>
              </div>
            </div>
          </section>
        }
      </React.Fragment>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
