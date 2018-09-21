
function Pilot(name)
{
	this.name = name;

	let state;

	let origin;

	this.receiveData = (data) => {
		if (!data.state || !data.origin) {
			return false;
		}

		if (!typeof(data.state) == 'string' || !typeof(data.origin) == 'string') {
			return false;
		}

		state  = data.state;
		origin = data.origin;

		return this.speak();
	}

	this.needUpdate = () => {
		if (!state) {
			return true;
		}

		return false;
	}

	this.speak = () => {
		if (this.needUpdate()) {
			return false;
		}

		let phrase;

		switch (state) {
			case 'ready':
				phrase = 'Here we go!';
				break;

			case 'happy':
				phrase = 'Let\'s have some fun!';
				break;

			case 'sad':
				phrase = 'Outch!!! Damn ' + origin + '!';
				break;

			case 'normal':
				phrase = '';
				break;

			default: 
				phrase = 'Here we go!';
				break;
		}

		return phrase;
	}

	this.getState = () => {
		return state;
	}
}

function Vehicule (number, pilot) 
{
	this.name = '';

	this.number = number;

	this.pilot  = pilot;

	let weapon = null;

	let distance = 0;

	this.init = (conf) => {
		//
	}

	this.receiveData = (data) => {
		switch (data.event) {
			case 'start':
				break;

			case 'info':
				break;

			case 'attack':
				break;

			case 'weapon':
				break;

			case 'finish':
				break;
		}
	}

	this.needUpdate = () => {
		//
	}
}

function Voiture (number, pilot) 
{
	Vehicule.call(this, number, pilot)

	this.categorie = 'Voiture'
}

function Moto (number, pilot) 
{
	Vehicule.call(this, number, pilot)

	this.categorie = 'Moto'
}

function Circuit (turns)
{
	this.turns = turns;

	this.initGame = () => {
		for (var i = 0; i <= turns; i++) {
			setTimeout(() => {
				console.log('Turn ' + i)
			}, 1000)
		}
	}
}

let mario = new Pilot('Mario');
let data = {
	'state': 'sad',
	'origin': 'Luigi'
}

console.log(mario.needUpdate());
console.log(mario.receiveData(data));
console.log(mario.needUpdate());

let moto1 = new Moto(1, mario)

console.log(moto1.number)
console.log(moto1.pilot)
console.log(moto1.categorie)
console.log(moto1.pilot.speak())

let circuit = new Circuit(10);
circuit.initGame();

/**
var Test = function ()
{
	this.name = 'test';

	this.zboub = () => {
		console.log('Hello');
	}
}
let test = new Test();
console.log(test.name);
test.zboub();
*/


