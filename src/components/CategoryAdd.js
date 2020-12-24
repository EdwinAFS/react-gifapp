import React, { useState } from "react";
import PropTypes from "prop-types";

export const CategoryAdd = ({setCategories}) => {

	const [categoryInput, setCategoryInput] = useState('');

	const handleChangeCategory = (e) => {
		setCategoryInput(e.target.value);
	}

	const handleSubmit = ( e ) => {
		e.preventDefault();

		if( categoryInput.trim().length < 2){
			return;
		}

		setCategories( categories => [categoryInput, ...categories] );
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={categoryInput}
				onChange={handleChangeCategory}
			/>
		</form>
	);
};

CategoryAdd.propTypes = {
	setCategories: PropTypes.func.isRequired
}