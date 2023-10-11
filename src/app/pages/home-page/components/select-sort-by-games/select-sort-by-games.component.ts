import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGamesService } from 'src/app/global/services/list-games.service';
import { SortLisGamesService } from '../../service/sort-lis-games.service';
import { Game } from 'src/app/global/interfaces/game.interface';

@Component({
  selector: 'app-select-sort-by-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-sort-by-games.component.html',
  styleUrls: ['./select-sort-by-games.component.scss']
})
export class SelectSortByGamesComponent {

  constructor(
    private listGameScv: ListGamesService,
    private sortListGamesSvc: SortLisGamesService
  ){}

  onSelectOption( value: any): void{
    this.sortListGamesSvc.getSortListGames(value.target.value).subscribe(
      (value: Game[]) => this.listGameScv.setListGames(value)
    );
    console.log(value.target.value);
  }  

}
