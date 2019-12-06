import React, {Component} from 'react';
import './App.css';

import TopNavBar from './HomeScreen/TopNavBar';
import SlideShow from './HomeScreen/SlideShow';
import CupType from './HomeScreen/CupType';

import CoffeeCustomizer from './Coffee/CoffeeCustomizer';

export default class App extends Component {

  state = {
    customizeCoffee: true,
    customizeWine: false
  }

  customizeCup = (cupType) => {
    if (cupType === "coffee") {
      this.setState({customizeCoffee: true, customizeWine: false})
    } else {
      this.setState({customizeCoffee: false, customizeWine: true})
    }
  }

  render(){
    return(
      <div className="app-container-home">
        <TopNavBar />
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <SlideShow />
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <CupType customizeCup={this.customizeCup}/>
          </div>
        </div>
        {this.state.customizeCoffee ?
          <div style={{width: '90%', backgroundColor: 'white', border: '3px solid #6c5ce7', borderRadius: 10, marginLeft: '5%', marginTop: 20}}>
            <CoffeeCustomizer />
          </div>
        :
          null
        }
      </div>
    )
  }
}
