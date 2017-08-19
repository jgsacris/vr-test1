import React from 'react';
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
//import App from './App';
import MainScene from './components/main-scene';
import rootReducer from './s-management/reducers';
import {fetchAssets} from './s-management/actions';


import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

const loggerMiddleware = createLogger();

let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
store.dispatch(fetchAssets());

ReactDOM.render(
    <Provider store={store}>
        <MainScene/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
