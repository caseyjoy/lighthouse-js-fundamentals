var x = 1;

while (x <= 20) {
    let out = "";
    if (x % 3 === 0) out+="Julia";
    if (x % 5 === 0) out+="James";
    if (x % 3 !== 0 && x % 5 !== 0) out = x;
    console.log(out);
    x += 1;
}
