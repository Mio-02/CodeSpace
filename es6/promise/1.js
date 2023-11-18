function a() {
    setTimeout(() => {
        console.log('写文章');
        b()
    }, 1000)
}

function b() {
    setTimeout(() => {
        console.log('发布');
    }, 0)
}

a()
// b()