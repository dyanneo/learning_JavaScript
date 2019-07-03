/*
School
Properties: 
    name (string), 
    level (one of three strings: 'primary', 'middle', or 'high'), and 
    numberOfStudents (number)
Getters: 
    all properties have getters
Setters: the 
    numberOfStudents property has a setter
Methods: 
    .quickFacts() and 
    .pickSubstituteTeacher() (this is a static method)

Primary
Includes everything in the School class, plus one additional property
Properties: 
    pickupPolicy (string)

Middle
Does not include any additional properties or methods

High
Includes everything in the School class, plus one additional property
Properties: 
    sportsTeams (array of strings)
*/

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(num) {
      if (typeof num === 'number') {
        this._numberOfStudents = num;
        } else {
        return 'Invalid Input: numberOfStudents must be set to a Number.'
      }
    }
    quickFacts() {
			return `${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`
    }
    static pickSubstituteTeacher(substituteTeachers) {
        console.log(substituteTeachers);
        const picker = Math.floor(Math.random() * substituteTeachers.length);
        console.log(picker);
        return substituteTeachers[picker];
    }
}
class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}
class Middle extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}
class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' );
console.log(lorraineHansbury);
console.log(lorraineHansbury.quickFacts());
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
const alSmith = new HighSchool('Al E. Smith',415,['Baseball','Basketball','Volleyball','Track and Field']);
console.log(alSmith.sportsTeams);