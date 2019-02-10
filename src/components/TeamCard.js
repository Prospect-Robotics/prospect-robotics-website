import React from 'react';

import '../styles/card.css';

const TeamCard = ({img, title, caption, hoverText}) => (
  <div className="team-card">
    <div className={"team-card-text"}>
      <h1>{title}</h1>
      <p>{caption}</p>
      <p className={"team-card-hover-text"}>{hoverText}</p>
    </div>
    <img src={img} alt={title}/>
  </div>
);

export default TeamCard;