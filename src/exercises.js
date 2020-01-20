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
 else{
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

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

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
