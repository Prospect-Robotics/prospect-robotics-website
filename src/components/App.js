import React, {Component} from 'react';
import '../styles/App.css';
import Landing from "./Landing";
import Scroller from "./Scroller";

class App extends Component {
  render() {
    return (
      <Scroller pages={[
        {
          name: "Home", component: <Landing/>
        }, {
          name: "I'm", component: <div>I'm</div>
        }, {
          name: "Sam", component: <div>Sam</div>
        }
      ]}>
      </Scroller>
    );
  }
}

export default App;
