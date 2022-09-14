/*

Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.


*/

function divCon(x) {
	let realNum = 0
	let stringNum = 0
	
	x.map(num => (typeof num === 'string' ? (stringNum += Number(num)) : (realNum += 1)));
	}
