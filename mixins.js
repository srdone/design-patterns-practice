var myMixins = {

	moveUp: function () {
		console.log('move up');
	},

	moveDown: function() {
		console.log('move down');
	},

	stop: function() {
		console.log('stop');
	}

};


function CarAnimator() {
	this.moveLeft = function () {
		console.log('move left');
	};
}

function PersonAnimator() {
	this.moveRandomly = function() {};
}

//assuming the underscore library
_.extend( CarAnimator.prototype, myMixins);
_.extend( PersonAnimator.prototype, myMixins);

var myAnimator = new CarAnimator;
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();

var Car = function (settings) {

	this.model = settings.model || 'no model provided';
	this.color = settings.color || 'no color provided';

};

var Mixin = function () {};

Mixin.prototype = {

	driveForward: function () {
		console.log('drive forward');
	},

	driveBackward: function() {
		console.log('drive backward');
	},

	driveSideways: function () {
		console.log('drive sideways');
	}

};

function augment (receivingClass, givingClass) {

	// only provide certain methods
	if (arguments[2]) {
		for (var i = 2, len = arguments.length; i < len; i++) {
			receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
		}
	}

	else {

		for (var methodName in givingClass.prototype) {

			if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
				receivingClass.prototype[methodName] = givingClass.prototype[methodName];
			}

		}

	}

}

augment(Car, Mixin, 'driveForward', driveBackward);

var myCar = new Car({
	model: 'Ford Escort',
	color: 'blue'
});

myCar.driveForward();
myCar.driveBackward();

augment(Car, Mixin);

var mySportsCar = new Car({
	model: 'Porche',
	color: 'red'
});

mySportsCar.driveSideways();