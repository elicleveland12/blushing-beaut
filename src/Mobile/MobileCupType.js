import React, {Component} from 'react';
import '../App.css';

import MobileTumblerCustomizer from './MobileTumblerCustomizer'

export default class MobileCupType extends Component {

  state = {
    topColorCoffee: "wht",
    bottomColorCoffee: "wht",
    topColorWine: "wht",
    bottomColorWine: "wht",
    textLine1: "",
    textLine2: "",
    textLine3: "",
    textLine4: "",
    textColor: "",
    textInputNum: 1
  }

  selectColor = (side, color, type) => {
    if (side === "top") {
      if (type === "coffee") {
        this.setState({topColorCoffee: color})
      } else {
        this.setState({topColorWine: color})
      }
    } else {
      if (type === "coffee") {
        this.setState({bottomColorCoffee: color})
      } else {
        this.setState({bottomColorWine: color})
      }
    }
  }

  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'center'}}>
        <div className="mobile-cup-check" onClick={()=>this.props.customizeCup("coffee")}>
          <div style={{width: '50%'}}>
            <img src={require(`../images/coffee-color-selector/${this.state.topColorCoffee}-${this.state.bottomColorCoffee}-c.png`)} alt="coffee tumbler" height="200px" style={{marginTop: 5, marginLeft: '-35%'}}/>
          </div>
          <div style={{width: '50%', marginLeft: -5, alignItems: 'center'}}>
            <h3>Shop Customizable Coffee Tumblers</h3>
            <h4>20 oz</h4>
            <h4>Stainless Steel</h4>
            <h4>Custom Glitter and Decal</h4>
          </div>
        </div>
        {this.props.type === "coffee" ?
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <MobileTumblerCustomizer type={this.props.type} customizeCup={this.props.customizeCup} topColorCoffee={this.state.topColorCoffee} bottomColorCoffee={this.state.bottomColorCoffee} selectColor={this.selectColor} />
          </div>
        :
          null
        }
        <div className="mobile-cup-check" onClick={()=>this.props.customizeCup("wine")}>
          <div style={{width: '50%'}}>
            <img src={require(`../images/wine-color-selector/${this.state.topColorWine}-${this.state.bottomColorWine}-w.png`)} alt="wine tumbler" height="150px" style={{marginTop: 35, marginLeft: '-25%'}}/>
          </div>
          <div style={{width: '50%', marginLeft: -5, alignItems: 'center'}}>
            <h3>Shop Customizable Wine Tumblers</h3>
            <h4>10 oz</h4>
            <h4>Stainless Steel</h4>
            <h4>Custom Glitter and Decal</h4>
          </div>
        </div>
        {this.props.type === "wine" ?
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <MobileTumblerCustomizer type={this.props.type} customizeCup={this.props.customizeCup} selectColor={this.selectColor} topColorWine={this.state.topColorWine} bottomColorWine={this.state.bottomColorWine} />
          </div>
        :
          null
        }
      </div>
    )
  }
}
