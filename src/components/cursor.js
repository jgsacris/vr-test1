import 'aframe-animation-component';
import {Entity} from 'aframe-react';
import React from 'react';

export default props => {
    const geometry ={
        primitive : 'ring',
        radiusInner : 0.01,
        radiusOuter : 0.016
    };

    const material = {
        color : props.color,
        shader : 'flat',
        opacity : props.opacity || 0.9,
        transparent : true
    };

    return (
        <Entity  cursor={{fuse: true, fuseTimeout: 500}}  geometry={geometry} material={material} position="0 0 -1"
        >
        <a-animation begin="click" easing="ease-in" attribute="scale"
               fill="backwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
  <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
               fill="forwards" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
        </Entity>
    )
}



