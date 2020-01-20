function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  let firstA = a[0]
  let firstB = b[0]
  let lastA = a[a.length - 1];
  let lastB = b[b.length - 1];

  if ((firstA === firstB) || (lastA === lastB)) {
    return true;
  }
  else {
    return false;
  }
}

function endsMeet(values, n) {
 let blankArray = [];

 if (!values || values.length < n || !Number.isInteger(n) || n < 0) {
 return blankArray;
 } else {
 if (n === 0) {
 return values;
 } else {
 for (let i = 0; i < n; i++) {
 if (values[i] !== undefined) {
 blankArray.push(values[i]);
 }
 }
 for (let i = n; i > 0; i--) {
 if (values[values.length - i] !== undefined) {
 blankArray.push(values[values.length - i]);
 }
 }
 return blankArray;
 }
 }
 }

function difference(numbers) {
 if (!numbers || numbers.length < 1 || numbers.some(isNaN)){
 return undefined;
 } else {
 let max = Number(Math.max.apply(null, numbers));
 let min = Number(Math.min.apply(null, numbers));
 let diff = max - min;
 return diff;
 }
 }

function max(number) {
 if (!number || number.length < 3 || number.some(isNaN) || number.length % 2 == 0) {
 return undefined;
 }
 else {
 var last = number[number.length - 1];
 var mid = number[(number.length - 1)/2];
 var fir = number[0];
 if(last >= mid && last >= fir) {
 return last;
 }
 else if(mid >= last && mid >= fir) {
 return mid;
 }
 else if(fir >= last && fir >= mid) {
 return fir;
 }
 }
 }

function middle(values) {
 let blankArray = [];
 if (values == undefined ||  values.length < 3 || values.length%2 == 0 ){
 return [];
 }

 else {
 let middle = values[values.length - (Math.ceil(values.length / 2))]
 let secondMiddle = values[(values.length - 1) - (Math.ceil(values.length / 2))]

 blankArray.push(secondMiddle, middle)

 return blankArray;
 }
 }

function increasing(numbers) {
 if (numbers == undefined || numbers == []) {
 return undefined;

 } else if (numbers.length < 3 || numbers.some(isNaN)) {
 return undefined;
 } else {

 for (let i = 1; i < numbers.length; i++) {
 if ((numbers[i - 1] + 1) === numbers[i]) {
 i++
 if ((numbers[i - 1] + 1) === numbers[i]) {
 return true;
 break;
 } else {
 continue;
 }
 } else {
 continue;
 }
 }
 return false;
 }
 }

function everywhere(values, x) {
 if (values == undefined || x === undefined) {
 return false;
 } else if (values.length < 1) {
    return false;
 } else if (!values.includes(x)) {
    return false;
 } else {

 for (let y = values.indexOf(x); y < values.length; y++) {
 if (values[y] === values[y + 1] && values[y + 1] !== undefined) {
 return true;
 break;
 } else if (x === 0) {
 return false;
 break;
 } else if (values[y] === values[y + 2] && values[y + 2] !== undefined && values[y + 1] !== values[y]) {
 return true;
 break;
 } else if (values[y] === values[y + 3] && values[y + 3] !== undefined && (values[y + 1] && values[y + 2]) !== values[y + 3]) {
 return true;
 break;
 } else {
 return false;
 break;
 }
 }
 }
 }

function consecutive(numbers) {
 if (!numbers || numbers.length < 3) {
 return false;
 }
 let quiz = false;
 for (let i = 0; i < numbers.length - 2; i++ ) {
 let a = numbers[i];
 let b = numbers[i + 1];
 let c = numbers[i + 2];
 if (Number.isInteger(a) == false || Number.isInteger(b) == false || Number.isInteger(c) == false ) {
 return false;
 }
 if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
 quiz = true;
 } else if (a % 2 == 1 && b % 2 == 1 && c % 2 == 1) {
 test = true;
 }

 }
 return quiz;
 }

function balance(numbers) {
 let big = 0
 let sumOne = 0
 let sumTwo = 0
 let count = 0
 if (!numbers || numbers.length < 2) {
 return false;
 }
 for (i = 0; i < numbers.length; i++) {
 if (!(Number.isInteger(numbers[i]))) {
 return false;
 }
 }
 for (z = 0; z < numbers.length; z++) {
 if (numbers[z] == undefined) {
 return true;
 }
 }
 for (x = numbers.length; x > -1; x--) {
 sumOne = 0
 sumTwo = 0
 for(y = numbers.length - x; y > -1; y--) {
 sumOne = sumOne + numbers[y]
 }
 for(a = numbers.length - 1; a > numbers.length - x; a--) {
 sumTwo = sumTwo + numbers[a]
 }
 if (sumTwo == sumOne) {
 count = 1
 return true;
 }
 }
 if (count == 0) {
 return false;
 }
 }

function clumps(values) {
 if (!values) {
 return -1;
 }
 if (values.length < 2) {
 return 0;
 }
 let last = values[0];
 let current;
 let clump = 0
 let one = 0
 let count2 = 0
 for (x = 1; x < values.length; x++) {
 current = values[x]
 if (last === current) {
 clump = clump + 1
 for (y = x; y < values.length; y++) {
 last = current
 current = values[y]
 if (!(last === current)) {
 one = 1
 x = y
 break;
 }
 else {
 one = -1
 }
 }
 }
 if (one == -1) {
 break;
 }
 last = current
 }
 return clump;
 }

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
