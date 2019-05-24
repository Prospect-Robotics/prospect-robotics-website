import React from 'react';
import {Col} from "react-flexbox-grid";
import AspectRatio from "./AspectRatio";

import '../styles/card.css';

const Card = ({children, aspectRatio, small, border, img, header, text, ...props}) => {
  return <Col {...props}>
    <div className={"card" + (small ? " small" : "")+ (border ? " border" : "")}>
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
  </Col>;
};
export default Card;
