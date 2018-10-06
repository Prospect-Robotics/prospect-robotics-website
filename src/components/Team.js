import React, {Component} from 'react';

import '../styles/team.css';

import workshop from '../images/workshop.jpg';
import software from '../images/software.jpg';
import Card from "./Card";

class Team extends Component {
  constructor() {
    super();

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
          <div className={"cards"}>
            <Card img={workshop} title={"Hardware"}/>
            <Card img={software} title={"Software"}/>
            <Card img={workshop} title={"CAD/3D Design"}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Team;