import React, {Component} from 'react';
import '../styles/App.css';
import Landing from "./Landing";
import Scroller from "./Scroller";
import Meet from "./Meet";
import Team from "./Team";
import First from "./First";
import Contact from "./Contact";
import Sponsors from "./Sponsors";

class App extends Component {

  render() {
    return (
      <Scroller pages={[
        {
          name: "Home", id: "landing", component: <Landing/>
        }, {
          name: "Meet the Gearheads", id: "meet", anchor: 'meet', component: <Meet/>
        }, {
          name: "Sponsors", id: "sponsors", anchor: 'sponsors', component: <Sponsors/>
        }, {
          name: "Team Departments", id: "team", anchor: 'team', component: <Team/>
        }, {
          name: "About FIRST", id: "first", anchor: 'first', component: <First/>
        }, {
          name: "Contact Information", id: "contact", anchor: 'contact', component: <Contact/>
        }
      ]}>
      </Scroller>
    );
  }
}

export default App;
