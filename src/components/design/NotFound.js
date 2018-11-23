import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NotFound extends Component {
	render() {
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
		  		    	<div>
							<h1>404 Page Not Found</h1>
							<p className = "lead">Sorry the page does not exist! </p>
							<p>Click <Link to="/"> here </Link>to redirect to main page</p>
						</div>
		  		    </div>

		  		    <div className="col-sm-2">
		  		    </div>
	  		    </div>
			</div>
		);
	}
}

export default NotFound; 
