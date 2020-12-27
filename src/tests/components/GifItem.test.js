import { shallow } from "enzyme";
import { useEffect } from "react";
import { GifItem } from "../../components/GifItem";

describe('Test para el componente GifItem.js', ()=>{

	const title = 'Test';
	const url = 'https://media.giphy.com/media/3o6wrk0rO35GuXFP6o/giphy.gif';

	const wrapper = shallow(<GifItem 
		title={title} 
		url={url} 
	/>);

	test('Deberia mostrar el componente de GifItem', ()=>{	
		expect( wrapper ).toMatchSnapshot();
	});

	test('Deberia tener un parrafo con el titulo', () => {
		const titleValue = wrapper.find('p').text().trim(); 
		expect( titleValue ).toBe( title );
	});
	
	test('Deberia tener url y alt de los props', () => {
		const img = wrapper.find('img'); 
		expect( img.prop('src') ).toBe( url );
		expect( img.prop('alt') ).toBe( title );
	});
	
	test('Deberia contener la clase animate__fadeInDown', () => {
		const card = wrapper.find('.card'); 
		expect( card.prop('className') ).toContain( 'animate__fadeInDown' );
	});

});