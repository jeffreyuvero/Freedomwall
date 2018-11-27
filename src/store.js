import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'


import {isProduction} from './configuration'

const initialState = {};
const middleware = [thunk];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose; 

const enhancer = composeEnhancers(
	applyMiddleware(...middleware), 
)


const store = createStore (
	rootReducer,
	(isProduction === 1) ? (
		applyMiddleware(thunk)
	): (
		initialState,
		enhancer
	)
);


export default store; 