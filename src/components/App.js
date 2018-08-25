import React, {Component} from 'react';
import '../styles/App.css';
import Landing from "./Landing";
import Scroller from "./Scroller";
import MeetTheGearheads from "./MeetTheGearheads";

class App extends Component {
  render() {
    return (
      <Scroller pages={[
        {
          name: "Home", component: <Landing/>
        }, {
          name: "Meat the Gearheads", anchor: 'meet', component: <MeetTheGearheads/>
        }, {
          name: "Sponsers", anchor: 'sponsers', component: <div>I'm</div>
        }, {
          name: "Team Departments", anchor: 'team', component: <div>I'm</div>
        }, {
          name: "About FIRST", anchor: 'first', component: <div>I'm</div>
        }, {
          name: "Contact Information", anchor: 'contact', component: <div></div>
        }
      ]}>
      </Scroller>
    );
  }
}

export default App;
