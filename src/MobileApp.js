import React, {Component} from 'react';
import './App.css';

import MobileNav from './Mobile/MobileNav';
import SlideShow from './Components/SlideShow';
import MobileCupType from './Mobile/MobileCupType';

export default class MobileApp extends Component {

  state = {
    customize: "none"
  }

  customizeCup = (type) => {
    this.setState({customize: type})
  }

  render(){
    return(
      <div className="app-container">
        <MobileNav />
        <SlideShow mobile={this.props.mobile} />
        <MobileCupType customizeCup={this.customizeCup} type={this.state.customize} />
      </div>
    )
  }
}
