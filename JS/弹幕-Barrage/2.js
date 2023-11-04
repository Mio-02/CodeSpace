function a() {
    var num = 123
    b()
}

function b() {
    console.log(num);
}

a()