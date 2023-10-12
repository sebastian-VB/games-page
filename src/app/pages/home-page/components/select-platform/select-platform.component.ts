import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGamesService } from 'src/app/global/state/list-games.service';
import { CategoryNameService } from 'src/app/global/state/category-name.service';
import { FilterListGamesService } from '../../service/filter-list-games.service';
import { OrderWhitCategoryService } from 'src/app/global/state/order-whit-category.service';
import { Game } from 'src/app/global/interfaces/game.interface';
import { SortByService } from 'src/app/global/state/sort-by.service';

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
  sortBy!: string;

  constructor(
    private listGameSvc: ListGamesService,
    private categoryNameSvc: CategoryNameService,
    private orderCategorySvc: OrderWhitCategoryService,
    private filterListGameSvc: FilterListGamesService,
    private sortBySvc: SortByService
  ){}

  ngOnInit(): void {
    this.categoryNameSvc.getCategory().subscribe(value => this.categoryName = value);
    this.orderCategorySvc.getSelectCategory().subscribe(value => this.isPressCategory = value);
    this.sortBySvc.getSortBy().subscribe(value => this.sortBy = value);
  }

  onSelectOption( value: any): void{
    
    let platform = value.target.value;

    if(this.sortBy == ""){
      if(this.isPressCategory == false){
        this.filterListGameSvc.getListGamesByPlatform(platform).subscribe(
          (value: Game[]) => this.listGameSvc.setListGames(value)
        );
      }
      else{
        this.filterListGameSvc.getListGamesByPlatformWhitCategory(this.categoryName, platform).subscribe(
          (value: Game[]) => this.listGameSvc.setListGames(value)
        );
      }
    }
    else{
      console.log("**************",this.sortBy);
      if(this.isPressCategory == false){
        this.filterListGameSvc.getListGamesByPlatformAndSortBy(platform, this.sortBy).subscribe(
          (value: Game[]) => this.listGameSvc.setListGames(value)
        );
      }
      else{
        this.filterListGameSvc.getListGamesByPlatformWhitCategoryAndSortBy(this.categoryName, platform, this.sortBy).subscribe(
          (value: Game[]) => this.listGameSvc.setListGames(value)
        );
      }
    }

    
    console.log(value.target.value);
  }

}
