import React from 'react';

import '../styles/info.css';
import diagonal from '../images/diagonal.svg';

import maker from '../images/maker_faire_1.JPG';

const Info = () => {
  return (
    <div id={'info'} className={"no-padding"}>
      <div className={"half-white"}>
        <div className={"info-content"}>
          <h1>Maker Faire</h1>
          <h3>May 17 - 19, 2019</h3>
          <img src={maker} alt=""/>
          <p>Gear Heads, team FRC 2813 went to Maker Faire 2019 on it's last ever Maker Fair. The team presented their
            robot and helped promote the First Robotics Competition to hundreds of young students and adults.</p>
        </div>
        <div className={"info-diagonal"}>
          <img src={diagonal} alt=""/>
        </div>
      </div>
      <div className={"half"}>
        <div className={"info-content"}>
        </div>
      </div>
    </div>
  );
};

export default Info;
