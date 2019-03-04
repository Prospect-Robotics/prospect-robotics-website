import React from 'react';
import {Col} from "react-flexbox-grid";
import AspectRatio from "./AspectRatio";

import '../styles/card.css';

const Card = ({children, aspectRatio, img, header, text, ...other}) => (
  <Col {...other}>
    <div className={"card"}>
      {img ? (
        <AspectRatio aspectRatio={aspectRatio || "66.6%"}>
          <img src={img} alt=""/>
        </AspectRatio>) : ""}
      <div className={"card-text"}>
        {header ? <h1>{header}</h1> : ""}
        {text ? <p>{text}</p> : ""}
        {children}
      </div>
    </div>
  </Col>
);

export default Card;