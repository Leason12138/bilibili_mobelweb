module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: "https://api.bilibili.com/ ", //API服务器的地址
                ws: true, //代理websockets
                changeOrigin: true,
                // 虚拟的站点需要更管origin
                pathRewrite: { //重写路径比如"/api/aaa/ccc'重写为"/aaa/c
                    '^/api': ''
                },
                headers: { // header设置
                    referer: "https://www.bilibili.com/",
                    //referer
                    origin: "https://www.bilibili.com/"
                }
            },
        }
    }
}