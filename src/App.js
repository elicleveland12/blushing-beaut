import React, {Component} from 'react';
import './App.css';

import DesktopApp from './DesktopApp';
import MobileApp from './MobileApp';

export default class App extends Component {

  state = {
    desktop: true
  }

  render(){
    return(
      <div className="app-container-home">
        {this.state.desktop ?
          <DesktopApp />
        :
          <MobileApp />
        }
      </div>
    )
  }
}
