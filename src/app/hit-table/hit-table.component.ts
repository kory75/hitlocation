import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { LocationModel } from '../location.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-hit-table',
  templateUrl: './hit-table.component.html',
  styleUrls: ['./hit-table.component.scss']
})
export class HitTableComponent implements OnInit {

  constructor(
    private _locationService: LocationService
  ) { }

  public hitLocations: LocationModel[];
  public roleTable: LocationModel[];
  public displayedColumns: string[] = ['name', 'base', 'frontLeft', 'frontRight','backLeft', 'backRight', 'back', 'taller', 'shorter', 'shortReach', 'longReach'];
  public displayedColumnsShort: string[] = ['name', 'base', 'frontLeft', 'frontRight','backLeft', 'backRight', 'back'];

  ngOnInit(): void {
    this.hitLocations = this._locationService.getAllWithTotal();
    this.roleTable = this._locationService.getAllAccumulated();
  }

  getRoleValue(i: number, name: string): string {
    let startValue: number;
    let endValue: number;
    if(name === 'front') {
      startValue = i > 0 ? this.roleTable[i-1].base : 0;
      endValue = this.roleTable[i].base;
    } else {
      startValue = i > 0 ? this.roleTable[i-1].base + this.roleTable[i-1][name] : 0;
      endValue = this.roleTable[i].base + this.roleTable[i][name];
    }
    if (startValue === endValue) {
      return ' - ';
    } else {
      return (startValue + 1) + '% - ' + endValue + '%';
    }
  }

  getValue(value: number): string {
    return value === 0 ? ' - ' : value + '%';
  }

  getModifyer(value: number): string {
    return value === 0 ? ' - ' : value > 0 ? '+' + value + '%' : value + '%';
  }

}
