import React, {Component} from 'react';
import '../App.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export default class TopNavBar extends Component {

  state = {
  }

  render(){
    return(
      <div className="top-nav-bar">
        <div className="hover-class" style={{display: 'flex', flexDirection: 'row', paddingLeft: 10, alignItems: 'center'}}>
          <img src={require(`../images/MockupLogo.gif.png`)} style={{width: 90, height: 75}} alt="BB logo"/>
          <h1 className="hover-class" style={{color: '#6c5ce7'}}>Blushing Beaut</h1>
        </div>
        <div className="hover-class" style={{display: 'flex', flexDirection: 'row', paddingRight: 10, alignItems: 'center'}}>
          <InstagramIcon style={{fontSize: 40, color: '#6c5ce7'}}/>
          <FacebookIcon style={{fontSize: 40, color: '#6c5ce7', marginLeft: 10}} />
        </div>
      </div>
    )
  }
}
