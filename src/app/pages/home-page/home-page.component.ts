import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowOrHideSidebarService } from 'src/app/global/services/show-or-hide-sidebar.service';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { SideBarComponent } from 'src/app/shared/side-bar/side-bar.component';
import { GamesCardContainerComponent } from 'src/app/pages/home-page/components/games-card-container/games-card-container.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule, 
    NavBarComponent, 
    SideBarComponent, 
    GamesCardContainerComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  showSideC!: boolean;

  constructor(private buttonSidebar: ShowOrHideSidebarService){
    this.buttonSidebar.getValueShowOrHidesb().subscribe(value=>{
      this.showSideC  = value;
    });
  }

}
