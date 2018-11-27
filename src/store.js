import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// const initialState = { posts: [ {id : 1, name: "Jeff", tags: [ 'a', 'b' ], content: 'content', date: 'asdas', time: 'asdsa'} ] }; 
const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose; 

const enhancer = composeEnhancers(
	applyMiddleware(...middleware), 
)


const store = createStore (
	rootReducer,
	initialState,
	enhancer
);

export default store; 