import React, {Component} from 'react';

import SponsorImages from '../sponsors.json';
import '../styles/sponsors.css';
import {Col, Row} from "react-flexbox-grid";

class Sponsors extends Component {
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
      <div id={"sponsors"} className={this.state.visible ? "visible" : ""}>
        <h1>
          Our Sponsors
        </h1>
        {SponsorImages.map((sponsorRow, i) => (
          <Row center="xs" middle="xs" key={i}>
            {sponsorRow.map((sponsorImg, i) => (
              <Col xs={12 / sponsorRow.length}>
                <img src={"/sponsors/" + sponsorImg} key={i} style={{width: "100%"}} alt={""}/>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    )
  }
}

export default Sponsors;