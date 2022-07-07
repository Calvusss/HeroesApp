import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  .img-click {
    cursor: pointer;
  }
  mat-card{
    margin-top: 20px;
  }
  `]
})
export class HeroeTarjetaComponent {
  @Input() heroe!: Heroe;
}
