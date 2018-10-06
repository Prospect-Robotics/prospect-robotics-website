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
            Combining the excitement of sport with the rigors of science and technology.
            We call FIRST Robotics Competition the ultimate Sport for the Mind.
            High-school student participants call it “the hardest fun you’ll ever have.”
          </p>
          <a href="https://www.firstinspires.org/robotics/frc">click here to learn more</a>
        </div>
      </div>
    )
  }
}

export default First;