let fs = require("fs");
console.log("before");
// using sync function means the file will be loaded when it is said in the code
// so now suppose we have to read a big file , so while reading we wont be able to do any other work
// let data = fs.readFileSync("f1.txt");
let data = fs.readFile("f1.txt", cb);
function cb(err, data) {
  console.log("" + data);
}
console.log("after");
console.log("" + data);
