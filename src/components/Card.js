import React from 'react';

import '../styles/card.css';

const Card = ({img, title}) => (
  <div className="card">
    <div className={"card-text"}>
      <h1>{title}</h1>
    </div>
    <img src={img} alt={title}/>
  </div>
);

export default Card;