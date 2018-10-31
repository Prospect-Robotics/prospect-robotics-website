import React, {Component} from 'react';

import '../styles/first.css';

import firstLogo from '../images/FIRST_logo.png';

class First extends Component {
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
      <div id={"first"} className={this.state.visible ? "visible" : ""}>
        <div className={"first-content"}>
          <img src={firstLogo} alt=""/>
          <h3>What is FIRST Robotics Competition?</h3>
          <p>
            “FIRST® is the world’s leading child-serving nonprofit advancing science, technology, engineering, and math (STEM).
            For 30 years, FIRST has been inspiring innovation and leadership by teaching STEM, teamwork, and
            problem-solving skills through engaging, hands-on robotics challenges developed to ignite curiosity and passion in students in grades K-12.”
          </p>
          <a href="https://www.firstinspires.org/robotics/frc">click here to learn more</a>
        </div>
      </div>
    )
  }
}

export default First;