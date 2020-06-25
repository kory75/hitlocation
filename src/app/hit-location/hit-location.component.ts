import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LocationService } from '../location.service';
import { LocationModel } from '../location.model';


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
  public resultName: string ='';
  public layout3d: boolean = false;
  public attackDirection: number = 0;
  public rotation: number = 0;
  public height: string = 'same';
  public reach: string = 'normal';
  public targetType: string = 'bipedal';
  

  ngOnInit(): void {
  }

  roll() {
    const diceRoll = Math.floor(Math.random() * 100 + 1);

    let rollResult: LocationModel = this._locationService.findRoll(
      this.targetType,
      diceRoll,
      ['front','frontLeft','backLeft','back','backRight','frontRight'][this.attackDirection],
      this.height, 
      this.reach
    )

    this.result = rollResult.humanReadable + ' ( ' + diceRoll + '% )';
    this.resultName = rollResult.name;
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
    if(this.rotation >= 360)
      this.rotation = 0
  }

  rotateRight(){
    this.rotation = this.rotation - 60;
    if(this.rotation < 0)
      this.rotation = 360 + this.rotation;
  }

  setHeight(newHeight: string) {
    this.height = newHeight;
  }

  setReach(newReach: string) {
    this.reach = newReach;
  }

  setTargetType(newTargetType: string) {
    this.targetType = newTargetType;
    this.result = '';
    this.resultName = '';
    this.rotation = 0;
    this.layout3d = false;
  }

  getTargetMarkClass() {
    let result = {
      'layout3d': this.layout3d,
      'direction60': this.rotation===60, 
      'direction120': this.rotation===120,
      'direction180': this.rotation===180,
      'direction240': this.rotation===240,
      'direction300': this.rotation===300,
      'none' : this.resultName === ''
    }
    result[this.targetType] = true;
    result[this.resultName] = true;

    return result;
  }

}
