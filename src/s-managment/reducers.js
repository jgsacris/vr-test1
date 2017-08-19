import {combineReducers} from 'redux';

import {LOAD_ASSETS, ASSSETS_LOADED, CHANGE_SKY} from './actions';

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
        case ASSSETS_LOADED:
            return {...state, status:'idle', assets:action.assets}
    }
}

function skyManagement(state = initState, action){
    switch(action.type){
        case CHANGE_SKY:
            return {...state, sky:{...state.sky, src:action.skySrc}}
    }
}

const rootReducer = combineReducers({
    assetsManagement,
    skyManagement
})