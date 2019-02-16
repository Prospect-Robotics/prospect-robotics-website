import React, {Component} from 'react';

import '../styles/landing.css';
import logo from '../images/logo.svg';
import {Col, Row} from "react-flexbox-grid";
import YoutubeVideo from "./YoutubeVideo";
import Carousel from 'nuka-carousel';

import image1 from '../images/media/20180222-IMG_9506.jpg';
import image2 from '../images/media/20180331-IMG_5836.jpg';
import image3 from '../images/media/20180406-IMG_8291.jpg';
import AspectRatio from "./AspectRatio";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0
    }
  }

  render() {
    let {height, width} = this.state;

    return (
      <div id={"landing"}>
        <Row>
          <Col xs={8} md={4}>
            <img src={logo} alt="LOGO" style={{width: "100%"}}/>
          </Col>
          <Col xs={12} md={8}>
            <h1>Prospect Robotics</h1>
            <h3>FRC 2813</h3>
            <p>"make it happen" - Jack Taylor</p>
            <p className={"landing-links"}>
              <a href="#about">about us</a>
              <a href="#sponsors" style={{marginLeft: 16}}>sponsors</a>
              <a href="#team" style={{marginLeft: 16}} id={"landing-team-link"}>departments</a>
            </p>
            <p className={"landing-links"}>
              <a href="#first">first</a>
              <a href="#contact" style={{marginLeft: 16}}>contact us</a>
            </p>
          </Col>
        </Row>
        <Row style={{marginTop: 48}}>
          <Col xs={12} md={6} id={"landing-gallery"} style={{marginBottom: 24}}>
            <AspectRatio aspectRatio={"56.25%"}>
              <Carousel>
                <img src={image1} alt={""}/>
                <img src={image2} alt={""}/>
                <img src={image3} alt={""}/>
              </Carousel>
            </AspectRatio>
          </Col>
          <Col xs={12} md={6} id={"landing-video"}>
            <YoutubeVideo container={"landing-video"} videoUrl={"https://www.youtube.com/embed/Q-eGqkL2AXQ"}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Landing;