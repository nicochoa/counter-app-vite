import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06-deses-obj', () => { 
    test('usContext debe retornar un objeto', () => { 
        const textContext = {
            nombreClave: "El_Taco",
            anios: 38,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const context = usContext({clave:"El_Taco" , edad: 38});


        expect(textContext).toStrictEqual(context);
     })
 })