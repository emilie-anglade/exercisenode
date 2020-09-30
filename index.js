const myInformations = require('./information.js');


var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello I'm ${myInformations.name} from ${myInformations.campus} campus!`,
	e : "oO",
	T : "U "
}));
