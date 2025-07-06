import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recetas-recientes',
  imports: [CardComponent, CommonModule],
  templateUrl: './recetas-recientes.component.html',
  styleUrl: './recetas-recientes.component.css'
})
export class RecetasRecientesComponent {
  recetas = [
    { titulo: 'Receta 1', imagen: 'assets/receta1.jpg', imagenHover: 'assets/receta1-hover.jpg' },
    { titulo: 'Receta 2', imagen: 'assets/receta2.jpg', imagenHover: 'assets/receta2-hover.jpg' },
    { titulo: 'Receta 3', imagen: 'assets/receta3.jpg', imagenHover: 'assets/receta3-hover.jpg' },
    { titulo: 'Receta 4', imagen: 'assets/receta4.jpg', imagenHover: 'assets/receta4-hover.jpg' },
    { titulo: 'Receta 4', imagen: 'assets/receta4.jpg', imagenHover: 'assets/receta4-hover.jpg' },
    { titulo: 'Receta 4', imagen: 'assets/receta4.jpg', imagenHover: 'assets/receta4-hover.jpg' },
    { titulo: 'Receta 4', imagen: 'assets/receta4.jpg', imagenHover: 'assets/receta4-hover.jpg' },
    { titulo: 'Receta 4', imagen: 'assets/receta4.jpg', imagenHover: 'assets/receta4-hover.jpg' },
    { titulo: 'Receta 4', imagen: 'assets/receta4.jpg', imagenHover: 'assets/receta4-hover.jpg' },
    { titulo: 'Receta 4', imagen: 'assets/receta4.jpg', imagenHover: 'assets/receta4-hover.jpg' }
  ];
}
