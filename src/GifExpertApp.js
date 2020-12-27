import React, { Fragment, useState } from "react";
import { CategoryAdd } from "./components/CategoryAdd";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
	
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<Fragment>
			<h2> GifExperApp</h2>
			<hr />
			<CategoryAdd setCategories={setCategories}/>
			<ol>
				{
					categories.map( category => (
						<GifGrid 
							key = { category }
							category = { category }
						/>
					))
				}
			</ol>
		</Fragment>
	);
};
