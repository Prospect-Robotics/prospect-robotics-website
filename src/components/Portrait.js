import React from 'react';

import '../styles/portrait.css';
import {Col, Row} from "react-flexbox-grid";

const Portrait = ({imageSrc, name, description, style}) => (
  <Row className={"portrait"} middle="xs" style={style}>
    <Col xs={4} lg={12}>
      <img src={imageSrc} alt={name}/>
    </Col>
    <Col xs={8} lg={12} className={"portrait-text"}>
      <h3>{name}</h3>
      <p>{description}</p>
    </Col>
  </Row>
);

export default Portrait;