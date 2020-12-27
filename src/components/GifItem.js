import React from 'react';
import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {

	return (
		<div className='card animate__animated animate__fadeInDown'>
			<div className='body'>
				<img src={url} alt={title}/>
			</div>
			<div className='footer'>
				<p>{title}</p>
			</div>
		</div>
	);
}


GifItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
}