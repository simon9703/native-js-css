"use strict";
let num = 122244;
let num2 = 11;
let n3 = 0x123;
let n4 = Infinity;
let n5 = 0b10101;
let s = 'ss';
let s2 = 'ss';
let s3 = `iam ${s}`;
let bb = new Boolean();
let Bb = true;
let uu = undefined;
let nn = null;
let sym = Symbol(1);
let nev;
let aa = '123';
// aa = '1234'
// aa = ['1']
// aa = 123
// aa.length
let tt = null;
let tt2 = [1, 2, 3];
let tt3;
tt3 = '22';
tt3 = 123;
let pp = {
    name: 'nn',
    age: 11,
    likes: ['1'],
    some: '123',
    [Symbol(1)]: '123'
    // likes: [1, 2, 3]
};
// pp.name = 1
pp.likes;
let p = {
    x: 123,
    y: 'tt'
};
// let arr: Arr = ['1', '2', '3;']
// arr.push(1)
function hello(s, a, ...rest) {
    console.log('hello1', s);
    console.log('hello2', a);
    console.log('hello3', rest);
    return '111';
}
hello(1, 2);
function say(name, age) {
    console.log('say', s);
    if (!age) {
        return '222';
    }
    else {
        return [name, name];
    }
}
say(1, [1]);
