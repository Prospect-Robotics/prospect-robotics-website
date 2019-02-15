import React, {Component} from 'react';

import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

import '../styles/contact.css'

class Contact extends Component {
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
      <div id={"contact"} className={this.state.visible ? "visible" : ""}>
        <h1>Contact Us</h1>
        <p style={{marginBottom: 25}}>You can contact us at <a style={{color: "white"}}
                                                               href="mailto:prospectrobotics2813@gmail.com">prospectrobotics2813@gmail.com</a> or
          at our social media handles.</p>
        <a href="https://www.facebook.com/team2813/" target={"_blank"} style={{marginRight: 25}}>
          <img src={facebook} alt="Facebook" height={100}/>
        </a>
        <a href="https://www.instagram.com/frc2813/" target={"_blank"}>
          <img src={instagram} alt="instagram" height={100}/>
        </a>
        <a href="https://twitter.com/frc2813" target={"_blank"}>
          <img src={twitter} alt="twitter" height={100}/>
        </a>
      </div>
    )
  }
}

export default Contact;