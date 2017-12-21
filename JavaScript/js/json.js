var text = '{ "sites" : [' +
'{ "name":"Runoob" , "url":"www.runoob.com" },' +
'{ "name":"Google" , "url":"www.google.com" },' +
'{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
var text2 ='{"our": [ '+
'{"name":"111" , "age":"111"},' + 
'{"name":"222" , "age":"222"},' + 
'{"name":"333" , "age":"333"} ]}';
var obj = JSON.parse(text);
console.log(obj.sites[1].name + " " + obj.sites[1].url);
var obj2 = JSON.parse(text2);
console.log(obj2.our[1].name);

var a = {
    name: "wewewe",
    age: 20
}
function myFunction(arg1,arg2) {
    this.name = arg1;
    this.age = arg2;
    return this.name;
}
console.log(myFunction(a.name,a.age));

var myObject = {
    firstName: "john",
    lastName: "Doe",
    fullName: function(){
        return this.firstName + " , " + this.lastName;
    }
}
console.log(myObject.fullName());

// 使用构造函数调用函数

var x = new myFunction("zhang",20);
console.log(x.name+ " , " + x.age);


// 计数器

var add = (function() {
    var counter = 0;
    
    return function() { return counter += 1; };
})();
console.log(add());
console.log(add());
console.log(add());