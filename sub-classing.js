var Person = function (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.gender = "male";
};

var clark = new Person('Clark', 'Kent');

var Superhero = function (firstName, lastName, powers) {

	Person.call(this, firstName, lastName);

	this.powers = powers;

};

Superhero.prototype = Objec.create(Person.prototype);
var superman = new Superhero('Clark', 'Kent', ['flight', 'heat-vision']);
console.log(superman);