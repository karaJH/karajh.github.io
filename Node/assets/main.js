var fs = require("fs");

var data = fs.readFileSync("input.txt");

console.log(data.toString());
console.log("程序执行结束！");

// 阻塞代码实例