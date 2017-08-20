import 'aframe';
import 'aframe-layout-component';
import React from 'react';
import PropTypes from 'prop-types';
import {Entity} from 'aframe-react';


export function Thumbnails (props){
    let key = 0;
    const links = props.thumbnails.map((thumbnail) =>{
        key++;
        return(<Entity class="link"
            id={thumbnail.id}
            key={key}
            geometry={{primitive:"plane", height:1, width:1}}
            material={{shader: "flat", src: "#"+thumbnail.srcId}}/>
        )
    })

    return (
        <Entity id="links" 
        layout="layout: line; margin: 1.5" position={{x:-3, y:-1, z:-4}}>
            {links}
        </Entity>
    )
}

Thumbnails.propTypes = {
    thumbnails: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            srcId: PropTypes.string.isRequired
        })
    )
}