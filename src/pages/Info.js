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
          <h1>Lorem Ipsum</h1>
          <h3>January 1, 1970</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
