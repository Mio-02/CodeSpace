// console.log(this);



// var a = 1
// console.log(window.a);



// function identify(context) {
function identify() {
    // return context.name.toUpperCase()
    return this.name.toUpperCase()
}

// function speek(context) {
//     var greeting = "Hello,I'm " + identify(context);
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

// console.log(identify(you));
speek.call(me)

// this用来代指，也就是用来简化代码