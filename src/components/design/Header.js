import React, {Component} from 'react'


import { Title } from '../../configuration'


class Header extends Component {
	render() {
		return (
			<div className="container fixed-top">
			  <div className="card " style = {{backgroundColor: '#b43b07'}}>
			  	<div className="card-body">
			  		<div className="row">
			  		    <div className="col-sm">
			  		    </div>
			  		    <div className="col-sm">
			  				<h1 style = {{color: 'white', fontFamily: 'consolas'}}>{ Title }</h1>
			  		    </div>
			  		    <div className="col-sm">
			  		    </div>
		  		    </div>
			  	</div>
			  </div>
			</div>
		);
	}
}

export default Header; 
