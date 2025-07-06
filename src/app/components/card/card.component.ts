import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() hoverImage: string = '';
  isHovered: boolean = false; // ✅ Agregado para manejar el estado del hover
}