import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGamesService } from 'src/app/global/state/list-games.service';
import { SortLisGamesService } from '../../service/sort-lis-games.service';
import { Game } from 'src/app/global/interfaces/game.interface';
import { CategoryNameService } from 'src/app/global/state/category-name.service';
import { OrderWhitCategoryService } from 'src/app/global/state/order-whit-category.service';
import { SortByService } from 'src/app/global/state/sort-by.service';

@Component({
  selector: 'app-select-sort-by-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-sort-by-games.component.html',
  styleUrls: ['./select-sort-by-games.component.scss']
})
export class SelectSortByGamesComponent implements OnInit{

  categoryName!: string;
  isPressCategory!: boolean;

  constructor(
    private listGameScv: ListGamesService,
    private sortListGamesSvc: SortLisGamesService,
    private categoryNameSvc: CategoryNameService,
    private orderCategorySvc: OrderWhitCategoryService,
    private sortBySvc: SortByService
  ){}

  ngOnInit(): void {
    this.categoryNameSvc.getCategory().subscribe(value => this.categoryName = value);
    this.orderCategorySvc.getSelectCategory().subscribe(value => this.isPressCategory = value);
  }

  onSelectOption( value: any): void{

    let sortBy = value.target.value;
    this.sortBySvc.setSortBy(sortBy);

    if(this.isPressCategory == false){
      this.sortListGamesSvc.getSortListGames(sortBy).subscribe(
        (value: Game[]) => this.listGameScv.setListGames(value)
      );
    }
    else{
      this.sortListGamesSvc.getSortListGamesByCatgeory(this.categoryName,sortBy).subscribe(
        (value: Game[]) => this.listGameScv.setListGames(value)
      );
    }
    console.log(value.target.value);
  }  

}
