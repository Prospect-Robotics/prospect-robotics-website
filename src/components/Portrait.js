import React from 'react';

import '../styles/portrait.css';

const Portrait = ({imageSrc, name, description, style}) => (
  <div className={"portrait"} style={style}>
    <img src={imageSrc} alt={name}/>
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default Portrait;