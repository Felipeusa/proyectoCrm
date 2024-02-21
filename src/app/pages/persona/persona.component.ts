import { Component } from '@angular/core';
import { TablaComponent } from "../../components/tabla/tabla.component";
import { ContadorComponent } from "../../components/contador/contador.component";

@Component({
    selector: 'app-persona',
    standalone: true,
    templateUrl: './persona.component.html',
    styleUrl: './persona.component.css',
    imports: [TablaComponent, ContadorComponent]
})
export class PersonaComponent {

  titulo: string = "Componente persona";
  edad: number = 25;

  ocultar: boolean = true;

  contador: number = 0;

  
  users: { id: number; name: string }[] = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];


  recibirContador(numero: number){
    this.contador = numero;
  }
}
