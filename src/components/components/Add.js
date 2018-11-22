import React, { Component } from 'react';


import TextInputGroup from '../design/TextInputGroup';

class Add extends Component {
	state = {
		name : "",
		tags : "", 	
		content: "", 
		errors: {}
	}

	onSubmit = (e) => {
		
		this.props.history.push('/');
	}

	onChange = e => this.setState({[e.target.name]: e.target.value});

	render() {
		const {name, tags, content, errors} = this.state; 
		return (
			<div className = "container">
				<br />
				<div style={{width : '100%', height: '95px'}}>
				    &nbsp;
				</div>
				<div className="row">
					<div className="col-sm-2">
						
					</div>
		  		    <div className="col-sm-8">
		  		    	<div className = "card"> 
		  		    		<div className = "card-header">
		  		    			<h5>Add Post</h5> 
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
	  		    				    />
	  		    				    <TextInputGroup
		  		    					label = "Tag"
		  		    					name = "tags"
		  		    					placeholder = "Enter tags (separate with space e.g post blog)"
		  		    					value = {tags}
		  		    					onChange = {this.onChange}
		  		    					error = {errors.tag}
	  		    				    />
	  		    				    <TextInputGroup
		  		    					label = "Content"
		  		    					name = "content"
		  		    					placeholder = "Enter content"
		  		    					value = {content}
		  		    					onChange = {this.onChange}
		  		    					error = {errors.content}
	  		    				    />
	  		    				    <br />

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

export default Add 
