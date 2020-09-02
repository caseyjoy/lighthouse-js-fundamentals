var num = 99;

while (num > 0) {
  let numS = (num == 0 || num > 1) ? "s" : "";
  let numMinusS = (num-1 == 0 || num-1 > 1) ? "s" : "";
  console.log(num+" bottle"+numS+" of juice on the wall! "+num+" bottle"+numS+" of juice! Take one down, pass it around... "+(num-1)+" bottle"+numMinusS+" of juice on the wall!")
  num--;
}
