import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowOrHideSidebarService } from '../services/show-or-hide-sidebar.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  flatSide!: boolean;

  constructor(private buttonSidebar: ShowOrHideSidebarService){
    this.buttonSidebar.getValueShowOrHidesb().subscribe(value=>{
      console.log(`Valor del showOrHideSide en side bar c ${value}`);
    });
  }

  onHideSideBar(): void{
    const currenValue = this.buttonSidebar.getValueShowOrHidesb();
    currenValue.subscribe(value => this.flatSide = !value);
    this.buttonSidebar.setValueShowOrHidesb(this.flatSide);
  }

}
