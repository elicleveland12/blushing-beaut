import React, {Component} from 'react';
// import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

// import ColorSelector from '../Components/ColorSelector';

export default class TumblerCustomizer extends Component {

  state = {
    topColorVisCoffee: "white",
    bottomColorVisCoffee: "white",
    topColorVisWine: "white",
    bottomColorVisWine: "white",
    side: "neither"
  }

  showColor = (side, color) => {
    switch (color) {
      case "blk":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "black"}) : this.setState({topColorVisWine: "black"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "black"}) : this.setState({bottomColorVisWine: "black"})
        break;
      case "blu":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "blue"}) : this.setState({topColorVisWine: "blue"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "blue"}) : this.setState({bottomColorVisWine: "blue"})
        break;
      case "brn":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "brown"}) : this.setState({topColorVisWine: "brown"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "brown"}) : this.setState({bottomColorVisWine: "brown"})
        break;
      case "brz":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "#cd7f32"}) : this.setState({topColorVisWine: "#cd7f32"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "#cd7f32"}) : this.setState({bottomColorVisWine: "#cd7f32"})
        break;
      case "cop":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "#b87333"}) : this.setState({topColorVisWine: "#b87333"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "#b87333"}) : this.setState({bottomColorVisWine: "#b87333"})
        break;
      case "gld":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "#ffd700"}) : this.setState({topColorVisWine: "#ffd700"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "#ffd700"}) : this.setState({bottomColorVisWine: "#ffd700"})
        break;
      case "gry":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "grey"}) : this.setState({topColorVisWine: "grey"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "grey"}) : this.setState({bottomColorVisWine: "grey"})
        break;
      case "grn":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "green"}) : this.setState({topColorVisWine: "green"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "green"}) : this.setState({bottomColorVisWine: "green"})
        break;
      case "orn":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "orange"}) : this.setState({topColorVisWine: "orange"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "orange"}) : this.setState({bottomColorVisWine: "orange"})
        break;
      case "pnk":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "pink"}) : this.setState({topColorVisWine: "pink"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "pink"}) : this.setState({bottomColorVisWine: "pink"})
        break;
      case "pur":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "purple"}) : this.setState({topColorVisWine: "purple"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "purple"}) : this.setState({bottomColorVisWine: "purple"})
        break;
      case "red":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "red"}) : this.setState({topColorVisWine: "red"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "red"}) : this.setState({bottomColorVisWine: "red"})
        break;
      case "rog":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "#b76e79"}) : this.setState({topColorVisWine: "#b76e79"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "#b76e79"}) : this.setState({bottomColorVisWine: "#b76e79"})
        break;
      case "slv":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "silver"}) : this.setState({topColorVisWine: "silver"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "silver"}) : this.setState({bottomColorVisWine: "silver"})
        break;
      case "wht":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "white"}) : this.setState({topColorVisWine: "white"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "white"}) : this.setState({bottomColorVisWine: "white"})
        break;
      case "ylw":
        side === "top" ? this.props.type === "coffee" ? this.setState({topColorVisCoffee: "yellow"}) : this.setState({topColorVisWine: "yellow"}) : this.props.type === "coffee" ? this.setState({bottomColorVisCoffee: "yellow"}) : this.setState({bottomColorVisWine: "yellow"})
        break;
      default:
        this.props.type === "coffee" ? this.setState({topColorVisCoffee: 'white', bottomColorVisCoffee: 'white'}) : this.setState({topColorVisWine: 'white', bottomColorVisWine: 'white'})
    }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.topColorCoffee !== this.props.topColorCoffee ||
        prevProps.topColorWine!== this.props.topColorWine||
        prevProps.bottomColorCoffee !== this.props.bottomColorCoffee ||
        prevProps.bottomColorWine !== this.props.bottomColorWine
      ) {
        if (this.props.type === "coffee") {
          this.showColor("top", this.props.topColorCoffee)
          this.showColor("bottom", this.props.bottomColorCoffee)
        } else {
          this.showColor("top", this.props.topColorWine)
          this.showColor("bottom", this.props.bottomColorWine)
        }
      }
  }

  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'row', width: '95%', height: 300, marginLeft: '1%', marginTop: -10, backgroundColor: 'white', borderLeft: '2px solid #6c5ce7', borderBottom: '2px solid #6c5ce7', borderRight: '2px solid #6c5ce7', borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
        <div style={{display: 'flex', width: '50%', flexDirection: 'column'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: -10, borderBottom: '1px solid blue'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: this.state.side === "top" ? "rgba(178, 190, 195,0.7)" : null}} onClick={()=>this.setState({side: this.state.side !== "top" ? "top" : "neither"})}>
              <h6>Top Color</h6>
              <div style={{marginLeft: '25%', marginTop: -10, width: 30, height: 30, borderRadius: 40, border: '2px solid #b2bec3', backgroundColor: this.props.type === "coffee" ? this.state.topColorVisCoffee : this.state.topColorVisWine, marginBottom: 5}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: this.state.side === "bottom" ? "rgba(178, 190, 195,0.7)" : null}} onClick={()=>this.setState({side: this.state.side !== "bottom" ? "bottom" : "neither"})}>
              <h6>Bottom Color</h6>
              <div style={{marginLeft: '25%', marginTop: -10, width: 30, height: 30, borderRadius: 40, border: '2px solid #b2bec3', backgroundColor: this.props.type === "coffee" ? this.state.bottomColorVisCoffee : this.state.bottomColorVisWine, marginBottom: 5}}/>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%'}}>
            {this.state.side !== "neither" ?
              <div style={{display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'black', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "blk", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Black</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'blue', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "blu", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Blue</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'brown', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "brn", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Brown</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: '#CD7F32', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "brz", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Bronze</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: '#B87333', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "cop", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Copper</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: '#D4AF37', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "gld", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Gold</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'grey', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "gry", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Grey</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'green', border: '1px solid #636e72', borderBottomLeftRadius: 5}} onClick={()=>this.props.selectColor(this.state.side, "grn", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Green</p>
                </div>
              </div>
            :
              null
            }
            {this.state.side !== "neither" ?
              <div style={{display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'orange', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "orn", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Orange</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'pink', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "pnk", this.props.type)}>
                  <p style={{fontSize: 10}}>Pink</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'purple', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "pur", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Purple</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'red', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "red", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Red</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: '#B76E79', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "rog", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Rose Gold</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'silver', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "slv", this.props.type)}>
                  <p style={{fontSize: 10}}>Silver</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'white', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "wht", this.props.type)}>
                  <p style={{fontSize: 10}}>White</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'yellow', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "ylw", this.props.type)}>
                  <p style={{fontSize: 10}}>Yellow</p>
                </div>
              </div>
            :
              null
            }
          </div>
        </div>
        <div style={{width: '50%', border: '1px solid blue'}}>
        </div>
        <HighlightOffIcon style={{position: 'relative', bottom: -270, color: '#6c5ce7', fontSize: 30}} onClick={()=>this.props.customizeCup("none")}/>
      </div>
    )
  }
}

