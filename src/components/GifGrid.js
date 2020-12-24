import React, { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem'; 

export const GifGrid = ({ category }) => {

	const { data: gifs, loading } = useFetchGifs( category );

	return (
		<Fragment>
			<h3>{category}</h3>

			{ loading && <p className='animate__animated animate__lightSpeedInLeft'>Cargando...</p>}
			<div className='grid'>
				{
					gifs.map(gif => {
						return (
							<GifItem key={gif.id} {...gif} />
						);
					})
				}
			</div>

		</Fragment>
	);

}