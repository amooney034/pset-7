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

  var array = [];

  if (!values || !Number.isInteger(n) || values.length < n || n < 0) {
    return array;
 } else {
   if (n === 0) {
     return values;
} else {
  for (let i = 0; i < n; i++) {
    if (values[i] !== undefined) {
      array.push(values[i]);
 }
 }
  for (let i = n; i > 0; i--) {
    if (values[values.length - i] !== undefined) {
        array.push(values[values.length - i]);
      }
    }
    return array;
  }
 }
}

function difference(numbers) {

  if (!numbers || numbers.some(isNaN) || numbers.length < 1) {
    return undefined;
  } else {
      if (numbers.length === 1) {
      return 0;
    } else {
      max = Number(Math.max.apply(null, numbers));
      min = Number(Math.min.apply(null, numbers));
    }
    return max - min;
  }
}

function max(number) {

    if (!number || number.length < 3 || number.length % 2 == 0) {
    return undefined;
  } if (number.some(isNaN)) {
    return undefined;
  }

  var last = number[number.length-1]
  var middle = number[((number.length / 2) - 1) + 0.5]
  var first = number[0]

    if ((last > first) && (last > middle)) {
    return last;
  } else if ((first > middle) && (first > last)) {
    return first;
  } else if ((middle > last) && (middle > first)) {
    return middle;
  } else {
    return first;
  }
}

function middle(values) {
 let array = [];

   if (values == undefined || values.length % 2 == 0 || values.length < 3 ){
   return [];

 } else {

   var middle1 = values[values.length - (Math.ceil(values.length / 2))]
   var middle2 = values[(values.length - 1) - (Math.ceil(values.length / 2))]

   array.push(middle2, middle1)

   return array;

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

     var result;

     if (!values || x === undefined || values.length < 1) {
       return false;
     } else {
       for (let i = 0; i < values.length - 1; i++) {
           if (values[i] === x) {
           result = 0;
         } else if (values[i - 1] === x || values[i + 1] === x) {
           result = 0;
         } else {
           result = 1;
           return false;
         }
       }
     } if (result === 0) {
       return true;
     }
   }

function consecutive(numbers) {
  var result;

   if (!numbers || numbers.length < 3 || numbers.some(isNaN) || numbers.some(Number.isInteger) === false) {
    return false;
  } else {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0 && numbers[i + 2] % 2 === 0) {
        result = 1;
        break;
      } else if (numbers[i] % 2 !== 0 && numbers[i + 1] % 2 !== 0 && numbers[i + 2] % 2 !== 0) {
        result = 1;
        break;
      } else {
      }
      } if (result === 1) {
        return true;
      } else {
        return false;
    }
  }
}

function balance(numbers) {

 var sum1 = 0
 var sum2 = 0
 var count = 0

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

  for (a = numbers.length; a > -1; a--) {
    sum1 = 0
    sum2 = 0
  for (b = numbers.length - a; b > -1; b--) {
    sum1 = sum1 + numbers[b]
 }
   for (c = numbers.length - 1; c > numbers.length - a; c--) {
    sum2 = sum2 + numbers[c]
 } if (sum2 === sum1) {
    return true;
 } } if (count == 0) {
     return false;
 }
 }

function clumps(values) {
  let clumps = 0;
  if (!values) {
    return -1;
  } else {

     for (let i = 0; i < values.length - 1; i++) {

      if (values[i - 1] === values[i]) {
    } else if (values[i] === values[i + 1]) {
        clumps++;
      }
    }
    return clumps;
  }
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

