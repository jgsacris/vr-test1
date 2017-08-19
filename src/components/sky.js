import React from 'react';
import {Entity} from 'aframe-react';

export function Sky(props){
    const src="#"+props.src;
    //const src = 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg';
    return (
        <Entity primitive='a-sky' id={props.id} radius={props.radius} src={src}/>
    )
}