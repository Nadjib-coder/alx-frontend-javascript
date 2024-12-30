export class ALXClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}
const class2019 = new ALXClass(2019, 'San Francisco');
const class2020 = new ALXClass(2020, 'San Francisco');

export class StudentALX {
  constructor(firstName, lastName, alxClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.alxClass = alxClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get alxClass() {
    return this._alxClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._alxClass.year} - ${self._alxClass.location}`;
  }
}

const student1 = new StudentALX('Guillaume', 'Salva', class2020);
const student2 = new StudentALX('John', 'Doe', class2020);
const student3 = new StudentALX('Albert', 'Clinton', class2019);
const student4 = new StudentALX('Donald', 'Bush', class2019);
const student5 = new StudentALX('Jason', 'Sandler', class2019);

export const listOfStudents = [
  student1,
  student2,
  student3,
  student4,
  student5,
];
