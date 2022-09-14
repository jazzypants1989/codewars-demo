/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"

*/

function divCon(x) {
	let realNum = 0
	let stringNum = 0
	
	x.map(num => (typeof num === 'string' ? (stringNum += Number(num)) : (realNum += 1)));
	}
