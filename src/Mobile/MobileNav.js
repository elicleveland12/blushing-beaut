import React, {Component} from 'react';
import '../App.css';

import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class TopNavBar extends Component {

  state = {
    expandMenu: false
  }

  render(){
    return(
      <div style={{display: 'flex', position: 'fixed', flexDirection: 'column', justifyContent: 'space-between', width: '100%', backgroundColor: '#dfe6e9', height: this.state.expandMenu ? 120 : 70, borderBottom: '2px solid #6c5ce7', top:0, left:0, right:0, zIndex: 999}}>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <img src={require(`../images/MockupLogo.gif.png`)} style={{width: 70, height: 50}} alt="BB logo"/>
            <h2 style={{color: '#6c5ce7'}}>Blushing Beaut</h2>
          </div>
          <div>
            {this.state.expandMenu ? <MenuOpenIcon style={{color: '#6c5ce7', fontSize: 30, marginRight: 5}} onClick={()=>this.setState({expandMenu: false})}/> : <MenuIcon style={{color: '#6c5ce7', fontSize: 30, marginRight: 5}} onClick={()=>this.setState({expandMenu: true})}/>}
          </div>
        </div>
        {this.state.expandMenu ?
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <InstagramIcon style={{color: '#6c5ce7', fontSize: 40}}/>
            <FacebookIcon style={{color: '#6c5ce7', fontSize: 40}}/>
            <MailOutlineIcon style={{color: '#6c5ce7', fontSize: 40}}/>
            <ShoppingCartIcon style={{color: '#6c5ce7', fontSize: 40}}/>
          </div>
        :
          null
        }
      </div>
    )
  }
}
