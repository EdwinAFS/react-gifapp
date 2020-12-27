import { getGifs } from "../../helpers/getGifs";

describe("Test para el helper getGifs", () => {

	const category = 'vikings';

	test("Deberia de traer 10 elementos", async() => {
		const gifs = await getGifs( category );
		expect( gifs.length ).toBe( 10 )
	});

	test("Deberia obtener 0 cuando no se envia la categoria", async() => {
		const gifs = await getGifs('');
		expect( gifs.length ).toBe( 0 );
	});
});
