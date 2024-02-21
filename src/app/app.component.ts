import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaComponent } from "./components/tabla/tabla.component";
import { InicioComponent } from './pages/inicio/inicio.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { PersonaComponent } from "./pages/persona/persona.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TablaComponent, InicioComponent, FooterComponent, HeaderComponent, PersonaComponent]
})
export class AppComponent {
  title = 'ProyectoAngular';
}
