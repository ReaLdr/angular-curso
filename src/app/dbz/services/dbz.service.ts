import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
           nombre: 'Goku',
           poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 8500
        }
      ];


    get personajes (): Personaje[] {
        return [...this._personajes];
    }

    constructor(){}
    // El constructor se podría borrar


    // Método
    agregarPersonaje( monito: Personaje ){
        this._personajes.push(monito);
    }

}