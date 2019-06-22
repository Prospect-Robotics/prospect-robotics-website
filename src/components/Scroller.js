import React, {Component} from 'react';

import '../styles/scroller.css';
import logo from '../images/logo.svg';
import App from "./App";

// noinspection SpellCheckingInspection
export default class Scroller extends Component {

  constructor(props) {
    super(props);

    this.pageTopDistances = [];

    this.state = {
      currentPage: 0
    }
  }

  previousScrollY = 0;

  handleScroll() {
    // console.log(window.scrollY, this.pageTopDistances);

    let length = this.pageTopDistances.length;
    for (let i = 0; i < length; i++) {
      if (window.scrollY >= this.pageTopDistances[length - 1] - 64) {
        this.setState({
          currentPage: length - 1
        });
        break;
      } else if (window.scrollY <= this.pageTopDistances[i] - 64) {
        this.setState({
          currentPage: i - 1
        });
        break;
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScroll.bind(this));
  }

  addTopDistance(ref, i) {
    if (ref != null) {
      let rect = ref.getBoundingClientRect();
      let docEl = document.documentElement;
      this.pageTopDistances[i] = rect.top + (window.pageYOffset || docEl.scrollTop || 0);
    }
  }

  render() {
    // console.log(this.state.currentPage);
    let hidePageIndex = 0;
    for (let i = 0; i < this.props.pages.length; i++)
      if (this.props.pages[i].hide)
        hidePageIndex = i;

    return (
      <div>
        <div className={"page-location " + (this.state.currentPage <= hidePageIndex ? "hidden" : "")}>
          <img src={logo} alt=""/>
          {this.props.pages.map((page, i) => {
            if (i !== 0)
              return (<div className={"identifier " + (this.state.currentPage === i ? "current" : "")} key={i} onClick={() => App.scrollTo(page.id)}>
                <div className={"circle"}/>
                <div className={"name"}>{page.name}</div>
              </div>);
            return null;
          })}
        </div>
        {this.props.pages.map((page, i) => {

            return <div key={i} className="page" id={page.id + "-page"} ref={(ref) => {
              this.addTopDistance(ref, i)
            }}>{page.component}</div>
          }
        )}
      </div>
    );
  }
}
