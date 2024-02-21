import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cliente } from '../../core/interfaces/cliente';

@Component({
  selector: 'app-agregar-clientes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-clientes.component.html',
  styleUrl: './agregar-clientes.component.css'
})
export class AgregarClientesComponent {


  clienteForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    tipoDocumento: new FormControl('', [Validators.required]),
    numeroDocumento: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
  });


  @Output() clientesNuevos: EventEmitter<Cliente> = new EventEmitter<Cliente>();
  

  crearCliente(){
    console.log("Datos",this.clienteForm);
    const datos = this.clienteForm.value;
    const clienteNuevo: Cliente = {
      id: Number(datos.id),
      nombre: datos.nombre || "",
      direccion: datos.direccion || "",
      telefono: datos.telefono || "",
      email: datos.email || "",
      tipoDocumento: datos.tipoDocumento || "",
      numeroDocumento: datos.numeroDocumento || "", 
      estado: Boolean(datos.estado)
    };

    this.clientesNuevos.emit(clienteNuevo);
    
  }

}
