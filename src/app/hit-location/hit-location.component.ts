import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hit-location',
  templateUrl: './hit-location.component.html',
  styleUrls: ['./hit-location.component.scss']
})
export class HitLocationComponent implements OnInit {

  constructor() { }

  public result: string ='';

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
