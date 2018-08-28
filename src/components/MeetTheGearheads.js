import React, {Component} from 'react';

import '../styles/meet.css';

import meet from '../images/meet.jpg';
import jesse from '../images/jesse.jpg';
import kyle from '../images/kyle.jpg';
import siddharth from '../images/siddharth.jpg';
import annie from '../images/annie.jpg';

import Portrait from "./Portrait";

class MeetTheGearheads extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', function() {
      if (Math.floor((window.scrollY + (window.innerHeight / 2)) / window.innerHeight) >= 1) {
        this.setState({
          visible: true
        })
      }
    }.bind(this));
  }

  render() {
    return (
      <div id={"meet"} className={this.state.visible ? "visible" : ""}>
        <div className={"background"}>
          <div className={"img"}/>
          <div className={"gradient"}/>
        </div>
        <div className={"text"}>
          <h1>Meet the Gearheads</h1>
          <div className={"portraits"}>
            <Portrait imageSrc={jesse} name={"Jesse Dendy"} description={"President of Prospect Robotics"}/>
            <Portrait imageSrc={kyle} name={"Kyle Schumacher"} description={"Vice-President of Prospect Robotics"}/>
            <Portrait imageSrc={siddharth} name={"Siddharth Singh"} description={"Secretary of Prospect Robotics"}/>
            <Portrait imageSrc={annie} name={"Annie Lee"} description={"Treasurer of Prospect Robotics"}/>
          </div>
        </div>
      </div>
    )
  }
}

export default MeetTheGearheads;