import React from 'react';

import '../styles/landing.css';
import logo from '../images/logo.png';

const Landing = () => (
  <div>
    <div className={"black-swipe"}/>
    <div className={"content"}>
      <div className={"content-wrapper"} >
        <div className="content-image">
          <img src={logo} alt="LOGO" style={{width: "100%"}}/>
        </div>
        <div className="content-text">
          <h1>Prospect Robotics</h1>
          <h3>FRC 2813</h3>
          <p>"make it happen" - Jack Taylor</p>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;