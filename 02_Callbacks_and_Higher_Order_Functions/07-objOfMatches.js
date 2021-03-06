// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

function objOfMatches(arr1, arr2, callback) {
	const keys = arr1.map(key => callback(key));
	return keys.reduce(function(acc, curr, idx, src) {
		if (arr2.indexOf(curr) > -1) {
			acc[curr.toLowerCase()] = curr;
    }
		return acc
  }, {})
}

var arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
var arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }