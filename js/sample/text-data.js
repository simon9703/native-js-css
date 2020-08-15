function Person(name, age) {
    this.age = age;
    this.name = name;

    this.mylog = function () {
        console.log(this.name, this.age);
    }

}

function xx() {
    console.log(this.name, this.age);
}


var pp = new Person('zsm', 11);
var array = ['aa', 'bb', 'cc'];
var array2 = ['50', '20', '30'];
var array3 = [{name:'aa'},{name:'bb'},{name:'cc'}]
var map = {'name2':{a:1,b:2},'name2':{a:1,b:2},'name2':{a:1,b:2}}
var map2 = {'name4':{a:1,b:2},'name5':{a:1,b:2},'name6':{a:1,b:2}}

var s = String("  今天 \"today to!  ");


// function rest(...vals) {
//     console.log("...:",vals)
//     for (let i of vals) {
//         console.log(i)
//     }
// }

// rest({name:'aa'},{name:'bb'},{name:'cc'})

let set = new Set(array);

let newmap = {name:'zzz',age:"ss"}


for (let item of newmap) {
    console.log(item)
}

console.log("=======")

for (let item of newmap.entries()) {
    console.log(item,item[0],item[1])
}

console.log("=======")

newmap.forEach((val,index)=> console.log(val,index))