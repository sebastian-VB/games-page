import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGamesService } from 'src/app/global/state/list-games.service';
import { CategoryNameService } from 'src/app/global/state/category-name.service';
import { FilterListGamesService } from '../../service/filter-list-games.service';
import { OrderWhitCategoryService } from 'src/app/global/state/order-whit-category.service';
import { Game } from 'src/app/global/interfaces/game.interface';
import { SortByService } from 'src/app/global/state/sort-by.service';
import { PlatformService } from 'src/app/global/state/platform.service';
import { SortLisGamesService } from '../../service/sort-lis-games.service';
import { ListGamesByCategoryService } from 'src/app/shared/service/list-games-by-category.service';

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
    private sortListGamesSvc: SortLisGamesService,
    private listGamesByCategorySvc: ListGamesByCategoryService,
    private sortBySvc: SortByService,
    private platformSvc: PlatformService
  ){}

  ngOnInit(): void {
    this.categoryNameSvc.getCategory().subscribe(value => this.categoryName = value);
    this.orderCategorySvc.getSelectCategory().subscribe(value => this.isPressCategory = value);
    this.sortBySvc.getSortBy().subscribe(value => this.sortBy = value);
  }

  onSelectOption( value: any): void{
    
    let platform = value.target.value;
    this.platformSvc.setPlatform(platform);

    // switch(platform){
    //   case platform == 'All-platform':
    //     this.platformIsAll();
    //     break;

    //   case platform != 'All-platform':
    //     this.platformPcOrWeb(platform);
    //     break;
      
    // }

    if(platform == 'All-platform'){
      this.platformIsAll();
    }
    if(platform != 'All-platform'){
      this.platformPcOrWeb(platform);
    }
    
    console.log(value.target.value);
  }

  platformPcOrWeb(platform: string): void{
    if(this.sortBy == ""){
      if(this.isPressCategory == false){
        console.log("platform");
        this.filterListGameSvc.getListGamesByPlatform(platform).subscribe(
          (value: Game[]) => this.listGameSvc.setListGames(value)
        );
      }
      else{
        console.log("platform - category");
        this.filterListGameSvc.getListGamesByPlatformWhitCategory(this.categoryName, platform).subscribe(
          (value: Game[]) => this.listGameSvc.setListGames(value)
        );
      }
    }
    else{
      if(this.isPressCategory == false){
        console.log("platform - sort by");
        this.filterListGameSvc.getListGamesByPlatformAndSortBy(platform, this.sortBy).subscribe(
          (value: Game[]) => this.listGameSvc.setListGames(value)
        );
      }
      else{
        console.log("category - platform - sort by");
        this.filterListGameSvc.getListGamesByPlatformWhitCategoryAndSortBy(this.categoryName, platform, this.sortBy).subscribe(
          (value: Game[]) => this.listGameSvc.setListGames(value)
        );
      }
    }
  }

  platformIsAll(): void{

    if(this.categoryName == "" && this.sortBy == ""){
      this.listGamesByCategorySvc.getListGame().subscribe(
        (value: Game[]) => this.listGameSvc.setListGames(value)
      );
    }

    if(this.categoryName == "" && this.sortBy != ""){
      this.sortListGamesSvc.getSortListGames(this.sortBy).subscribe(
        (value: Game[]) => this.listGameSvc.setListGames(value)
      );
    }

    if(this.categoryName != "" && this.sortBy == ""){
      this.listGamesByCategorySvc.getListGameByCategory(this.categoryName).subscribe(
        (value: Game[]) => this.listGameSvc.setListGames(value)
      );
    }

    if(this.categoryName != "" && this.sortBy != ""){
      this.sortListGamesSvc.getSortListGamesByCatgeory(this.categoryName,this.sortBy).subscribe(
        (value: Game[]) => this.listGameSvc.setListGames(value)
      );
    }
    
  }

  platformIsAllWhitCategory(): void{
    
  }

  platformIsAllWhitSort(): void{
    
  }

  platformIsAllWhitSortAndCategory(): void{
    
  }

}

