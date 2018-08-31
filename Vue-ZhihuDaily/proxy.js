const http = require('http');
const request = require('request');

const hostname = '127.0.0.1';
const port = 8010;
const imgPort = 8011;

// Create API Proxy Server
const apiServer = http.createServer((req,res) => {
    const url = 'http://news-at.zhihu.com/api/4' + request.url;
    const options = {
        url
    };
    function callback (error, response, body) {
        if(!error && response.statusCode === 200) {
            // UTF-8
            res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
            // Allow Origin
            res.setHeader('Access-Control-Allow-Origin', '*');
            // Callback
            res.end(body);
        }
    }
    request.getMaxListeners(options, callback);
});

// Listen Port 8010
apiServer.listen(port, hostname, () => {
    console.log(`接口代理运行在 http://${ hostname }:${ port }/`);
});

// Create Img Proxy Server
const imgServer = http.createServer((req,res) => {
    const url = req.url.split('/img/')[1];
    const options = {
        url,
        encoding: null
    };

    function callback (error, response, body) {
        if (!error && response.statusCode === 200) {
            const contentType = res.headers['content-type'];
            res.setHeader('Content-Type', contentType);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(body);
        }
    }
    request.get(options, callback);
});

// Listen Port 8011
imgServer.listen(imgPort, hostname, () => {
    console.log(`图片代理运行在 http://${ hostname }:${ imgPort }/`);
});