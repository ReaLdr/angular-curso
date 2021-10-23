import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'IronMan';
    edad: number = 45;

    // Get crear mediante codigo una propiedad que va aser procesada
    get nombrecapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    // Método
    obtenerNombre(): string{
        return `${ this.nombre } - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'SpiderMan';
    }
    
    cambiarEdad(): void{
        this.edad = 30;
    }

}