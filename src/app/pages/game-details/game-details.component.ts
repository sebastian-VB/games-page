import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GetGameByIdService } from './service/get-game-by-id.service';
import { GameDetail } from 'src/app/global/interfaces/game-details.interface';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit{

  gameDetails!: GameDetail;

  constructor(private route: ActivatedRoute, private getGameByIdSvc: GetGameByIdService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['gameId'];
      console.log(id);
      this.getGameByIdSvc.getOnlyGame(id).subscribe((value: GameDetail)=>{
        this.gameDetails = value;
        console.log(this.gameDetails);
      });
    });
  }


}
