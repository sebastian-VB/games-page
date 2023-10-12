import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGamesService } from 'src/app/global/state/list-games.service';
import { CategoryNameService } from 'src/app/global/state/category-name.service';
import { FilterListGamesService } from '../../service/filter-list-games.service';
import { OrderWhitCategoryService } from 'src/app/global/state/order-whit-category.service';
import { Game } from 'src/app/global/interfaces/game.interface';

@Component({
  selector: 'app-select-platform',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-platform.component.html',
  styleUrls: ['./select-platform.component.scss']
})
export class SelectPlatformComponent implements OnInit{

  categoryName!: string;
  isPressCategory!: boolean;

  constructor(
    private listGameSvc: ListGamesService,
    private categoryNameSvc: CategoryNameService,
    private orderCategorySvc: OrderWhitCategoryService,
    private filterListGame: FilterListGamesService
  ){}

  ngOnInit(): void {
    this.categoryNameSvc.getCategory().subscribe(value => this.categoryName = value);
    this.orderCategorySvc.getSelectCategory().subscribe(value => this.isPressCategory = value);
  }

  onSelectOption( value: any): void{
    
    let platform = value.target.value;
    if(this.isPressCategory == false){
      this.filterListGame.getListGamesByPlatform(platform).subscribe(
        (value: Game[]) => this.listGameSvc.setListGames(value)
      );
    }
    else{
      this.filterListGame.getListGamesByPlatformWhitCategory(this.categoryName, platform).subscribe(
        (value: Game[]) => this.listGameSvc.setListGames(value)
      );
    }
    console.log(value.target.value);
  }

}
