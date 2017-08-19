import {combineReducers} from 'redux';

import {LOAD_ASSETS, ASSETS_LOADED, CHANGE_SKY} from './actions';

const initState = {
    status:'idle',
    assets:[],
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
            return action.assets;
        default:
            return state;
    }
}

function skyManagement(state = initState.sky, action){
    switch(action.type){
        case CHANGE_SKY:
            return {...state, src:action.skySrc}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    status:statusManager,
    assets: assetsManagement,
    sky: skyManagement
})

export default rootReducer;