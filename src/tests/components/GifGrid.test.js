import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Test para el componente GifGrid', () => {

	const category = 'Vikings';

	test('Deberia mostrar el componente GifGrid', ()=>{
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		});
		 const wrapper = shallow(<GifGrid category={category}/>);
		 expect(wrapper).toMatchSnapshot();
	});
	
	test('Deberia mostrar los items de las imagen cuando las obtiene', ()=>{

		const gifs = [{
			id: 'ABC',
			url: 'https://localhost/test/test.jpg',
			title: 'test'
		}];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});

		const wrapper = shallow(<GifGrid category={category}/>);

		const loading = wrapper.find('p');
		const GifItem = wrapper.find('GifItem');

		expect( loading.exists() ).toBe( false );
		expect( GifItem.length ).toBe( gifs.length );
		 
	});



});