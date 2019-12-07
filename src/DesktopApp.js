import React, {Component} from 'react';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import TopNavBar from './HomeScreen/TopNavBar';
import SlideShow from './HomeScreen/SlideShow';
import IntroBlurb from './HomeScreen/IntroBlurb';
import CupType from './HomeScreen/CupType';

import TumblerCustomizer from './Customizer/TumblerCustomizer';


export default class App extends Component {

  state = {
    customizeCoffee: false,
    customizeWine: false
  }

  customizeCup = async(cupType) => {
    if (cupType === "coffee") {
      await this.setState({customizeCoffee: true, customizeWine: false})
      scrollToComponent(this.Coffee, {offset: -100, align: 'middle', duration: 1000, ease:'inExpo'})
    } else {
      await this.setState({customizeCoffee: false, customizeWine: true})
      scrollToComponent(this.Wine, {offset: -100, align: 'middle', duration: 1000, ease:'inExpo'})
    }
  }

  render(){
    return(
      <div className="app-container-home">
        <TopNavBar />
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <SlideShow />
            <IntroBlurb/>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <CupType customizeCup={this.customizeCup}/>
          </div>
        </div>
        {this.state.customizeCoffee ?
          <div ref={(section) => { this.Coffee = section; }} style={{width: '90%', backgroundColor: 'white', border: '3px solid #6c5ce7', borderRadius: 10, marginLeft: '5%', marginTop: 20}}>
            <HighlightOffIcon className="hover-class" style={{top: 8, right: 8, color: '#6c5ce7', fontSize: 40}} onClick={()=>this.setState({customizeCoffee: false, customizeWine: false})}/>
            <TumblerCustomizer coffee={true}/>
          </div>
        :
          null
        }
        {this.state.customizeWine ?
          <div ref={(section) => { this.Wine = section; }} style={{width: '90%', backgroundColor: 'white', border: '3px solid #6c5ce7', borderRadius: 10, marginLeft: '5%', marginTop: 20}}>
            <HighlightOffIcon className="hover-class" style={{top: 8, right: 8, color: '#6c5ce7', fontSize: 40}} onClick={()=>this.setState({customizeCoffee: false, customizeWine: false})}/>
            <TumblerCustomizer coffee={false}/>
          </div>
        :
          null
        }
      </div>
    )
  }
}
