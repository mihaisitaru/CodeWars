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
