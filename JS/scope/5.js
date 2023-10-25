// if (true) {
//     let a = 1
// }

// {
//     let a = 1
// }

// for (var i = 0; i < 5; i++) {
//     let a = 1
// }

var a = 1

function foo() {
    let a = 3
    if (1) {
        let a = 2
    }
    
    console.log(a);
}

foo()