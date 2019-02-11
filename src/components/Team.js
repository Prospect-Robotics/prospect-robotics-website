import React, {Component} from 'react';

import '../styles/team.css';

import workshop from '../images/workshop.jpg';
import software from '../images/software.jpg';
import cad from '../images/cad.jpg';
import TeamCard from "./TeamCard";

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
        <div className={"background"}>
          <div className={"img"}/>
          <div className={"gradient"}/>
        </div>
        <div className={"text"}>
          <h1>Team Departments</h1>
          <p>Our team is separated into multiple departments of different skills</p>
          <div className={"team-cards"}>
            <TeamCard img={workshop} title={"Hardware"} caption={"learn more..."} hoverText={"The Gearheads hardware team is trained to use machines to craft precision components that help our robot perform to high standards."}/>
            <TeamCard img={software} title={"Software"} caption={"learn more..."} hoverText={"Our software team are experts in Java and can always be counted on to troubleshoot mid-competition when needed."}/>
            <TeamCard img={cad} title={"CAD/3D Design"} caption={"learn more..."} hoverText={"The CAD/3D Design department manages the difficult job of taking a competition concept from theory to reality in record time."}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Team;