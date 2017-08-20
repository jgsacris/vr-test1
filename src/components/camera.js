import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
    <Entity>
        <Entity primitive="a-camera" look-controls wasd-controls {...props}/>
    </Entity>
)