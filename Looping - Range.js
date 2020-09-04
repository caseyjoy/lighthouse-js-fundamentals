function range(start, end, step){
  if (step <= 0 
    || start == undefined 
    || end == undefined 
    || step == undefined 
    || start > end)
    return [];

  let numberArrary = [];
  for (let currentNum = start; currentNum <= end; currentNum += step){
    numberArrary.push(currentNum);
  }
  return numberArrary;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(1,10, -1))
console.log(range(undefined, undefined, undefined));
console.log(range(10, 1, 1));