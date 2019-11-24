var name = 'window'
let obj = {
    name: 'zsm',
    f1: function() {
        console.log(this.name)
    },
    f2: function() {
        (() => console.log(this.name))()
    }
}
let xxx = {name: 'sss'}
let fff1 = obj.f1
let fff2 = obj.f2

obj.f1()
obj.f2()
console.log('==========')

fff1()
fff2()
console.log('==========')
obj.f1.apply(xxx)
obj.f2.apply(xxx)
console.log('==========')
fff1.apply(xxx)
fff2.apply(xxx)