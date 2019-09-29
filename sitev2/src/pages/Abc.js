import React, { PureComponent } from 'react';
import '../styles/Abc.css';

function AbcBanner(props) {
  return (
    <div className="abc-banner project-info row">
      <div className="one column"></div>
      <div
        className="ten columns">
        <div className="row" data-parallax='{"y" : -320, "smoothness" : 2}'>
          <h1 className="project-info-header wow fadeIn">Airbnb</h1>
          <p className="project-intro  wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.35s">
            Design owner of China guest search & decide experience.<br/>
            Iterate product features with XFN peers, see through launches with business impact.<br/>
            Drive design visions that outline product team roadmap.
          </p>
        </div>
      </div>
      <div className="one column"></div>
    </div>
  )
}

function AbcHighlightsTri(props) {
  return (
    <div className={"abc-highlight row wow fadeIn " + props.rowCount} data-wow-delay="0.2s">
      <div className="two columns"></div>
      <div className="eight columns abc-highlight-cards">
        <div className=" row">
          <div className="four columns">
            <img
              className="abc-highlight-card-cover"
              alt="abc-highlight-card-cover"
              src={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-search.jpg"}
              srcSet={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-search@2x.jpg 2x"}
            />
            <h4>Search</h4>
          </div>
          <div className="four columns">
            <img
              className="abc-highlight-card-cover"
              alt="abc-highlight-card-cover"
              src={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-filter.jpg"}
              srcSet={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-filter@2x.jpg 2x"}
            />
            <h4>Filter</h4>
          </div>
          <div className="four columns last">
            <img
              className="abc-highlight-card-cover"
              alt="abc-highlight-card-cover"
              src={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-map.jpg"}
              srcSet={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-map@2x.jpg 2x"}
            />
            <h4>Location</h4>
          </div>
        </div>
      </div>
      <div className="two columns"></div>
    </div>
  )
}

function AbcVideoCard(props) {
  return (
    <div className="abc-video-card">
      <video
        width="100%"
        preload={true}
        autoPlay
        loop
        muted
        draggable={false}>
        <source
          src={process.env.PUBLIC_URL + props.videoSource}
          type="video/mp4">
        </source>
      </video>
      <img
        className="abc-highlight-card-cover"
        alt="abc-highlight-card-cover"
        src={process.env.PUBLIC_URL + props.imageSource + ".jpg"}
        srcSet={process.env.PUBLIC_URL + props.imageSource + "@2x.jpg 2x"}
      />
    </div>
  )
}

function AbcHighlightsLeftDual(props) {
  return (
    <div className={"abc-highlight dual row wow fadeIn " + props.rowCount} data-wow-delay="0.2s">
        <div className="two columns"></div>
        <div className="eight columns abc-highlight-cards">
          <div className=" row">
            <div className="eight columns">
              <img
                className="abc-highlight-card-cover"
                alt="abc-highlight-card-cover"
                src={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-pdp.jpg"}
                srcSet={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-pdp@2x.jpg 2x"}
              />
              <h4>Decide</h4>
            </div>
            <div className="four columns">
              <AbcVideoCard
                videoSource="/static/media/videos/abc_highlight_review.mp4"
                imageSource="/static/media/image/abc-highlight-review"
              />
              <h4>Review</h4>
            </div>
          </div>
        </div>
        <div className="two columns"></div>
    </div>
  )
}

function AbcHighlightsRightDual(props) {
  return (
    <div className={"abc-highlight rightdual row wow fadeIn " + props.rowCount} data-wow-delay="0.2s">
        <div className="two columns"></div>
        <div className="eight columns abc-highlight-cards">
          <div className=" row">
            <div className="four columns">
              <AbcVideoCard
                videoSource="/static/media/videos/abc_highlight_tour.mp4"
                imageSource="/static/media/image/abc-highlight-review"
              />
              <h4>Home Tour</h4>
            </div>
            <div className="eight columns">
              <img
                className="abc-highlight-card-cover"
                alt="abc-highlight-card-cover"
                src={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-gallery.jpg"}
                srcSet={process.env.PUBLIC_URL + "/static/media/image/abc-highlight-gallery@2x.jpg 2x"}
              />
              <h4>Gallery</h4>
            </div>
          </div>
        </div>
        <div className="two columns"></div>
    </div>
  )
}

export default class ABC extends PureComponent {

  render() {
    return (
      <div className="project-airbnb-china wow fadeIn"  data-wow-delay="0.2s">
        <div className="airbnb-banner-background">
          <div id="belo-animation" className="animate"></div>
        </div>
        <AbcBanner/>
        <AbcHighlightsTri
          rowCount="first"
        />
        <AbcHighlightsLeftDual/>
        <AbcHighlightsRightDual/>
      </div>
    );
  }

}