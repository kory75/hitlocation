import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LocationService } from '../location.service';


@Component({
  selector: 'app-hit-location',
  templateUrl: './hit-location.component.html',
  styleUrls: ['./hit-location.component.scss']
})
export class HitLocationComponent implements OnInit {

  constructor(
    private _locationService: LocationService
  ) { }

  public result: string ='';
  public layout3d: boolean = false;
  public attackDirection: number = 0;
  public rotation: number = 0;

  ngOnInit(): void {
  }

  roll() {
    const diceRoll = Math.floor(Math.random() * 100 + 1);
    
    this.result = this._locationService.findRoll(
      diceRoll,
      ['front','frontLeft','backLeft','back','backRight','frontRight'][this.attackDirection],
      'same',
      'normal').name + ' ( ' + diceRoll + '% )';
  }

  setAttackDirection(direction: number) {
    this.attackDirection = direction;
  }

  set2DLayout() {
    this.rotation = 0;
    this.layout3d = false;
  }

  set3DLayout() {
    this.layout3d = true;
  }

  rotateLeft() {
    this.rotation = this.rotation + 60;
    console.log(this.rotation);
    if(this.rotation >= 360)
      this.rotation = 0
    console.log(this.rotation);
  }

  rotateRight(){
    this.rotation = this.rotation - 60;
    if(this.rotation < 0)
      this.rotation = 360 + this.rotation;
    console.log(this.rotation);
  }

}
