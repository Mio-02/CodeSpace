// console.log(this);



// var a = 1
// console.log(window.a);



function identify(context) {
    return context.name.toUpperCase()
}
    
function speek(context) {
    var greeting = "Hello,I'm " + identify(context);
    console.log(greeting);
}
    
var me = {
    name: "Tom"
}
    
var you = {
    name: "Jerry"
}
    
console.log(speek(you));



// 让我们换一种
function identify() {
    return this.name.toUpperCase()
}
    
function speek() {
    var greeting = "Hello,I'm " + identify.call(this);
    console.log(greeting);
}
    
var me = {
    name: "Tom"
}
    
var you = {
    name: "Jerry"
}
    
speek.call(me)
    
// this用来代指，也就是用来简化代码