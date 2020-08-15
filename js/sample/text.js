var obj = new Object();
obj.aa = function() {};

function justify (o, native) {
    console.log('instance:', o instanceof native);
    console.log('typeof:', typeof o);
}

var tem1 = 1;
var tem2 = "sss";
var tem3 = true;
var tem4 = Symbol();
var tem5 = null;
var tem6 = undefined;
var tem7 = {name:'张思蒙'};
var tem8 = ["zz","ss","ww"];
var tem9 = function(){ console.log("its a function!")};
var tem10 = new Date();
var tem11 = String('aa');
var tem12 = new String('aa');



var obj1 = new Object(tem1);
var obj2 = new Object(tem2);
var obj3 = new Object(tem3);
var obj4 = new Object(tem4);
var obj5 = new Object(tem5);
var obj6 = new Object(tem6);
var obj7 = new Object(tem7);
var obj8 = new Object(tem8);
var obj9 = new Object(tem9);
var obj10 = new Object(tem10);
var obj11 = new Object(tem11);
var obj12 = new Object(tem12);


var per = null;

var array = [tem1,tem2,tem3,tem4,tem5,tem6,tem7,tem8,tem9,tem10,tem11]
var array2 = [obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11];
// for(var i of array) {
//     console.log(i,':',typeof i);
// }
// console.log(tem8 instanceof Object);
// console.log(tem8 instanceof Array);
let a = 2
console.log(typeof a)
