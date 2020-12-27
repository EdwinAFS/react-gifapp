import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('Test para el componente GifGrid', () => {

	test('Deberia mostrar la interfaz GifExperApp', ()=>{
		 const wrapper = shallow(<GifExpertApp />);
		 expect(wrapper).toMatchSnapshot();
	});

	test('Deberia mostrar una lista de categorias', ()=>{

		const categories = ['Vikings'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

		expect( wrapper.find('GifGrid').length ).toBe( categories.length ); 
		
   });

});