import React, {Component} from 'react';

import '../styles/landing.css';
import logo from '../images/logo.svg';
import {Col, Row} from "react-flexbox-grid";
import YoutubeVideo from "../components/YoutubeVideo";
import Button from "../components/Button";
import App from "../components/App";

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
            <h1>Gear Heads</h1>
            <h3>FRC 2813</h3>
          </Col>
        </Row>
        <Row style={{marginTop: 48}}>
          <Col xs={12} md={6} id={"landing-links"} style={{marginBottom: 24}}>
            <Button type={'underline'} onClick={() => App.scrollTo('members')}>
              Members
            </Button>
            <Button type={'underline'} onClick={() => App.scrollTo('sponsors')}>
              Sponsors
            </Button>
            <Button type={'underline'} onClick={() => App.scrollTo('teams')}>
              Teams
            </Button>
            <Button type={'underline'} onClick={() => App.scrollTo('contact')}>
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
