import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecetasRecientesComponent } from "./components/recetas-recientes/recetas-recientes.component";
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { AntojosComponent } from "./components/antojos/antojos.component";
import { PortadaComponent } from './components/portada/portada.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, RecetasRecientesComponent, ArticulosComponent, CommonModule, RouterModule, AntojosComponent, PortadaComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'camiiscooking-blog';
}



