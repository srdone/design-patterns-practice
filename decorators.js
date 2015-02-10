function Vehicle (vehicleType) {

	this.vehicleType = vehicleType || 'car';
	this.model = 'default';
	this.license = '00000-000';

}

var testInstance = new Vehicle('car');
console.log(testInstance);

var truck = new Vehicle('truck');

truck.setModel = function(modelName) {
	this.model = modelName;
};

truck.setColor = function (color) {
	this.color = color;
};

truck.setModel('CAT');
truck.setColor('blue');

console.log(truck);

var secondInstance = new Vehicle('car');
console.log(secondInstance);


/////////////

function MacBook() {
	this.cost = function () {return 997;};
	this.screenSize = function () { return 11.6;};
}

//Decorator 1
function memory(macbook) {
	var v = macbook.cost();
	macbook.cost = function() {
		return v + 75;
	};
}

//Decorator 2
function engraving(macbook) {
	var v = macbook.cost();
	macbook.cost = function () {
		return v + 200;
	};
}

function insurance(macbook) {
	var v = macbook.cost();
	macbook.cost = function () {
		return v + 250;
	};
}

console.log(mb.cost());

console.log(mb.screenSize());

var mb = new MacBook();
memory(mb);
engraving(mb);
insurance(mb)