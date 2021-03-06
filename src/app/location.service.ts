import { Injectable } from '@angular/core';
import { LocationModel } from './location.model';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    private _location: LocationModel[] = [
        { name: 'face',          base: 5, frontLeft: -1, frontRight: -1, backLeft: -4, backRight: -4, back: -5, taller: -5, shorter:  5, shortReach:  0, longReach: 0 ,humanReadable: "Face" },
        { name: 'skull',         base: 4, frontLeft:  1, frontRight:  1, backLeft:  4, backRight:  4, back:  5, taller: -4, shorter:  4, shortReach:  0, longReach: 0 ,humanReadable: "Skull" },
        { name: 'neck',          base: 1, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller: -1, shorter:  1, shortReach:  0, longReach: 0 ,humanReadable: "Neck" },

        { name: 'lArm',          base: 5, frontLeft: -4, frontRight:  4, backLeft: -4, backRight:  4, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Arm" },
        { name: 'lElbow',        base: 2, frontLeft: -1, frontRight:  1, backLeft: -1, backRight:  1, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Elbow" },
        { name: 'lForeArm',      base: 5, frontLeft: -4, frontRight:  4, backLeft: -4, backRight:  4, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Forearm" },
        { name: 'lHand',         base: 3, frontLeft: -2, frontRight:  2, backLeft: -2, backRight:  2, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Hand" },
        { name: 'rArm',          base: 5, frontLeft:  4, frontRight: -4, backLeft:  4, backRight: -4, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Arm" },
        { name: 'rElbow',        base: 2, frontLeft:  1, frontRight: -1, backLeft:  1, backRight: -1, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Elbow" },
        { name: 'rForeArm',      base: 5, frontLeft:  4, frontRight: -4, backLeft:  4, backRight: -4, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Forearm" },
        { name: 'rHand',         base: 3, frontLeft:  2, frontRight: -2, backLeft:  2, backRight: -2, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Hand" },

        { name: 'lShoulder',     base: 3, frontLeft: -2, frontRight:  2, backLeft: -2, backRight:  2, back:  0, taller: -2, shorter:  2, shortReach:  0, longReach: 0 ,humanReadable: "Left Shoulder" },
        { name: 'rShoulder',     base: 3, frontLeft:  2, frontRight: -2, backLeft:  2, backRight: -2, back:  0, taller: -2, shorter:  2, shortReach:  0, longReach: 0 ,humanReadable: "Right Shoulder" },
        { name: 'chest',         base: 5, frontLeft:  0, frontRight:  0, backLeft: -5, backRight: -5, back: -5, taller: -1, shorter:  1, shortReach:  0, longReach: 0 ,humanReadable: "Chest" },
        { name: 'heart',         base: 1, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Heart" },
        { name: 'lungs',         base: 3, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Lungs" },
        { name: 'abdomen',       base: 6, frontLeft:  0, frontRight:  0, backLeft: -6, backRight: -6, back: -6, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Abdomen" },
        { name: 'hips',          base: 5, frontLeft:  0, frontRight:  0, backLeft:  0, backRight:  0, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Hips" },
        { name: 'lShoulderblade',base: 0, frontLeft:  0, frontRight:  0, backLeft:  2, backRight:  6, back:  4, taller: -2, shorter:  2, shortReach:  0, longReach: 0 ,humanReadable: "Left Shoulder Blade" },
        { name: 'rShoulderblade',base: 0, frontLeft:  0, frontRight:  0, backLeft:  6, backRight:  2, back:  4, taller: -2, shorter:  2, shortReach:  0, longReach: 0 ,humanReadable: "Right Shoulder Blade" },
        { name: 'spine',         base: 0, frontLeft:  0, frontRight:  0, backLeft:  3, backRight:  3, back:  3, taller: -1, shorter:  1, shortReach:  0, longReach: 0 ,humanReadable: "Spine" },

        { name: 'lThight',       base: 6, frontLeft: -5, frontRight:  5, backLeft: -5, backRight:  5, back:  0, taller:  1, shorter: -1, shortReach:  0, longReach: 0 ,humanReadable: "Left Thight" },
        { name: 'lKnee',         base: 2, frontLeft: -1, frontRight:  1, backLeft: -1, backRight:  1, back:  0, taller:  2, shorter: -2, shortReach:  0, longReach: 0 ,humanReadable: "Left Knee :)" },
        { name: 'lShin',         base: 5, frontLeft: -4, frontRight:  3, backLeft: -5, backRight: -2, back: -5, taller:  2, shorter: -2, shortReach:  0, longReach: 0 ,humanReadable: "Left Shin" },
        { name: 'lCalf',         base: 0, frontLeft:  0, frontRight:  1, backLeft:  1, backRight:  6, back:  5, taller:  2, shorter: -2, shortReach:  0, longReach: 0 ,humanReadable: "Left Calf" },
        { name: 'lAnkel',        base: 1, frontLeft: -1, frontRight:  1, backLeft: -1, backRight:  1, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Ankel" },
        { name: 'lFoot',         base: 3, frontLeft: -2, frontRight:  2, backLeft: -2, backRight:  2, back:  0, taller:  3, shorter: -3, shortReach:  0, longReach: 0 ,humanReadable: "Left Foot" },
        { name: 'rThight',       base: 6, frontLeft:  5, frontRight: -5, backLeft:  5, backRight: -5, back:  0, taller:  1, shorter: -1, shortReach:  0, longReach: 0 ,humanReadable: "Right Thight" },
        { name: 'rKnee',         base: 2, frontLeft:  1, frontRight: -1, backLeft:  1, backRight: -1, back:  0, taller:  2, shorter: -2, shortReach:  0, longReach: 0 ,humanReadable: "Right Knee :)" },
        { name: 'rShin',         base: 5, frontLeft:  3, frontRight: -4, backLeft: -2, backRight: -5, back: -5, taller:  2, shorter: -2, shortReach:  0, longReach: 0 ,humanReadable: "Right Shin" },
        { name: 'rCalf',         base: 0, frontLeft:  1, frontRight:  0, backLeft:  6, backRight:  1, back:  5, taller:  2, shorter: -2, shortReach:  0, longReach: 0 ,humanReadable: "Right Calf" },
        { name: 'rAnkel',        base: 1, frontLeft:  1, frontRight: -1, backLeft:  1, backRight: -1, back:  0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Ankel" },
        { name: 'rFoot',         base: 3, frontLeft:  2, frontRight: -2, backLeft:  2, backRight: -2, back:  0, taller:  3, shorter: -3, shortReach:  0, longReach: 0 ,humanReadable: "Right Foot" },
      ]
    private _locationSerpent: LocationModel[] = [
        { name: 'head',      base: 40, frontLeft:-40, frontRight:-40, backLeft:-40, backRight:-40, back: -40, taller:  0, shorter:  5, shortReach:  0, longReach: 0 ,humanReadable: "Head" },
        { name: 'heart',     base: 1,  frontLeft:  0, frontRight:  0, backLeft: -1, backRight: -1, back:  -1, taller: -1, shorter: -1, shortReach:  0, longReach: 0 ,humanReadable: "Heart" },
        { name: 'lungs',     base: 5,  frontLeft:  5, frontRight:  5, backLeft: -4, backRight: -4, back:  -5, taller: -3, shorter: -1, shortReach:  0, longReach: 0 ,humanReadable: "Lungs" },
        { name: 'ribs',      base: 40, frontLeft: 28, frontRight: 28, backLeft: 13, backRight: 13, back:   0, taller:  0, shorter: -5, shortReach:  0, longReach: 0 ,humanReadable: "Ribs" },
        { name: 'stomach',   base: 10, frontLeft:  5, frontRight:  5, backLeft: 10, backRight: 10, back:  16, taller:-10, shorter:-10, shortReach:  0, longReach: 0 ,humanReadable: "Stomach" },
        { name: 'spine',     base: 4,  frontLeft:  2, frontRight:  2, backLeft:  2, backRight:  2, back:   0, taller: 14, shorter: 10, shortReach:  0, longReach: 0 ,humanReadable: "Spine" },
        { name: 'tail',      base: 0,  frontLeft:  0, frontRight:  0, backLeft: 20, backRight: 20, back:  30, taller:  0, shorter:  2, shortReach:  0, longReach: 0 ,humanReadable: "Tail" },
    ]

    private _locationArachnid: LocationModel[] = [
        { name: 'cephalothorax', base: 25, frontLeft: -5, frontRight:  0, backLeft:-20, backRight:-20, back: -25, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Cephalothorax" },
        { name: 'eyes',          base:  8, frontLeft: -3, frontRight: -3, backLeft: -8, backRight: -8, back:  -8, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Eyes" },
        { name: 'fangs',         base:  8, frontLeft: -3, frontRight: -3, backLeft: -8, backRight: -8, back:  -8, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Fangs" },
        { name: 'pedipalps',     base:  9, frontLeft: -4, frontRight: -3, backLeft: -9, backRight: -9, back:  -8, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Pedipalps" },
        { name: 'stomach',       base:  3, frontLeft: -2, frontRight: -2, backLeft: -3, backRight: -3, back:  -3, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Stomach" },

        { name: 'abdomen',       base:  0, frontLeft:  1, frontRight:  0, backLeft: 35, backRight: 15, back:  38, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Abdomen" },
        { name: 'spinnerets',    base:  0, frontLeft:  0, frontRight:  0, backLeft:  5, backRight:  5, back:   9, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Spinnerets" },
        { name: 'hearth',        base:  0, frontLeft:  0, frontRight:  0, backLeft:  1, backRight:  1, back:   1, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Spinnerets" },
        { name: 'lungs',         base:  0, frontLeft:  3, frontRight:  3, backLeft:  2, backRight:  2, back:   2, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Spinnerets" },

        { name: 'lLeg1',         base: 15, frontLeft:-10, frontRight: 17, backLeft:-15, backRight:-40, back: -15, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Leg 1" },
        { name: 'lLeg2',         base: 10, frontLeft:-10, frontRight: 12, backLeft:-10, backRight:-40, back: -10, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Leg 2" },
        { name: 'lLeg3',         base:  0, frontLeft:  0, frontRight:  5, backLeft: 10, backRight:-40, back:  15, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Leg 3" },
        { name: 'lLeg4',         base:  0, frontLeft:  0, frontRight:  0, backLeft: 15, backRight:-40, back:  15, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Left Leg 4" },

        { name: 'rLeg1',         base: 15, frontLeft: 17, frontRight:-10, backLeft:-15, backRight:-40, back: -15, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Leg 1" },
        { name: 'rLeg2',         base: 10, frontLeft: 12, frontRight:-10, backLeft:-10, backRight:-40, back: -10, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Leg 2" },
        { name: 'rLeg3',         base:  0, frontLeft:  5, frontRight:  0, backLeft:  0, backRight:-40, back:  10, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Leg 3" },
        { name: 'rLeg4',         base:  0, frontLeft:  0, frontRight:  0, backLeft:  5, backRight:-40, back:  15, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Right Leg 4" },
    ]

        constructor() {
    }

    getAll(targetType: string): LocationModel[] {
        const targetLocation = this.getLocationByType(targetType);
        return targetLocation;
      }


    getAllWithTotal(targetType: string): LocationModel[] {
        const targetLocation = this.getLocationByType(targetType);
        const totalBase: LocationModel = targetLocation.reduce( (total , row) =>
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
        let result: LocationModel[] = [...this.getLocationByType(targetType)];
        result.push(totalBase);
        return result;
    }

  getAllAccumulated(targetType): LocationModel[] {
    const targetLocation = this.getLocationByType(targetType);
    let total: LocationModel =
    { name: 'total', base: 0, frontLeft: 0, frontRight: 0, backLeft: 0, backRight: 0, back: 0, taller:  0, shorter:  0, shortReach:  0, longReach: 0 ,humanReadable: "Total" };
    const result: LocationModel[] = [];
    targetLocation.forEach((row, index) => {
      total = {
        name:       row.name,
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
        humanReadable: row.humanReadable
      }
      result.push(total);
    });
    return result;
  }

  findRoll(targetType: string, roll: number, direction: string, height: string, reach: string): LocationModel {
    let rowTotal = 0;
    let targetLocation = this.getLocationByType(targetType);
    return targetLocation.find( row => {
      rowTotal += row.base +
        (direction && direction !== 'front' ? row[direction] : 0) +
        (height && height !== 'same' ? row[height] : 0) +
        (reach && reach !== 'normal' ? row[reach] : 0);
      return rowTotal >= roll ? true : false;
    });
  }

      private getLocationByType(targetType: string): LocationModel[] {
            switch(targetType) {
                case 'arachnid':
                    return this._locationArachnid;
                    break;
                case 'serpent':
                    return this._locationSerpent;
                    break;
                case 'bipedal':
                default:
                    return this._location;
                    break;
            }
      }

}
