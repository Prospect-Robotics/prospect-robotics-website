import React, {Component} from 'react';

import '../styles/scroller.css';
import logo from '../images/logo.png';

// noinspection SpellCheckingInspection
export default class Scroller extends Component {

  constructor() {
    super();

    this.state = {
      currentPage: 0
    }
  }

  previousScrollY = 0;
  handleScroll() {

    this.setState({
      currentPage: Math.floor(window.scrollY / window.innerHeight)
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {
    return (
      <div>
        {this.props.pages.map((page, i) => (
          <div className={"page"} key={i}>
            {page.component}
          </div>
        ))}
        <div className={"page-location"}>
          <img src={logo} alt=""/>
          {this.props.pages.map((page, i) => (
            <div className={"identifier " + (this.state.currentPage === i ? "current" : "")} key={i}>
              <div className={"circle"}/>
              <div className={"name"}>{page.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}