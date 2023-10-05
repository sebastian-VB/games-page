import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ShowOrHideSidebarService } from '../services/show-or-hide-sidebar.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, SideBarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  flatNav!: boolean;

  constructor(private buttonSidebar: ShowOrHideSidebarService){

  }

  onShowSidebar(): void{
    const currenValue = this.buttonSidebar.getValueShowOrHidesb();
    currenValue.subscribe(value => this.flatNav = !value);
    this.buttonSidebar.setValueShowOrHidesb(this.flatNav);
  }

}
