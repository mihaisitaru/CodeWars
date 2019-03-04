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
