import { Injectable } from '@angular/core';
import { LocationModel } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _location: LocationModel[] = [
    { name: 'face',           base: 5, frontLeft: -1, frontRight: -1, backLeft: -4, backRight: -4, back: -5, taller: -5, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Face" },
    { name: 'skull',          base: 4, frontLeft:  1, frontRight:  1, backLeft:  4, backRight:  4, back:  5, taller: -4, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Skull" },
    { name: 'neck',           base: 1, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller: -1, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Neck" },
    
    { name: 'lArm',           base: 5, frontLeft: -4, frontRight:  4, backLeft: -4, backRight:  4, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Arm" },
    { name: 'lElbow',         base: 2, frontLeft: -1, frontRight:  1, backLeft: -1, backRight:  1, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Elbow" },
    { name: 'lForeArm',       base: 5, frontLeft: -4, frontRight:  4, backLeft: -4, backRight:  4, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Forearm" },
    { name: 'lHand',          base: 3, frontLeft: -2, frontRight:  2, backLeft: -2, backRight:  2, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Hand" },
    { name: 'rArm',           base: 5, frontLeft:  4, frontRight: -4, backLeft:  4, backRight: -4, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Arm" },
    { name: 'rElbow',         base: 2, frontLeft:  1, frontRight: -1, backLeft:  1, backRight: -1, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Elbow" },
    { name: 'rForeArm',       base: 5, frontLeft:  4, frontRight: -4, backLeft:  4, backRight: -4, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Forearm" },
    { name: 'rHand',          base: 3, frontLeft:  2, frontRight: -2, backLeft:  2, backRight: -2, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Hand" },

    { name: 'lShoulder',      base: 3, frontLeft: -2, frontRight:  2, backLeft: -2, backRight:  2, back:  0, taller: -2, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Shoulder" },
    { name: 'rShoulder',      base: 3, frontLeft:  2, frontRight: -2, backLeft:  2, backRight: -2, back:  0, taller: -2, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Shoulder" },
    { name: 'chest',          base: 5, frontLeft:  0, frontRight:  0, backLeft: -5, backRight: -5, back: -5, taller: -1, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Chest" },
    { name: 'heart',          base: 1, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Heart" },
    { name: 'lungs',          base: 3, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Lungs" },
    { name: 'abdomen',        base: 6, frontLeft:  0, frontRight:  0, backLeft: -6, backRight: -6, back: -6, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Abdomen" },
    { name: 'hips',           base: 5, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Hips" },
    { name: 'lShoulderblade', base: 0, frontLeft:  0, frontRight:  0, backLeft:  2, backRight:  6, back:  4, taller: -2, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Shoulder Blade" },
    { name: 'rShoulderblade', base: 0, frontLeft:  0, frontRight:  0, backLeft:  6, backRight:  2, back:  4, taller: -2, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Shoulder Blade" },
    { name: 'spine',          base: 0, frontLeft:  0, frontRight:  0, backLeft:  3, backRight:  3, back:  3, taller: -1, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Spine" },

    { name: 'lThight',        base: 6, frontLeft: -5, frontRight:  5, backLeft: -5, backRight:  5, back:  0, taller:  1, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Thight" },
    { name: 'lKnees',         base: 2, frontLeft: -1, frontRight:  1, backLeft: -1, backRight:  1, back:  0, taller:  2, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Knees" },
    { name: 'lShin',          base: 5, frontLeft: -4, frontRight:  3, backLeft: -5, backRight: -2, back: -5, taller:  2, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Shin" },
    { name: 'lCalf',          base: 0, frontLeft:  0, frontRight:  1, backLeft:  1, backRight:  6, back:  5, taller:  2, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Calf" },
    { name: 'lAnkel',         base: 1, frontLeft: -1, frontRight:  1, backLeft: -1, backRight:  1, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Ankel" },
    { name: 'lFoot',          base: 3, frontLeft: -2, frontRight:  2, backLeft: -2, backRight:  2, back:  0, taller:  3, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Foot" },
    { name: 'rThight',        base: 6, frontLeft:  5, frontRight: -5, backLeft:  5, backRight: -5, back:  0, taller:  1, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Thight" },
    { name: 'rKnees',         base: 2, frontLeft:  1, frontRight: -1, backLeft:  1, backRight: -1, back:  0, taller:  2, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Knees" },
    { name: 'rShin',          base: 5, frontLeft:  3, frontRight: -4, backLeft: -2, backRight: -5, back: -5, taller:  2, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Shin" },
    { name: 'rCalf',          base: 0, frontLeft:  1, frontRight:  0, backLeft:  6, backRight:  1, back:  5, taller:  2, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Calf" },
    { name: 'rAnkel',         base: 1, frontLeft:  1, frontRight: -1, backLeft:  1, backRight: -1, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Ankel" },
    { name: 'rFoot',          base: 3, frontLeft:  2, frontRight: -2, backLeft:  2, backRight: -2, back:  0, taller:  3, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Foot" },
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
        longReach:  total.longReach + row.longReach,
        humanReadable: "Total" })
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
