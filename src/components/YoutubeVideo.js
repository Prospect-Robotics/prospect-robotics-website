import React, {Component} from 'react';

export default class YoutubeVideo extends Component {
  container;

  constructor() {
    super();

    this.state = {
      youtubeSize: {
        height: 0,
        width: 0
      }
    }
  }

  onResize() {
    let width = this.container.offsetWidth;
    console.log(this.container.offsetWidth);
    this.setState({
      height: width * (9 / 16),
      width
    })
  }

  componentDidMount() {
    this.container = document.getElementById(this.props.container);
    this.onResize();
    window.addEventListener("resize", this.onResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize.bind(this));
  }

  render() {
    let {height, width} = this.state;

    return (
      <iframe style={{height, width}}
              src={this.props.videoUrl + "?rel=0"} frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
    )
  }
}