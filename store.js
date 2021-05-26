import {combineReducers, createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import meteoReducer from './reducers/meteoReducer';
import forecastReducer from './reducers/forecastReducer';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const middleware = [
    thunk
];
let store = createStore(combineReducers({meteoReducer, forecastReducer}),
    composeEnhancers(
        applyMiddleware(...middleware),
    )
);
export default store;

// import {createStore, applyMiddleware, combineReducers} from 'redux';
// import thunk from 'redux-thunk';
// import meteoReducer from './reducers/meteoReducer';

// export default createStore (applyMiddleware(thunk), meteoReducer);
