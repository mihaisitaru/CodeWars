function list(names) {
  let rawString = '',
      eachName,
      finalString = '',
      i = -1;
  names.forEach(n => {
    i++;
    eachName = names.length - 2 === i ? n.name + ' & ' : eachName = n.name + ', ';
    rawString += eachName;
    finalString = rawString.substring(0, rawString.lastIndexOf(","));
  });
  return finalString;
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Mihai'} ]));
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Ana'} ]));
console.log(list([ {name: 'Bart'} ]));
console.log(list([]));

function highAndLow(numbers){
  numbers = numbers.split(' ').sort((x, y) => x - y);
  return numbers[numbers.length - 1] + ' ' + numbers[0];
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
