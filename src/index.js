import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/button.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import config from "./config";

// window.screen.orientation.lock("portrait-primary");

export const GlobalContext = React.createContext({});

fetch(config.server + '/memberImages')
  .then(response => {
    return response.json();
  })
  .then(memberImages => {
    ReactDOM.render((
      <GlobalContext.Provider value={{memberImages}}>
        <App/>
      </GlobalContext.Provider>), document.getElementById('root'));
    registerServiceWorker();
  });
