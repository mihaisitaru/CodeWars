function list(names) {
  let rawString = "",
    eachName,
    finalString = "",
    i = -1;
  names.forEach(n => {
    i++;
    eachName =
      names.length - 2 === i ? n.name + " & " : (eachName = n.name + ", ");
    rawString += eachName;
    finalString = rawString.substring(0, rawString.lastIndexOf(","));
  });
  return finalString;
}

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Mihai" }
  ])
);
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Ana" }]));
console.log(list([{ name: "Bart" }]));
console.log(list([]));

function highAndLow(numbers) {
  numbers = numbers.split(" ").sort((x, y) => x - y);
  return numbers[numbers.length - 1] + " " + numbers[0];
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

function digPow(n, p) {
  var x = 0,
    i = -1,
    array = n.toString().split("");

  array.forEach(a => {
    i++;
    if (i < array.length) {
      x += Math.pow(array[i], p);
      p++;
    }
  });
  return x % n ? -1 : x / n;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));

function XO(str) {
  var x = 0,
    o = 0,
    array = str.toLowerCase().split("");
  array.forEach(letter => {
    letter === 'x' ? x++ : letter === 'o' ? o++ : true;
  });
  return x === o;
}

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));

console.log('From September 2019: ');

console.log('Maximum subarray sum - start');

var maxSequence = function (arr) {
  var thisMax = 0, theMax = 0;

  for (var i = 0; i < arr.length; i++) {
    thisMax = Math.max(0, thisMax + arr[i]);
    theMax = Math.max(thisMax, theMax);
  }
  return theMax <= 0 ? 0 : theMax;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([-1, -2, -3, -4, -5, -6, -7]));
console.log(maxSequence([]));
console.log(maxSequence([2, 1, 3, 4, 1, 2, 1, 5, 4]));

console.log('Maximum subarray sum - end');

console.log('Sum of Pairs - start');

var sum_pairs = function (ints, s) {
  var map = {},
    answer, answerMaxIndex = ints.length - 1;

  for (var i = 0; i <= answerMaxIndex; i++) {
    var first = ints[i];
    var second = s - first;
    var j = map[second];
    if (j !== undefined && i <= answerMaxIndex && j <= answerMaxIndex) {
      answerMaxIndex = i > j ? i : j;
      answer = i < j ? [first, second] : [second, first];
    }
    var tmp = map[first];
    if (tmp === undefined || i < tmp) {
      map[first] = i;
    }
  }
  return answer;
};

console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8));
console.log(sum_pairs([1, -2, 3, 0, -6, 1], -6));
console.log(sum_pairs([20, -13, 40], -7));
console.log(sum_pairs([1, 2, 3, 4, 1, 0], -2));

console.log('Sum of Pairs - end');

console.log('Does my number look big in this? - start');

function narcissistic(value) {
  let i = 0, j = 0,
    numbersArr = [],
    val = value.toString(),
    valLen = val.length;

  for (; i < valLen; i++) {
    numbersArr.push(val.slice(i, i + 1));
  }

  for (; j < valLen; j++) {
    numbersArr[j] = Math.pow(Math.floor(numbersArr[j]), numbersArr.length);
  }

  return value === numbersArr.reduce((a, b) => a + b, 0);
}

console.log(narcissistic(153));

console.log('Does my number look big in this? - end');

console.log('Find The Parity Outlier - start');

function findOutlier(integers) {
  let even = integers.filter(int => int % 2 == 0),
    odd = integers.filter(int => Math.abs(int % 2) == 1);

  if (even.length === 1) {
    return even[0];
  } else {
    return odd[0];
  }
}

console.log(findOutlier([0, 0, 0, 3, 0, 0]));
console.log(findOutlier([1, 4, 7, 9, 15]));

console.log('Find The Parity Outlier - end');

console.log('Number of trailing zeros of N! - start');

function zeros(n) {
  var count = 0, beginAt = 5;
  for (var i = beginAt; i <= n; i++) {
    var num = i;
    while (num % beginAt === 0) {
      num /= beginAt;
      count++;
    }
  }
  return count;
} 

console.log(zeros(0));
console.log(zeros(5));
console.log(zeros(6));
console.log(zeros(30));

console.log('Number of trailing zeros of N! - end');