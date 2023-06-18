const arguments = process.argv.slice(2, process.argv.length);

const sum = arguments.reduce((acc, el) => acc + Number(el), 0);
console.log(sum)
return sum;