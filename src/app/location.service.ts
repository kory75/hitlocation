import { Injectable } from '@angular/core';
import { LocationModel } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _location: LocationModel[] = [
    { name: 'face',           base: 5, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back: -5, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'skull',          base: 4, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  5, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'neck',           base: 1, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    
    { name: 'lArm',           base: 5, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lElbow',      base: 2, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lForeArm',       base: 5, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lHand',          base: 3, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'rArm',           base: 5, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'rElbow',         base: 2, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'rForeArm',       base: 5, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'rHand',          base: 3, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },

    { name: 'lShoulder',      base: 3, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'rShoulder',      base: 3, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'chest',          base: 5, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back: -5, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'heart',          base: 1, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lung',           base: 3, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'abdomen',        base: 6, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back: -6, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'hips',           base: 5, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lShoulderblade', base: 0, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  4, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'rShoulderblade', base: 0, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  4, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'spine',          base: 0, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  3, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },

    { name: 'lThight',        base: 6, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lKnees',         base: 2, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lShin',          base: 5, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lCalf',          base: 0, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lAnkel',         base: 1, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lFoot',          base: 3, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'rThight',        base: 6, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'rKnees',         base: 2, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'rShin',          base: 5, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back: -5, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lCalf',          base: 0, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  5, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lAnkel',         base: 1, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
    { name: 'lFoot',          base: 3, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 },
  ]

  constructor() { }

  getAll() {
    return this._location;
  }

  getAllWithTotal() {
    const totalBase: LocationModel = this._location.reduce( (total , row) =>  
    ({  name: 'total', 
        base:       total.base + row.base, 
        frontLeft:  total.frontLeft + row.frontLeft, 
        frontRight: total.frontRight + row.frontRight, 
        backLeft:   total.backLeft + row.backLeft, 
        backRight:  total.backRight + row.backRight, 
        back:       total.back  + row.back, 
        taller:     total.taller + row.taller, 
        shorter:    total.shorter + row.shorter, 
        shortReach: total.shortReach + row.shortReach, 
        longReach:  total.longReach + row.longReach })
    );
    const result = this._location;
    result.push(totalBase);
    return result;
  }

  findRoll(roll: number, direction: string, height: string, reach: string) {
    let rowTotal = 0;
    return this._location.find( row => {
      rowTotal += row.base + 
        (direction && direction !== 'front' ? row[direction] : 0) + 
        (height && height !== 'same' ? row[height] : 0) + 
        (reach && reach !== 'normal' ? row[reach] : 0);
      return rowTotal > roll ? true : false;
    });
  }

}
