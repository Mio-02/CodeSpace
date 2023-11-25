// 把金数据的2000数据拿到的写法
const FID = 'TM8uOr';
const getJinData = async () => {
    let res = [];
    let count = 50;
    let next = 0;
    // while + 请求40次是很恐怖的
    while (count == 50) {
        let url = `https://jinshuju.net/api/v1/forms/${FID}/entries`
        if (next) {
            url = `${url}?next=${next}`
        }
        const rawData = await fetch(url, {
            header: {
                // ...
            }
        });
        const data = await rawData.json()
        count = dara.count
        // res.push(data) 或者
        res = res.concat(data.data)
    }
}