// Parameters: A single array with multiple types of elements including numbers, strings, and booleans.
// Returns: A single array with the same elements, but the zeros are moved to the end of the array. The other elements should remain in the same location in the array.
// Examples: moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
// Pseudo-Code: Iterate over the starting array and identify the zeros. We could take the existing zeros and move them to the end of the array, or we could simply count the amount of zeros, remove them, and then append them to the end of the array.

//proposed solution - iterate throught the original array and assign each value to a new array depending on if it is a zero or not. After, we will concontenate the arrays.

function moveZeros(array){
    let others = []
    let zeros = []
    for(let i = 0; i < array.length; i++){
        array[i] === 0 ? zeros.push(array[i]) : others.push(array[i])
    }
    console.log ([...others,...zeros])
}

moveZeros([1, 2, true, false, '9', '0', 3, 0, 5, 6])