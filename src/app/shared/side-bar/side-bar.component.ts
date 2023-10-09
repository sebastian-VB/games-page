import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowOrHideSidebarService } from '../../global/services/show-or-hide-sidebar.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  flatSide!: boolean;
  gameCategory:String[] = [
    "mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social",
    "sandbox", "open-world", "survival", "pvp", "pve", "pixel", "voxel",
    "zombie", "turn-based", "first-person", "third-Person", "top-down", "tank",
    "space", "sailing", "side-scroller", "superhero", "permadeath", "card",
    "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy",
    "sci-fi", "fighting", "action-rpg", "action", "military", "martial-arts",
    "flight", "low-spec", "tower-defense", "horror", "mmorts"
  ];
  

  constructor(private buttonSidebar: ShowOrHideSidebarService){

  }

  onHideSideBar(): void{
    const currenValue = this.buttonSidebar.getValueShowOrHidesb();
    currenValue.subscribe(value => this.flatSide = !value);
    this.buttonSidebar.setValueShowOrHidesb(this.flatSide);
  }

}
