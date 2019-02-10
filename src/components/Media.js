import React, {Component} from 'react';

import '../styles/media.css';

import img1 from '../images/media/20180222-IMG_9506.jpg';
import img2 from '../images/media/20180331-IMG_5836.jpg';
import img3 from '../images/media/20180406-IMG_8291.jpg';

import { Grid, Row, Col } from 'react-flexbox-grid';

import logo from '../images/head_vector_fullcolor.svg';

export default class Media extends Component {
  constructor() {
    super();

    this.state = {
      youtubeSize: {
        height: 0,
        width: 0
      }
    }
  }

  render() {
    let {height, width} = this.state.youtubeSize;

    return (
      <div id={"media"}>
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <div style={{
                height: 112,
                width: 112,
                overflow: "hidden",
                borderRadius: "50%",
                float: "left",
                marginRight: 32
              }}>
                <img src={logo} alt="" style={{height: "100%"}}/>
              </div>
              <h1>Prospect Robotics</h1>
            </Col>
            <Col xs={12} md={12} lg={6}>
              <iframe style={{height, width}}
                      src="https://www.youtube.com/embed/Q-eGqkL2AXQ" frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}