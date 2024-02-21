import { Component, OnInit } from '@angular/core';
import { PersonaComponent } from "../persona/persona.component";
import Swal from 'sweetalert2';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [PersonaComponent]
})
export class InicioComponent implements OnInit {

    ngOnInit(): void {
       
    }
   
Presione (): void{

    Swal.fire({
        title: "Prueba",
        text: "Prueba 2",
        icon: "question"
      });
    
};


}

