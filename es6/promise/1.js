function a() {
    setTimeout(() => {
        console.log('阿珍');
        b()
    }, 1000)
}

function b() {
    setTimeout(() => {
        console.log('十亩地');
    }, 0)
}

a()