import React, {Component} from 'react';

import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

import '../styles/contact.css'
import Card from "../components/Card";
import {Col, Row} from "react-flexbox-grid";
import AspectRatio from "../components/AspectRatio";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', function () {
      if (Math.floor((window.scrollY + (window.innerHeight / 2)) / window.innerHeight) >= 1) {
        this.setState({
          visible: true
        })
      }
    }.bind(this));
  }

  render() {
    return (
      <div id={"contact"} className={this.state.visible ? "visible" : ""}>
        <div className="contact-content">
          <h1>Contact Us</h1>
          <Card>
            <p style={{marginBottom: 25}}>You can contact us at <a style={{color: "blue"}}
                                                                   href="mailto:info@team2813.com">info@team2813.com</a> or
              at our social media handles.</p>

            <Row>
              <Col xs={3} style={{maxWidth: 128}}>
                <a href="https://www.facebook.com/team2813/" target={"_blank"}>
                  <AspectRatio aspectRatio={"100%"}>
                    <img src={facebook} alt="Facebook" style={{height: "100%", width: "100%"}}/>
                  </AspectRatio>
                </a>
              </Col>

              <Col xs={3} style={{maxWidth: 128}}>
                <a href="https://www.instagram.com/frc2813/" target={"_blank"}>
                  <AspectRatio aspectRatio={"100%"}>
                    <img src={instagram} alt="Instagram" style={{height: "100%", width: "100%"}}/>
                  </AspectRatio>
                </a>
              </Col>

              <Col xs={3} style={{maxWidth: 128}}>
                <a href="https://twitter.com/frc2813" target={"_blank"}>
                  <AspectRatio aspectRatio={"100%"}>
                    <img src={twitter} alt="Twitter" style={{height: "100%", width: "100%"}}/>
                  </AspectRatio>
                </a>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    )
  }
}

export default Contact;
