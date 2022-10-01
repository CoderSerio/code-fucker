const http = require('http');
// RSA 算法 —— 其实就费马大定理那个意思，
// 除了穷举之外，其他常规方法都很难破解
// （至少我的数学知识水平想不到更好的方法)
// C = M ** E % N， 其中E、N已知
// M = C ** D % N,  其中

function lock (str) {
    console.log('这是什么', str);
    if(typeof str !== 'string') {
        return ''
    }
    const buf = Buffer.from(str);
    console.log('加密前', buf.toString());
    buf.forEach((oneByte, index) => {
        if (index % 2) {
            buf[index] += 2;
        } else {
            buf[index] -= 1;
        }
    })
    console.log('加密后', buf.toString());
    return buf.toString();
}

function unlock (str) {
    const buf = Buffer.from(decodeURIComponent(str));
    buf.forEach((oneByte, index) => {
        if (index % 2) {
            buf[index] -= 2;
        } else {
            buf[index] += 1;
        }
    })
    console.log('解密后', buf.toString());
}

function serialize (str) {
    console.log('即将序列化的字符串', str)
    const serializedData = {};
    const strArr = str.split('=')[1].split(' ');
    console.log(strArr)
    for (let i = 0; i < strArr.length - 1; i ++) {
        serializedData.msg += strArr[i];
    }
    return serializedData;
}


const server = http.createServer((req, res) => {
    console.log(`\n${req.method} request ${new Date()}`);
    console.log('============================\n');
    console.log(req.headers)

    if (req.method.toUpperCase() == 'POST') {
        let reqData = '';
        let resData = '';
        try {
            req.on('data', (chunk) => {
                reqData += chunk.toString();
            });
            req.on('end', () => {
                console.log('post request body data:\n', reqData);
                reqData = serialize(decodeURIComponent(reqData));
                console.log('post request body data:\n', reqData);
                resData = lock(reqData.msg);
                console.log(`response`);
                console.log('msg', reqData.msg)
                res.end(encodeURIComponent(resData));
            });
        } catch (err) {
            throw err;
        } 
        
    } else {
        res.end('well, something is wrong, haha')
    }

})

server.listen(8079, () => {
    console.log('bad code is running on port 8079!!!')
    unlock("tpcgekmgc%25hpbntfd%3Ehqrvqg%60o%3Dwrkmimclgrr%60edusf%3Akmvlchp'%2Bzenws%3E%3B%24%E3%BF%9F%E7%A4%BF%2B%E6%B7%98%E6%97%8B%23%20%24%3B%3Edpcn%3Atdvttm2%3A%7F")
})
