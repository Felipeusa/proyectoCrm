import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../core/interfaces/cliente';
import { RouterLink } from '@angular/router';
import { AgregarClientesComponent } from "../agregar-clientes/agregar-clientes.component";


@Component({
    selector: 'app-ver-clientes',
    standalone: true,
    templateUrl: './ver-clientes.component.html',
    styleUrl: './ver-clientes.component.css',
    imports: [RouterLink, AgregarClientesComponent]
})
export class VerClientesComponent implements OnInit {

  mostrar: boolean = false;

  agregarClientesboton(){
  this.mostrar=true;
  }

 

misClientes: Cliente[] = [];


ngOnInit(): void {
  this.misClientes.push({
    id: 1,
    nombre: "Pepito",
    direccion: "Calle 123 falsa",
    telefono: "3113295850",
    email: "csdas@gmail.com",
    tipoDocumento: "Cedula",
    numeroDocumento: "101321485",
    estado: true,
  },
  {
    id: 2,
    nombre: "Alejandro",
    direccion: "Calle 789 falsa",
    telefono: "3113295550",
    email: "5454@gmail.com",
    tipoDocumento: "Cedula",
    numeroDocumento: "101344654485",
    estado: true,
  },
  {
    id: 3,
    nombre: "Felipe",
    direccion: "Calle 852 falsa",
    telefono: "31134545850",
    email: "ffvff@gmail.com",
    tipoDocumento: "Cedula",
    numeroDocumento: "1013414",
    estado: false,
  });

  this.misClientes.forEach((cliente) => {
    console.log("Mis clientes" , cliente);
  });
  }

  agregarClientes(clienteNuevo: Cliente) {

    this.misClientes.push(clienteNuevo);
  
  }

eliminarCliente(idCliente: number): void{
  // this.misClientes.slice(idCliente, 1);
  // this.misClientes = [...this.misCkie]
  this.misClientes = this.misClientes.filter(
    (cliente) => cliente.id !== idCliente
  );
  console.log("Eliminar", this.misClientes)
}
}
