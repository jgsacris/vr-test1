import 'aframe';
import 'aframe-layout-component';
import 'aframe-event-set-component';
import '../acomponents/set-image';
import React from 'react';
import PropTypes from 'prop-types';
import { Entity } from 'aframe-react';


export function Thumbnails(props) {
    let key = 0;
    const links = props.thumbnails.map((thumbnail) => {
        key++;
        return (<Entity class="link"
            id={thumbnail.id}
            key={key}
            geometry={{ primitive: "plane", height: 1, width: 1 }}
            material={{ shader: "flat", src: "#" + thumbnail.srcId }}
            event-set__1="_event: mousedown; scale: 1 1 1"
            event-set__2="_event: mouseup; scale: 1.2 1.2 1"
            event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
            event-set__4="_event: mouseleave; scale: 1 1 1"
            set-image={"on: click; target: #image-360; src: #"+thumbnail.imgId}
        />
        )
    })

    return (
        <Entity id="links"
            layout="layout: line; margin: 1.5" position={{ x: -3, y: -1, z: -4 }}>
            {links}
        </Entity>
    )
}
