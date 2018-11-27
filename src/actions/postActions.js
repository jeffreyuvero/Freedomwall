import {GET_POSTS, ADD_POST} from './types';
import axios from 'axios'; 

import { API } from '../configuration'


// thunk version 

export const getPosts = () => async dispatch => {
	// const res = await axios.get('https://api.myjson.com/bins/1dzujy'); 
	const res = await axios.get(API + 'post_list'); 
	dispatch ({
		type: GET_POSTS, 
		payload: res.data, 
	})
};

// export const getPosts = () => {
// 	return {
// 		type: GET_POSTS
// 	}
// }

export const addPost = (post) => async dispatch => {
	const res = await axios.post(API + 'add_post/',{post});
	// axios.post('add_post/',{post})

	dispatch ({
		type: ADD_POST,
		payload: res.data,
	})
}

