import React, {Component} from 'react';

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
        <div className={"background"}>
          <div className={"img"}/>
          <div className={"gradient"}/>
        </div>
        <div className={"text"}>
          <h1>Contact Us</h1>
          <p></p>
        </div>
      </div>
    )
  }
}

export default Contact;