import {combineReducers} from 'redux';
import {find, propEq} from 'ramda';

import {LOAD_ASSETS, ASSETS_LOADED, CHANGE_SKY, CHANGE_SKY_ID} from './actions';

const initState = {
    status:'idle',
    assets:[],
    thumbnails: [],
    sky:{
      id:'image-360',
      radius: 10,
      src:'empty'
    }
  }

function statusManager(state = initState.status, action){
    switch (action.type){
        case LOAD_ASSETS:
            return 'loading';
        case ASSETS_LOADED:
            return 'idle'
        default:
            return state;
    }
}

function assetsManagement(state = initState.assets, action){
    switch( action.type){
        case ASSETS_LOADED:
            return action.response.assets;
        default:
            return state;
    }
}

function thumbnailsManagement(state = initState.thumbnails, action){
    switch( action.type){
        case ASSETS_LOADED:
            return action.response.thumbnails;
        default:
            return state;
    }
}

function skyManagement(sky = initState.sky, thumbnails = initState.thumbnails,  action){
    switch(action.type){
        case CHANGE_SKY:
            return {...sky, src:action.skySrc}
        case CHANGE_SKY_ID:
            let id = action.thumbnailId;
            let cThumb = find(propEq('id', id))(thumbnails);
            console.log("id", id, thumbnails, cThumb);
            return {...sky, src:cThumb.imgId};
        default:
            return sky;
    }
}

function rootReducer(state = initState, action){
    return {
        status: statusManager(state.status, action),
        assets: assetsManagement(state.assets, action),
        thumbnails: thumbnailsManagement(state.thumbnails, action),
        sky: skyManagement(state.sky, state.thumbnails, action)
    }
}
/*
const rootReducer = combineReducers({
    status:statusManager,
    assets: assetsManagement,
    thumbnails: thumbnailsManagement,
    sky: skyManagement
})
*/

export default rootReducer;