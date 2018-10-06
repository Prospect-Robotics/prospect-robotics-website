import React, {Component} from 'react';
import '../styles/App.css';
import Landing from "./Landing";
import Scroller from "./Scroller";
import MeetTheGearheads from "./MeetTheGearheads";
import Team from "./Team";
import First from "./First";
import Contact from "./Contact";
import Sponsors from "./Sponsors";

class App extends Component {
  render() {
    return (
      <Scroller pages={[
        {
          name: "Home", component: <Landing/>
        }, {
          name: "Meat the Gearheads", anchor: 'meet', component: <MeetTheGearheads/>
        }, {
          name: "Sponsors", anchor: 'sponsors', component: <Sponsors/>
        }, {
          name: "Team Departments", anchor: 'team', component: <Team/>
        }, {
          name: "About FIRST", anchor: 'first', component: <First/>
        }, {
          name: "Contact Information", anchor: 'contact', component: <Contact/>
        }
      ]}>
      </Scroller>
    );
  }
}

export default App;
