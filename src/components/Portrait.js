import React from 'react';

import '../styles/portrait.css';

const Portrait = ({imageSrc, name, description, style}) => (
  <div className={"portrait"} style={style}>
    <img src={imageSrc} alt={name}/>
    <div className={"portrait-text"}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Portrait;