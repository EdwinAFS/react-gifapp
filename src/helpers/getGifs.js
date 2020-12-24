const API_KEY = 'SbYe5IokTC6i5j3Bml5Ylx4HUVNXZyBX';

export const getGifs = async ( category ) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${API_KEY}`;

	const response = await fetch(url);
	const { data } = await response.json();

	const gifList = data.map(({ id, title, images: { fixed_height: { url } } }) => {
		return {
			id,
			title,
			url
		}
	});

	return gifList;
}