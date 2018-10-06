import React, {Component} from 'react';

import SponsorImages from '../sponsors.json';
import '../styles/sponsors.css';

class Sponsors extends Component {
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
      <div id={"sponsors"} className={this.state.visible ? "visible" : ""}>
        <div className={"sponsors-body"}>
          {SponsorImages.map((sponsorRow, i) => (
            <div className={"sponsors-row"} key={i}>
              {sponsorRow.map((sponsorImg, i) => (
                <div>
                  <img src={"/sponsors/" + sponsorImg} key={i}/>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Sponsors;