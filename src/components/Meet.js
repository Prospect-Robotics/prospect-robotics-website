import React, {Component} from 'react';

import '../styles/meet.css';

import Portrait from "./Portrait";
import {Col, Row} from "react-flexbox-grid";

import config from '../config.json';
import {GlobalContext} from "../index";
import AllMembers from "./AllMembers";

class Meet extends Component {
  static contextType = GlobalContext;

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  componentDidMount() {

    fetch(config.server + '/memberImages')
      .then(response => {
        return response.json();
      })
      .then(memberImages => {
        this.setState({
          memberImages
        });
      });
  }

  render() {
    return (
      <div id={"meet"} className={this.state.visible ? "visible" : ""}>
        <h1>Meet the Gearheads</h1>
        <GlobalContext.Consumer>
          {({memberImages}) => (
            <Row className={"portraits"}>
              <Col xs={12} lg={3}>
                <Portrait imageSrc={config.server + memberImages.president.src} name={memberImages.president.name}
                          description={memberImages.president.description}/>
              </Col>
              <Col xs={12} lg={3}>
                <Portrait imageSrc={config.server + memberImages.vicePresident.src} name={memberImages.vicePresident.name}
                          description={memberImages.vicePresident.description}/>
              </Col>
              <Col xs={12} lg={3}>
                <Portrait imageSrc={config.server + memberImages.treasurer.src} name={memberImages.treasurer.name}
                          description={memberImages.treasurer.description}/>
              </Col>
              <Col xs={12} lg={3}>
                <Portrait imageSrc={config.server + memberImages.secretary.src} name={memberImages.secretary.name}
                          description={memberImages.secretary.description}/>
              </Col>
            </Row>
          )}
        </GlobalContext.Consumer>
        <Row>
          <button className={"button"} onClick={() => this.setState({
            visible: !this.state.visible
          })}>All Members ></button>
        </Row>
        <AllMembers onClose={() => this.setState({visible: false})} visible={this.state.visible}/>
      </div>
    );
  }
}

export default Meet;
