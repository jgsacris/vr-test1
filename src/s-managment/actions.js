import {getAssetsService} from '../services/gateway';

export const LOAD_ASSETS = 'LOAD_ASSETS';

function loadAssets(){
    return {
        type: LOAD_ASSETS
    }
}

export const ASSETS_LOADED = 'ASSETS_LOADED';

function assetsLoaded(assets){
    return {
        type: ASSETS_LOADED,
        assets
    }
}

export const CHANGE_SKY = 'CHANGE_SKY';

export function changeSky(skySrc){
    return{
        type: CHANGE_SKY,
        skySrc
    }
}

export function fetchAssets(){
    return function (dispatch){
        dispatch(loadAssets());

        return getAssetsService()
        .then(response =>{
            dispatch(assetsLoaded(response));
            const firstSky = response[0].id;
            console.log('firstSky', firstSky);
            dispatch(changeSky(firstSky));
        })
    }
}