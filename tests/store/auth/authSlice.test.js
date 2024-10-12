import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixture";

describe('Prueba en el authSlice', ()=>{
    test('should Debe regresar el estado inicial y llamarse "auth"', () => { 
          expect( authSlice.name ).toBe('auth');

          const state = authSlice.reducer( initialState, {});
          
          expect( state ).toEqual( initialState );
    });
});