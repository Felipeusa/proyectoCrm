import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AgregarClientesComponent } from './Clientes/agregar-clientes/agregar-clientes.component';
import { VerClientesComponent } from './Clientes/ver-clientes/ver-clientes.component';

export const routes: Routes = [{

    path:'',
    title: 'Inicio',
    component: InicioComponent,
}, 
{

    path:'servicio',
    title: 'Servicios',
    component: ServiciosComponent,

},
{
    path:'acercade',
    title: 'Quienes somos',
    component: AcercaDeComponent,

},
{
    path:'contacto',
    title: 'Contacto',
    component: ContactoComponent,

},
{
    path:'ver-clientes',
    title: 'Clientes',
    component: VerClientesComponent,

},
{
    path:'add-clientes',
    title: 'Agregar Clientes',
    component: AgregarClientesComponent,

}

];
