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

  public hitLocations: LocationModel[]
  public displayedColumns: string[] = ['name', 'base', 'frontLeft', 'frontRight','backLeft', 'backRight', 'back', 'taller', 'shorter', 'shortReach', 'longReach'];

  ngOnInit(): void {
    this.hitLocations = this._locationService.getAllWithTotal();
  }

}
