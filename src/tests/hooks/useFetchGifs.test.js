import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Test para el hook useFetchGifs',()=>{

	test('Deberia de retornar el estado inicial', async() => {

		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Vikings' ));
		const { data, loading } = result.current;

		await waitForNextUpdate();

		expect( data ).toEqual([]);
		expect( loading ).toBe( true );

	});
	
	test('Deberia de retornar un arreglo de imagenes y loading en false', async() => {

		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Vikings' ));

		await waitForNextUpdate();
		
		const { data, loading } = result.current;

		expect( data.length ).toBe( 10 );
		expect( loading ).toBe( false );

	});

});