import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Posts from '../components/Posts'

import { getPosts } from '../../actions/postActions'

class Body extends Component {
	componentDidMount() {
		this.props.getPosts();
	}
	render() {
		const { posts } = this.props;
		return (
			<div className = "container">
				<div style={{width : '100%', height: '95px'}}>
				    &nbsp;
				</div>
				<div className="row">
					<div className="col-sm-2">
						<br />
						<div className="card fixed" >
							<div className="card-body">
								<a href="#" >Click here to Post! </a>
							</div>
						</div>
					</div>

		  		    <div className="col-sm-8">
		  		    	{posts.map(post => (
		  		    		<div>
		  		    			<br />
		  		    			<Posts key = {post.id} post = {post}  />
		  		    		</div>
	  		    		))}
		  		    </div>

		  		    <div className="col-sm-2">
		  		    </div>
	  		    </div>
			</div>
		);
	}
}

Body.propTypes = {
	posts: PropTypes.array.isRequired, 
}

const mapStateToProps = (state) => ({
	posts: state.post.posts
})

const mapDispatchToProps = (state) => ({
	getPosts
})

export default connect(mapStateToProps,{getPosts})(Body)
