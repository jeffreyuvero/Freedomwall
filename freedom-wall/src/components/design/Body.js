import React, { Component } from 'react';

import Posts from '../components/Posts'

class Body extends Component {
	state = {
		posts: 
			[
				{
					id: 1,
					name : 'Jeffrey',
					tags: ['anything','personal','inMyMind'],
					content: 'This is my first Post for this website ',
					date: 'November 20, 2018',
					time: '03:01 PM',
				},
				{
					id: 2,
					name : 'Jepoy',
					tags: ['anything','personal','inMyMind'],
					content: 'This is my first Post for this website ',
					date: 'November 20, 2018',
					time: '03:16 PM',
				},
				{
					id: 3,
					name : 'Jeff',
					tags: ['anything','personal','inMyMind'],
					content: 'This is my first Post for this website ',
					date: 'November 20, 2018',
					time: '04:45 PM',
				},

			],
	}
	render() {
		const { posts } = this.state;
		return (
			<div className = "container">
				<div className="row">
					<div className="col-sm-2">
						<br />
						<div className="card" >
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

export default Body
