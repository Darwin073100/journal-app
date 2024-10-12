import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dbmqvcfwj',
    api_key: '573478226319226',
    api_secret: '3epxhOw-C5RIZtrHSupC81KQfaQ',
    secure: true
});
 
describe('Pruebas en fileUpload', ()=>{
    test('Debe de subir el archivo correctamente', async () => {
        const imageUrl = 'https://lh3.googleusercontent.com/ogw/AF2bZyja2LlKOOUfcSXDGTSnzFMSO7fR2nqfBbUif7xpSJyH9ZI=s32-c-mo';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect(typeof url).toBe('string');

        const segments = url.split('/');

        const imageId = segments[segments.length -1].replace('.png', '');

        await cloudinary.api.delete_resources([imageId]);

    })

    test('Debe retornar null', async () => { 
        const file = new File([], 'foto.jpg');
        const url = await fileUpload( null );

        expect( url ).toBe(null);

    })
});