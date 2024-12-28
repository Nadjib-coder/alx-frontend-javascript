export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Cannot instantiate an abstract class');
    }
    if (this.evacuationWarningMessage === undefined) {
      throw new TypeError(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._newSqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._newSqft = newSqft;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }
}