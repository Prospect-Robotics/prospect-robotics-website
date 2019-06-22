import React, {Component} from 'react';

import SponsorImages from '../sponsors.json';
import '../styles/sponsors.css';
import {Col, Row} from "react-flexbox-grid";
import Card from "./Card";

class Sponsors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      expand: false
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

  handleExpand() {
    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    // noinspection HtmlUnknownTarget
    return (
      <div id={"sponsors"} className={this.state.visible ? "visible" : ""}>
        <h1>
          Our Sponsors
        </h1>
        <Row>
          <Col xs={12}>
            <img src="/sponsors/banner.svg" alt="" style={{width: '100%'}}/>
          </Col>
        </Row>
        <Row>
          <Card xs={12} className={"sponsors-images " + (this.state.expand ? "expand" : "")}>
            <Row>
              {SponsorImages.map((sponsorImg, i) => (
                <Col xs={4} lg={3} key={i}>
                  <img src={"/sponsors/" + sponsorImg} key={i} style={{width: "100%"}} alt={""}/>
                </Col>
              ))}
            </Row>
          </Card>
        </Row>
        <Row>
          <Col xs={12} onClick={this.handleExpand.bind(this)}>
            <h3 style={{textDecoration: "underline"}}>See All</h3>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Sponsors;
