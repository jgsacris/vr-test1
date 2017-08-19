import React from 'react';
import PropTypes from 'prop-types';
import {Entity} from 'aframe-react';

export function Sky({src, id, radius}){
    src="#" + src;
    //const src = 'https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg';
    return (
        <Entity primitive='a-sky' id={id} radius={radius} src={src}/>
    )
}

Sky.propTypes = {
    src : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    radius : PropTypes.number.isRequired
}