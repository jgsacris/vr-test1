import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import {getAssets} from './services/gateway';
import {Assets} from './components/assets';
import {Sky} from './components/sky';

class App extends Component {

  constructor(){
    super();

    this.state = {
      assets:null,
      sky:{
        id:'image-360',
        radius: 10,
        src:'empty'
      }
    }
  }

  
  componentDidMount(){
    getAssets().then( assets=>{
      console.log('assets', assets);
      this.setState({assets: assets});
      this.setState({sky:{
        id:'image-360',
        radius: 10,
        src:'city'
      }});
    })
  }
  render() {
    return (
      <Scene>
        <Assets assets={this.state.assets}/>
        <Sky id={this.state.sky.id} radius={this.state.sky.radius} src={this.state.sky.src} />
        <Entity geometry={{primitive: 'box'}} material={{color:'red'}} position={{x:0, y:0, z:-5}}/>
      </Scene>
    );
  }

}

export default App;
