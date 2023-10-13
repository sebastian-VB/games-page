import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from 'src/app/global/interfaces/game.interface';

@Component({
  selector: 'app-games-card-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games-card-container.component.html',
  styleUrls: ['./games-card-container.component.scss']
})
export class GamesCardContainerComponent {

  @Input() gameInfo!: Game;

}
