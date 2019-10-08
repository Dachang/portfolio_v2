import React, { PureComponent } from 'react';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

import '../styles/Lbi.css';

function LbiBanner(props) {
  return (
    <div className="lbi-lbi-banner">
      <Controller>
        <Scene triggerElement="#trigger" duration={600} offset={-320}>
          <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} >
            <img
              className="wow fadeIn"
              alt="lbi-lbi-banner"
              src={process.env.PUBLIC_URL + "/static/media/image/lbi_project_banner.jpg"}
              srcSet={process.env.PUBLIC_URL + "/static/media/image/lbi_project_banner@2x.jpg 2x"}
            />
          </Tween>
        </Scene>
      </Controller>
    </div>
  )
}

function LbiIntro(props) {
  return (
    <Controller>
      <Scene triggerElement="#trigger" duration={600} offset={-300}>
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} >
          <div className="row lbi-lbi-intro">
            <div className="two columns"></div>
            <div className="eight columns">
              <h1>Intro</h1>
              <p>”1938 Project: Posts from the Past“ is a captivating, social, web-based and physical exhibition program that presents archive documents – a handwritten letter, diary entry, photo or newspaper article – from German-speaking Jews every day throughout the year 2018, just as they experienced the twelve months before the‘ Kristallnacht‘ and the beginning of the Holocaust.</p>
              <p>As the front-end developer of this project, I built the web application(Vanilla JS/Wordpress), as well as adapting it to interactive kiosks for the exhibition.</p>
            </div>
            <div className="two columns"></div>
          </div>
        </Tween>
      </Scene>
    </Controller>
  )
}

function LbiWeb(props) {
  return (
    <div className="row lbi-web">
      <div className="two columns"></div>
      <Controller>
        <Scene duration={900} pin={true} enabled={true} offset={500}>
          <div className="five columns wow fadeIn" data-wow-delay="0.75s">
            <h1>Website</h1>
            <p>The <a href="https://www.lbi.org/1938projekt" target="_blank"> website</a> was built to display consecutive posts with swift load times and sleek animation transitions, allowing for an uninterrupted user experience in which users could continuously scroll through the content and completely immerse themselves. </p>
          </div>
        </Scene>
      </Controller>
      <div className="five columns">
        <img
          className="wow fadeIn"
          alt="lbi-lbi-banner"
          src={process.env.PUBLIC_URL + "/static/media/image/lbi_web.jpg"}
          srcSet={process.env.PUBLIC_URL + "/static/media/image/lbi_web@2x.jpg 2x"}
        />
      </div>
    </div>
  )
}


function LbiExhibition(props) {
  return (
    <div className="row lbi-exhibition">
      <Controller>
          <Scene triggerElement="#exhibition-trigger" duration={600} offset={0}>
            <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                <div className="row lbi-exhibition-info">
                  <div className="two columns"></div>
                        <div className="eight columns">
                          <h1>Exhibition</h1>
                          <p>For the New York-based exhibit, visitors are confronted with large plywood panels for each month in the year of 1938. The geometric lines of the graphics create a feeling of a calendar spelled out across the exhibit space. </p>
                        </div>
                  <div className="two columns"></div>
                </div>
              </Tween>
          </Scene>
      </Controller>
      <div className="row lbi-exhibition-photo">
        <img
          className="wow fadeIn"
          data-wow-delay="0.5s"
          alt="lbi-lbi-banner"
          src={process.env.PUBLIC_URL + "/static/media/image/lbi_onsite.jpg"}
          srcSet={process.env.PUBLIC_URL + "/static/media/image/lbi_onsite@2x.jpg 2x"}
        />
      </div>
    </div>
  )
}

export default class Lbi extends PureComponent {

  render() {
    return (
      <div className="project-lbi">
        <BackButton/>
        <LbiBanner/>
        <div id="trigger"></div>
        <LbiIntro/>
        <LbiWeb/>
        <div id="exhibition-trigger"></div>
        <LbiExhibition/>
        <Footer
          theme="dark"
        />
      </div>
    );
  }

}
