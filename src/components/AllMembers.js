import React from 'react';
import {GlobalContext} from "../index";
import config from "../config";

import '../styles/all-members.css';
import Card from "./Card";
import {Row} from "react-flexbox-grid";

const AllMembers = ({visible, onClose}) => {
  if (visible)
    document.body.parentElement.className = "no-scroll";
  else
    document.body.parentElement.className = "";

  return <GlobalContext.Consumer>
    {({memberImages}) => (
      <div className={"all-members-container " + (visible ? 'visible' : "")}>
        <div className={"all-members"}>
          <button onClick={onClose}><i className="fas fa-times"/></button>
          <Row>
            {Object.keys(memberImages.members).map(memberKey => {
              let member = memberImages.members[memberKey];

              return (
                <Card img={config.server + member.src} xs={6} sm={3} md={2} aspectRatio={"100%"} small={true} key={memberKey} style={{marginTop: 16}}>
                  <b>{member.name}</b>
                  <br/>
                  {member.description}
                </Card>
              )
            })}
          </Row>
        </div>
      </div>
    )}
  </GlobalContext.Consumer>
};

export default AllMembers;
