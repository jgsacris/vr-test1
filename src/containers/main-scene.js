import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import { connect } from 'react-redux';
import {Assets} from '../components/assets';
import {Sky} from '../components/sky';
import {Thumbnails} from '../components/thumbnails';
import Camera from '../components/camera';
import Cursor from '../components/cursor';
import {changeSkyId} from '../s-management/actions';

class TheScene extends React.Component {

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState)
        let links =  document.querySelectorAll('.link');
        console.log("links", links);
        let props = this.props;
        for(let i = 0; i < links.length; ++i){
            let link = links[i];
            console.log("link", link);
            link.addEventListener('click', (ev)=>{
                console.log("click", ev.target.id);
                props.onThumbnailClick( ev.target.id);
            })
        }
    }

    render(){
        return (
            <Scene>
                <Camera><Cursor/></Camera>
                <Assets assets={this.props.assets}/>
                <Sky id={this.props.sky.id} radius={this.props.sky.radius} src={this.props.sky.src} />
                <Entity geometry={{primitive: 'box'}} material={{color:'red'}} position={{x:0, y:0, z:-5}}/>
                <Thumbnails thumbnails={this.props.thumbnails}/>
            </Scene>
        );
    }
    
}

const mapStateToProps = state =>{
    console.log("mainScene state = ", state);
    return{
        assets : state.assets,
        sky : state.sky,
        thumbnails: state.thumbnails
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onThumbnailClick: thumbId =>{
            dispatch(changeSkyId(thumbId))
        }
    }
}

const MainScene = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheScene);

export default MainScene