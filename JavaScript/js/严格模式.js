// 严格模式
"use strict";
var a = 2;
console.log(a);

// 不允许对只读属性赋值:
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:true});

obj.x = 3.14; //报错


// Return 语句使用注意事项
function myFunction(a) {
    var
    power = 10
    return a * power
}
 console.log(myFunction(2));