function foo(a, b) {
    console.log(a); // 1
    c = 0
    var c;
    a = 3
    b = 2
    console.log(b); // 2
    function b() {}
    function d() {}
    console.log(a); // 3
    console.log(b); // 2
    console.log(c); // 0
    console.log(d); // function d() {}
}
// AO {
//     a: undefined 1, 3
//     b: undefined function b() {}, 2
//     c: undefined, 0
//     d: function d() {}
// }
foo(1)