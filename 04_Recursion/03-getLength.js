// Create recursive fxn that returns it's arguments length without using native .length method.

// What's my base-case? (How can I ensure the recursion will fail?)

// default parameter counter

// edge-cases?


function getLength(arr, i = 0) {
  let a = [...arr];
  if (a[0] !== undefined || a.indexOf() > -1) {
    a.pop();
    return getLength(a, ++i);
  } else return i;
}

console.log(getLength([""])); // 1
console.log(getLength(["", ""])); // 2
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
console.log(getLength([,,,,])); // -> 4 x empty
console.log(getLength([null])); // -> 1
console.log(getLength([null, null]))  // -> 2
console.log(getLength([NaN])) // -> 1
console.log(getLength([NaN, NaN, NaN])) // -> 3
console.log(getLength([undefined])); // -> 1
console.log(getLength([undefined, undefined, undefined])); // -> 3
