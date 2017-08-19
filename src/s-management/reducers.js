import {combineReducers} from 'redux';

import {LOAD_ASSETS, ASSETS_LOADED, CHANGE_SKY} from './actions';

const initState = {
    status:'idle',
    assets:null,
    sky:{
      id:'image-360',
      radius: 10,
      src:'empty'
    }
  }

function assetsManagement(state = initState, action){
    switch( action.type){
        case LOAD_ASSETS:
            return {...state, status:'loading'}
        case ASSETS_LOADED:
            return {...state, status:'idle', assets:action.assets}
        default:
            return state;
    }
}

function skyManagement(state = initState, action){
    switch(action.type){
        case CHANGE_SKY:
            return {...state, sky:{...state.sky, src:action.skySrc}}
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    assetsManagement,
    skyManagement
})

export default rootReducer;