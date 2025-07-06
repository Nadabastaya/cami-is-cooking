import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articulos',
  imports: [CardComponent, CommonModule],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent {
  articulos = [
    { titulo: 'Receta 4', imagen: 'assets/receta4.jpg', imagenHover: 'assets/receta4-hover.jpg' },
    { titulo: 'Receta 4', imagen: 'assets/receta4.jpg', imagenHover: 'assets/receta4-hover.jpg' },
    { titulo: 'Receta 4', imagen: 'assets/receta4.jpg', imagenHover: 'assets/receta4-hover.jpg' },
    { titulo: 'Receta 4', imagen: 'assets/receta4.jpg', imagenHover: 'assets/receta4-hover.jpg' }
  ];
}
