import React, {Component} from 'react';

import '../styles/team.css';

import workshop from '../images/workshop.jpg';
import software from '../images/software.jpg';
import cad from '../images/cad.jpg';
import {Row} from "react-flexbox-grid";
import Card from "./Card";

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', function () {
      if (Math.floor((window.scrollY + (window.innerHeight / 2)) / window.innerHeight) >= 1) {
        this.setState({
          visible: true
        })
      }
    }.bind(this));
  }

  render() {
    return (
      <div id={"team"} className={this.state.visible ? "visible" : ""}>
        <h1>Team Departments</h1>
        <p>Our team is separated into multiple departments of different skills</p>
        <Row className={"team-cards"}>
          <Card img={workshop} className="team-card" header={"Hardware"}
                text={"The Gearheads hardware team is trained to use machines to craft precision components that help our robot perform to high standards."}
                xs={12} md={4}/>
          <Card img={software} className="team-card" header={"Software"}
                text={"Our software team are experts in Java and can always be counted on to troubleshoot mid-competition when needed."}
                xs={12} md={4}/>
          <Card img={cad} className="team-card" header={"CAD/3D Design"}
                text={"The CAD/3D Design department manages the difficult job of taking a competition concept from theory to reality in record time."}
                xs={12} md={4}/>
        </Row>
      </div>
    )
  }
}

export default Team;