import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
	label,
	name,
	value,
	placeholder,
	type,
	onChange,
	error
}) => {
	return (
		<div>
			{ (type == "text" ) ? (
				<div>
					<label htmlfor = {name} > {label} </label>
					<input
						type = {type}
						name = {name}
						className = {classnames('form-control form-control-lg',{
							'is-invalid': error
						})}
						placeholder = {placeholder}
						value = {value}
						onChange = {onChange}
					 />
					 {error && <div className = "invalid-feedback"> {error} </div>}
				</div>
			) : 
				(
					<div className="form-group">
					  <label for="comment">{name}:</label>
					  <textarea className="form-control" rows="5" name = {name} placeholder= {placeholder} onChange = {onChange}></textarea>
					</div> 
				)

			}
				
		</div>
	)
}

export default TextInputGroup; 
