import {GET_POSTS, ADD_POST} from './types';
import axios from 'axios'; 


// thunk version 

export const getPosts = () => async dispatch => {
	// console.log('s')
	// const res = await axios.get('https://api.myjson.com/bins/14s23y');  // joseph
	// const res = await axios.get('https://api.myjson.com/bins/1dzujy'); 
	const res = await axios.get('http://192.168.0.54/fwall/index.php/fwall/post_list'); 
	dispatch ({
		type: GET_POSTS, 
		payload: res.data, 
	})
};

export const addPost = (post) => async dispatch => {
	const res = await axios.post('http://192.168.0.54/fwall/index.php/fwall/post_list',post);
	dispatch ({
		type: ADD_POST,
		payload: res.data, 
	})
}

// export const getPosts = () => {
// 	return {
// 		type: GET_POSTS
// 	}
// }