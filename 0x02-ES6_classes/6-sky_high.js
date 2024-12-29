// import Building from '5-building';

// export default class SkyHighBuilding extends Building {
//   constructor(sqft, floors) {
//     super(sqft);
//     this.floors = floors;
//   }

//   get floors() {
//     return this._floors;
//   }

//   set floors(newFloors) {
//     if (typeof newFloors === 'number') {
//       this._floors = newFloors;
//     } else {
//       throw new TypeError('Floors must be a number');
//     }
//   }

//   get sqft() {
//     return this._sqft;
//   }

//   evacuationWarningMessage() {
//     return `Evacuate slowly the ${this.floors} floors`;
//   }
// }
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
