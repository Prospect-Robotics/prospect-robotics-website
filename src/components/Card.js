import React from 'react';

import '../styles/card.css';

const Card = ({img, title, caption, hoverText}) => (
  <div className="card">
    <div className={"card-text"}>
      <h1>{title}</h1>
      <p>{caption}</p>
      <p className={"card-hover-text"}>{hoverText}</p>
    </div>
    <img src={img} alt={title}/>
  </div>
);

export default Card;