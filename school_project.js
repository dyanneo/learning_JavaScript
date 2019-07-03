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
    constructor(name) {
        this._name = name;
        this._level = 'primary';
        this._numberOfStudents = 0;
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
    quickFacts() {

    }
    static pickSubstituteTeacher() {

    }
}
class Primary extends School {
    constructor(name) {
        super(name);
        this._pickupPolicy = '';
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}
class Middle extends School {
    constructor(name) {
        super(name);
    }
}
class High extends School {
    constructor(name) {
        super(name);
        this._sportsTeams = [];
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}