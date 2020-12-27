import { shallow } from "enzyme";
import { CategoryAdd } from "../../components/CategoryAdd";

describe('Test para el componente CategoryAdd', () => {


	const setCategories =  jest.fn();
	let wrapper;

	beforeEach(()=>{
		jest.clearAllMocks();
		wrapper = shallow( <CategoryAdd setCategories={setCategories}/> );
	});

	test('Deberia mostrar el componente CategoryAdd', ()=>{
		expect( wrapper ).toMatchSnapshot();
	});

	test('Deberia de cambiar la caja de texto', ()=>{
		const input = wrapper.find('input');
		const value = 'Hola mundo';

		input.simulate('change',{ target:{ value } });
	});
	
	test('No deberia agregar la categoria con el submit cuando la categoria es menor a 2 caracteres ', ()=>{
		
		const form = wrapper.find('form');
		form.simulate('submit',{ preventDefault: ()=>{} });

		expect( setCategories ).not.toHaveBeenCalled();

	});

	test('Deberia de llamar setCategories y limpiar la caja de texto', ()=>{

		// ingresamos la categoria
		const input = wrapper.find('input');
		const value = 'Vikings';
		input.simulate('change',{ target:{ value } });

		// realizamos el submit
		const form = wrapper.find('form');
		form.simulate('submit',{ preventDefault: ()=>{} });

		expect( setCategories ).toHaveBeenCalled();
		expect( setCategories ).toHaveBeenCalledTimes( 1 );
		expect( setCategories ).toHaveBeenCalledWith(expect.any(Function) );

		expect( input.text().trim() ).toBe('');

	});

});