/*
<div style={{display: 'flex', height: 600, alignItems: 'center'}}>
  <div style={{height: 450, width: 250}}>
    <div style={{position: 'absolute', height: this.props.coffee ? 225 : 150, width: 250, marginTop: this.props.coffee ? 0 : 75}} onMouseEnter={()=>this.setState({hoverTop: true})} onMouseLeave={()=>this.setState({hoverTop: false})}>
      {this.state.textLine1.length > 0 ? <h1 style={{marginTop: 40, color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine1}</h1> : null}
      {this.state.textLine2.length > 0 ? <h1 style={{marginTop: 20, color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine2}</h1> : null}
    </div>
    <div style={{position: 'absolute', height: this.props.coffee ? 225 : 150, width: 250, marginTop: 225}} onMouseEnter={()=>this.setState({hoverBottom: true})} onMouseLeave={()=>this.setState({hoverBottom: false})}>
      {this.state.textLine3.length > 0 ? <h1 style={{marginTop: this.props.coffee ? -10 : 20, color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine3}</h1> : null}
      {this.state.textLine4.length > 0 ? <h1 style={{marginTop: this.props.coffee ? 40 : 20, color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine4}</h1> : null}
    </div>
    {this.props.coffee ?
      <img src={require(`../images/coffee-color-selector/${this.state.topColor}-${this.state.bottomColor}-c.png`)} style={{width: 250, height: 450}} alt="coffee tumbler"/>
    :
      <img src={require(`../images/wine-color-selector/${this.state.topColor}-${this.state.bottomColor}-w.png`)} style={{width: 250, height: 300, marginTop: 75}} alt="wine tumbler"/>
    }
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
          <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine1.length > 10)} style={{marginTop: 15, width: 300}} value={this.state.textLine1} id="outlined-basic" label="Line 1" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine1: e.target.value})}/>
          <AddIcon style={{fontSize: 30, marginLeft: 25}} onClick={this.state.textInputNum === 1 ? ()=>this.setState({textInputNum: 2}) : null} />
        </div>
        {this.state.textInputNum > 1 ?
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine2.length > 10)} style={{marginTop: 15, width: 300}} value={this.state.textLine2} id="outlined-basic" label="Line 2" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine2: e.target.value})}/>
            <AddIcon style={{fontSize: 30, marginLeft: 25}} onClick={this.state.textInputNum === 2 ? ()=>this.setState({textInputNum: 3}) : null} />
          </div> : null}
        {this.state.textInputNum > 2 ?
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine3.length > 10)} style={{marginTop: 15, width: 300}} value={this.state.textLine3} id="outlined-basic" label="Line 3" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine3: e.target.value})}/>
            <AddIcon style={{fontSize: 30, marginLeft: 25}} onClick={this.state.textInputNum === 3 ? ()=>this.setState({textInputNum: 4}) : null} />
          </div> : null}
        {this.state.textInputNum === 4 ?
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine4.length > 10)} style={{marginTop: 15, width: 300, marginLeft: -50}} value={this.state.textLine4} id="outlined-basic" label="Line 4" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine4: e.target.value})}/>
          </div> : null}
        <FormControl variant="outlined">
          <InputLabel  id="outlined-basic" style={{marginTop: 20, marginLeft: 72}}>
            Font Color
          </InputLabel>
          <Select
            variant="outlined"
            labelId="outlined-basic"
            id="outlined-basic"
            value={this.state.textColor}
            onChange={(e)=>this.setState({textColor: e.target.value})}
            style={{marginTop: 20, width: 300, marginLeft: 72}}
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

*/
