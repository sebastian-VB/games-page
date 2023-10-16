import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit{

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => console.log(params['gameId']));
  }

}
