import {GET_POSTS, ADD_POST} from '../actions/types'

const initialState = {
	 posts:[]
};

export default function (state = initialState, action){
	switch(action.type){
		case GET_POSTS:
			return {
				...state,
				posts: action.payload
			}; 
			// return {
			// 	...state
			// }
		case ADD_POST:
			return {
				...state,
				posts: [action.payload,...state.posts] 
			}
		default:
			return state; 
	}
}