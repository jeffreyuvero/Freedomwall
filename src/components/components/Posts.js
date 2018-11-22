import React, { Component } from 'react';

class Posts extends Component {

	render() {
		const {id, name, tags, content, date, time} = this.props.post;
		return (
			  <div className="card" >
			  	<div className="card-header" style = {{backgroundColor: '#e8dfc0'}}>
			  		<h4><strong>Post from {name}</strong></h4>
			  		<small>Tags: {tags.map(tag => <span>#{tag} </span> )}   </small>
			  	</div>
			  	<div className="card-body">
			  		<p className = "card-text">{content}</p>
			  		<footer class="blockquote-footer"><small>{date} and {time} </small></footer>
			  	</div>
			  </div>
		);
	}
}

export default Posts; 
