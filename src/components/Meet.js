import React, {Component} from 'react';

import '../styles/meet.css';

import jesse from '../images/jesse.jpg';
import kyle from '../images/kyle.jpg';
import siddharth from '../images/siddharth.jpg';
import annie from '../images/annie.jpg';

import Portrait from "./Portrait";
import {Col, Row} from "react-flexbox-grid";

class Meet extends Component {
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
      <div id={"meet"} className={this.state.visible ? "visible" : ""}>
        <h1>Meet the Gearheads</h1>
        <Row className={"portraits"}>
          <Col xs={12} lg={3}>
            <Portrait imageSrc={jesse} name={"Jesse Dendy"} description={"President of Prospect Robotics"}/>
          </Col>
          <Col xs={12} lg={3}>
            <Portrait imageSrc={kyle} name={"Kyle Schumacher"} description={"Vice-President of Prospect Robotics"}/>
          </Col>
          <Col xs={12} lg={3}>
            <Portrait imageSrc={siddharth} name={"Siddharth Singh"} description={"Secretary of Prospect Robotics"}/>
          </Col>
          <Col xs={12} lg={3}>
            <Portrait imageSrc={annie} name={"Annie Lee"} description={"Treasurer of Prospect Robotics"}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Meet;