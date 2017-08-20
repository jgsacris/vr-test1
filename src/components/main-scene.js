import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import { connect } from 'react-redux';
import {Assets} from './assets';
import {Sky} from './sky';
import {Thumbnails} from './thumbnails';

const TheScene = ({assets, sky, thumbnails} ) =>{
    return (
        <Scene>
          <Assets assets={assets}/>
          <Sky id={sky.id} radius={sky.radius} src={sky.src} />
          <Entity geometry={{primitive: 'box'}} material={{color:'red'}} position={{x:0, y:0, z:-5}}/>
          <Thumbnails thumbnails={thumbnails}/>
        </Scene>
      );
}

const mapStateToProps = state =>{
    console.log("mainScene state = ", state);
    return{
        assets : state.assets,
        sky : state.sky,
        thumbnails: state.thumbnails
    }
}

const MainScene = connect(
    mapStateToProps
)(TheScene);

export default MainScene