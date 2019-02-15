import React from 'react';

import '../styles/team-card.css';
import {Col, Row} from "react-flexbox-grid";

const TeamCard = ({img, title, caption, text}) => (
  <div className="team-card">
    <Row>
      <Col xs={12} style={{backgroundImage: `url(${img})`}}>
      </Col>
      <Col xs={12}>
        <h1>{title}</h1>
        <p>{text}</p>
      </Col>
    </Row>
  </div>
);

export default TeamCard;