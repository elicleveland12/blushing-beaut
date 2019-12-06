import React, {Component} from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';


import ColorSelector from '../Components/ColorSelector';

export default class CoffeeCustomizer extends Component {


  state = {
    hoverTop: false,
    hoverBottom: false,
    topColor: "wht",
    bottomColor: "wht",
    textLine1: "",
    textLine2: "",
    textLine3: "",
    textLine4: "",
    textColor: "",
    textInputNum: 1
  }

  renderColors = (side, color) => {
    if (side === "top") {
      this.setState({topColor: color})
    } else {
      this.setState({bottomColor: color})
    }
  }

  render(){
    return(
      <div className="app-container">
        <div style={{display: 'flex', height: 600, alignItems: 'center'}}>
          <div style={{height: 450, width: 250}}>
            <div style={{position: 'absolute', height: 225, width: 250}} onMouseEnter={()=>this.setState({hoverTop: true})} onMouseLeave={()=>this.setState({hoverTop: false})}>
              {this.state.textLine1.length > 0 ? <h1 style={{marginTop: 70, color: this.state.textColor === "" ? 'black' : this.state.textColor}}>{this.state.textLine1}</h1> : null}
              {this.state.textLine2.length > 0 ? <h1 style={{marginTop: 40, color: this.state.textColor === "" ? 'black' : this.state.textColor}}>{this.state.textLine2}</h1> : null}
            </div>
            <div style={{position: 'absolute', height: 225, width: 250, marginTop: 225}} onMouseEnter={()=>this.setState({hoverBottom: true})} onMouseLeave={()=>this.setState({hoverBottom: false})}>
              {this.state.textLine3.length > 0 ? <h1 style={{marginTop: -10, color: this.state.textColor === "" ? 'black' : this.state.textColor}}>{this.state.textLine3}</h1> : null}
              {this.state.textLine4.length > 0 ? <h1 style={{marginTop: 40, color: this.state.textColor === "" ? 'black' : this.state.textColor}}>{this.state.textLine4}</h1> : null}
            </div>
            <img src={require(`../images/coffee-color-selector/${this.state.topColor}-${this.state.bottomColor}-c.png`)} style={{width: 250, height: 450}} alt="coffee tumbler"/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', height: 450, width: 500, alignContent: 'space-between'}}>
            {this.state.hoverTop ?
              <div style={{height: 200, marginLeft: -60}} onMouseEnter={()=>this.setState({hoverTop: true})} onMouseLeave={()=>this.setState({hoverTop: false})}>
                <ColorSelector renderColors={this.renderColors} side={"top"} />
              </div>
            :
              null
            }
            {this.state.hoverBottom ?
              <div style={{height: 200, marginTop: 225, marginLeft: -60}} onMouseEnter={()=>this.setState({hoverBottom: true})} onMouseLeave={()=>this.setState({hoverBottom: false})}>
                <ColorSelector renderColors={this.renderColors} side={"bottom"} />
              </div>
            :
              null
            }
            {this.state.hoverTop || this.state.hoverBottom ?
              null
            :
              <div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TextField style={{marginTop: 30, width: 300}} value={this.state.textLine1} id="outlined-basic" label="Line 1" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine1: e.target.value})}/>
                  <AddIcon style={{fontSize: 30, marginTop: 30, marginLeft: 25}} onClick={this.state.textInputNum === 1 ? ()=>this.setState({textInputNum: 2}) : null} />
                </div>
                {this.state.textInputNum > 1 ?
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextField style={{marginTop: 30, width: 300}} value={this.state.textLine2} id="outlined-basic" label="Line 2" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine2: e.target.value})}/>
                    <AddIcon style={{fontSize: 30, marginTop: 30, marginLeft: 25}} onClick={this.state.textInputNum === 2 ? ()=>this.setState({textInputNum: 3}) : null} />
                  </div> : null}
                {this.state.textInputNum > 2 ?
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextField style={{marginTop: 30, width: 300}} value={this.state.textLine3} id="outlined-basic" label="Line 3" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine3: e.target.value})}/>
                    <AddIcon style={{fontSize: 30, marginTop: 30, marginLeft: 25}} onClick={this.state.textInputNum === 3 ? ()=>this.setState({textInputNum: 4}) : null} />
                  </div> : null}
                {this.state.textInputNum === 4 ?
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextField style={{marginTop: 30, width: 300, marginLeft: -50}} value={this.state.textLine4} id="outlined-basic" label="Line 4" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine4: e.target.value})}/>
                  </div> : null}
                <FormControl variant="outlined">
                  <InputLabel  id="outlined-basic" style={{marginTop: 35, marginLeft: -50}}>
                    Font Color
                  </InputLabel>
                  <Select
                    variant="outlined"
                    labelId="outlined-basic"
                    id="outlined-basic"
                    value={this.state.textColor}
                    onChange={(e)=>this.setState({textColor: e.target.value})}
                    style={{marginTop: 35, width: 300, marginLeft: -50}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"black"}>Black</MenuItem>
                    <MenuItem value={"blue"}>Blue</MenuItem>
                    <MenuItem value={"brown"}>Brown</MenuItem>
                    <MenuItem value={"#CD7F32"}>Bronze</MenuItem>
                    <MenuItem value={"#B87333"}>Copper</MenuItem>
                    <MenuItem value={"#D4AF37"}>Gold</MenuItem>
                    <MenuItem value={"grey"}>Grey</MenuItem>
                    <MenuItem value={"green"}>Green</MenuItem>
                    <MenuItem value={"orange"}>Orange</MenuItem>
                    <MenuItem value={"pink"}>Pink</MenuItem>
                    <MenuItem value={"purple"}>Purple</MenuItem>
                    <MenuItem value={"red"}>Red</MenuItem>
                    <MenuItem value={"#B76E79"}>Rose Gold</MenuItem>
                    <MenuItem value={"silver"}>Silver</MenuItem>
                    <MenuItem value={"white"}>White</MenuItem>
                    <MenuItem value={"yellow"}>Yellow</MenuItem>
                  </Select>
                </FormControl>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
