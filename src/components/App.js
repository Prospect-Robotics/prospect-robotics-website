import React, {Component} from 'react';
import '../styles/App.css';
import Landing from "./Landing";
import Scroller from "./Scroller";
import Members from "./Members";
import Team from "./Team";
import First from "./First";
import Contact from "./Contact";
import Sponsors from "./Sponsors";

class App extends Component {
  static scrollTo(id) {
    document.querySelector(`#${id}`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <Scroller pages={[
        {
          name: "Home", id: "landing", component: <Landing/>
        }, {
          name: "Members the Gearheads", id: "members", component: <Members/>
        }, {
          name: "Sponsors", id: "sponsors", component: <Sponsors/>
        }, {
          name: "Team Departments", id: "team", component: <Team/>
        }, {
          name: "About FIRST", id: "first", component: <First/>
        }, {
          name: "Contact Information", id: "contact", component: <Contact/>
        }
      ]}>
      </Scroller>
    );
  }
}

export default App;
