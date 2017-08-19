import React from 'react';

export function Assets(props){
    const assets = props.assets;
    console.log('props', props);
    if(!assets || !assets.images){
        return (<div> Loading...</div>);
    }
    let i = 0;
    const imgAssets =  assets.images.map((img)=>{
        i++;
        return (<img id={img.id} src={img.src} key={i} crossOrigin="anonymous"/>);
    });
    console.log('imgAssets', imgAssets);
    return (
        <a-assets>
           {imgAssets}
        </a-assets>
    )
}

