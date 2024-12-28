export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Cannot instantiate an abstract class');
    }
    this.sqft = sqft;

    if (this.evacuationWarningMessage === undefined) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage method',
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  set(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }
}
