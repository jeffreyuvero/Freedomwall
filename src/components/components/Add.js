import React, { Component } from 'react';


import TextInputGroup from '../design/TextInputGroup';

import {connect} from 'react-redux';
import {addPost} from '../../actions/postActions';
import {Link} from 'react-router-dom'

class Add extends Component {
	state = {
		name : "",
		tags : "", 	
		content: "", 
		errors: {}
	}

	onSubmit = (e) => { 
		e.preventDefault();

		const {name , tags , content} = this.state; 
		if(tags == ""){
			return ; 
		}

		if(content == ""){
			return ; 
		}

		let newTags = tags.split(" "); // split 
		let uniqueTags = [...new Set(newTags)]; 
		
		const NewPost = {
			name, 
			tags : uniqueTags, 
			content
		}

		this.props.addPost(NewPost); 

		this.props.history.push('/');
	}

	onChange = e => this.setState({[e.target.name]: e.target.value});

	render() {
		const {name, tags, content, errors} = this.state; 
		return (
			<div className = "container">
				<div style={{width : '100%', height: '95px'}}>
				&nbsp;
				</div>
				<div className="row">
					<div className="col-sm-2">
						<br />
						<Link to="/">  
							<button type="button" className="btn btn-outline-warning">
								Home
							</button>
						</Link>
					</div>
		  		    <div className="col-sm-8">
		  		    	<div className = "card" style = {{marginTop : '10px'}}> 
		  		    		<div className="card-header" style = {{backgroundColor: '#e8dfc0'}}>
		  		    			<h4><strong>Add Post</strong></h4> 
		  		    		</div>
		  		    		<div className = "card-body">
		  		    			<form onSubmit = {this.onSubmit}>
		  		    				<TextInputGroup
		  		    					label = "Name"
		  		    					name = "name"
		  		    					placeholder = "Enter name"
		  		    					value = {name}
		  		    					onChange = {this.onChange}
		  		    					error = {errors.name}
		  		    					type = "text"
	  		    				    />
	  		    				    <TextInputGroup
		  		    					label = "Tag"
		  		    					name = "tags"
		  		    					placeholder = "Enter tags (separate with space e.g post blog)"
		  		    					value = {tags}
		  		    					onChange = {this.onChange}
		  		    					error = {errors.tag}
		  		    					type = "text"
	  		    				    />
	  		    				    <TextInputGroup
		  		    					label = "Content"
		  		    					name = "content"
		  		    					placeholder = "Enter content"
		  		    					value = {content}
		  		    					onChange = {this.onChange}
		  		    					error = {errors.content}
		  		    					type = "textarea"
	  		    				    />
	  		    				    <input 
	  		    				    	type = "submit"
	  		    				    	value = "Add Post"
	  		    				    	className = "btn btn-primary btn-block"
  		    				    	/>
		  		    			</form>
		  		    		</div>
		  		    		
		  		    	</div>
		  		    </div>

		  		    <div className="col-sm-2">
		  		    </div>
	  		    </div>
			</div>
		);
	}
}

const mapDispatchToProps = () => {
	
}

export default connect(null,{addPost})(Add)
