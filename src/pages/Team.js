import React, {Component} from 'react';

import '../styles/team.css';

import workshop from '../images/workshop.jpg';
import software from '../images/software.jpg';
import secondary from '../images/cad.jpg';
import business from '../images/business.jpg';
import {Row} from "react-flexbox-grid";
import Card from "../components/Card";

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
        <p>Our team is separated into 4 main teams, which are then split into more
          subteams.</p>
        <Row className={"team-cards"}>
          <Card img={workshop} className="team-card" header={"Hardware"}
                xs={12} md={6}>
            Our hardware team is responsible for manufacturing, fabricating, and producing parts for our robot in order
            for it to perform at it's highest.
            <br/>
            It is split into three sub-teams
            <ul>
              <li>
                <b>Design:</b> uses Computer Aided Design (CAD) to create images of parts and mechanisms.
              </li>
              <li>
                <b>Fabrication:</b> Creates the parts based on the robot CAD and uses a wide variety of tools.
              </li>
              <li>
                <b>Electrical: Connects mechanical parts to the software of the robot, wiring the entire robot
                  together.</b>
              </li>
            </ul>
          </Card>
          <Card img={software} className="team-card" header={"Software"}
                xs={12} md={6}>
            Our software team are experts in writing code and software for the robot in order to operate all the
            individual motors and components on the robots.
            <br/>
            It is split into two sub-teams
            <ul>
              <li>
                <b>Robot:</b> Write all of the software necessary to make a fully functioning robot.
              </li>
              <li>
                <b>Scouting:</b> Does coding in a variety of different computer languages to create an app to aid
                scouting each season.
              </li>
            </ul>
          </Card>
          <Card img={secondary} className="team-card" header={"Secondary"}
                xs={12} md={6}>
            Our secondary team handles matters that do not fall into the other 3 teams, and
            includes <b>Awards</b> and <b>Strategy</b>:
            <ul>
              <li>
                <b>Awards:</b> Works towards completing our application for the prestigious <i>FIRST</i> Chairman's
                award.
              </li>
              <li>
                <b>Strategy:</b> Members work to create a playbook that encapsulates certain scenarios to help the drive
                team perform during a match.
              </li>
            </ul>
          </Card>
          <Card img={business} className="team-card" header={"Business"}
                xs={12} md={6}>
            The Business subteam involves a wide range of skill and is in charge of the majority of non-technical tasks.
            Throughout the year, they contact sponsors for fundraising, write grants, and manage money, as well as
            maintaining team image with social media posts, websites, videos, and graphics design.
            <br/>
            It is split into three sub-teams
            <ul>
              <li>
                <b>Finance:</b> Manages the flow of money in and out of the team and budgets appropriately.
              </li>
              <li>
                <b>Media:</b> Handles multiple responsibilities, such as social media, website, photography and
                filmmaking, branding, apparel, and marketing material.
              </li>
              <li>
                <b>Outreach:</b> Seeks to expand team relations from not just within the school, but to its area around
                it. They work on spreading robotics to those who are unfamiliar with it.
              </li>
            </ul>
          </Card>
        </Row>
      </div>
    )
  }
}

export default Team;
