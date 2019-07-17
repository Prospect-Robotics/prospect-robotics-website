import React, {Component} from 'react';
import Landing from "../pages/Landing";
import Scroller from "./Scroller";
import Members from "../pages/Members";
import Team from "../pages/Team";
import First from "../pages/First";
import Contact from "../pages/Contact";
import Sponsors from "../pages/Sponsors";
import Info from "../pages/Info";

class App extends Component {
  static scrollTo(id) {
    document.querySelector(`#${id}-page`).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <Scroller pages={[
        {
          name: "Home", id: "landing", component: <Landing/>
        },{
          name: "Blog", id: "info", hide: true, component: <Info/>
        }, {
          name: "Meet the Gearheads", id: "members", component: <Members/>
        }, {
          name: "Sponsors", id: "sponsors", component: <Sponsors/>
        }, {
          name: "Team Departments", id: "teams", component: <Team/>
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
