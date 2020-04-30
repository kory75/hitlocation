import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-hit-location',
  templateUrl: './hit-location.component.html',
  styleUrls: ['./hit-location.component.scss']
})
export class HitLocationComponent implements OnInit {

  constructor() { }

  public result: string ='';
  public layout3d: boolean = false;

  ngOnInit(): void {
  }

  roll() {
    const diceRoll = Math.floor(Math.random() * 22);
    this.result = [
      'skull cap', 'face',  
      'left shoulder', 'left upper arm', 'left lower arm', 'left hand',
      'right shoulder', 'right upper arm', 'right lower arm', 'right hand',
      'chest', 'shoulder blade', 'stomach', 'spine', 'pelvis',
      'left thighs', 'left knee', 'left calf', 'left foot',
      'right thighs', 'right knee', 'right calf', 'right foot',
    ][diceRoll]
  }

}
