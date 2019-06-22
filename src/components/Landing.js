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
import Button from "./Button";
import App from "./App";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0
    }
  }

  render() {
    return (
      <div id={"landing"}>
        <Row>
          <Col xs={6} md={4}>
            <img src={logo} alt="LOGO" style={{width: "100%"}}/>
          </Col>
          <Col xs={12} md={8}>
            <h1>Gearheads</h1>
            <h3>FRC 2813</h3>
          </Col>
        </Row>
        <Row style={{marginTop: 48}}>
          <Col xs={12} md={6} id={"landing-gallery"} style={{marginBottom: 24}}>
            <Button style={'underline'} onClick={() => App.scrollTo('members')}>
              Members
            </Button>
            <Button style={'underline'}  onClick={() => App.scrollTo('sponsors')}>
              Sponsors
            </Button>
            <Button style={'underline'}  onClick={() => App.scrollTo('teams')}>
              Teams
            </Button>
            <Button style={'underline'}  onClick={() => App.scrollTo('contact')}>
              Contact
            </Button>
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
