/**
 * Created by Administrator on 2016/12/29.
 */

var http=require('http')
var querystring=require('querystring')
var postData=querystring.stringify({
    'content':'课程太短了，都没看够',
    'mid':6700
})
var options={
    hostname:'www.imooc.com',
    port:80,
    path:'/course/docomment',
    method:'POST',
    headers:{
         'Accept':'application/json, text/javascript, */*; q=0.01',
         'Accept-Encoding':'gzip, deflate',
         'Accept-Language':'zh-CN,zh;q=0.8,en-AU;q=0.6,en;q=0.4',
         'Cache-Control':'no-cache',
         'Connection':'keep-alive',
         'Content-Length':postData.length,
         'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
         'Cookie':'imooc_uuid=efbb974b-6d3d-4b39-ab33-73adaf7dffb2; imooc_isnew_ct=1481182846; loginstate=1; apsid=ZiMDEwOTNjNGNmOWQ1NDFjMGRlYTExYTM0Nzk3YjUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzI3ODU5NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMTkxNjMyMzg4QHFxLmNvbQAAAAAAAAAAAAAAAAAAADIxMTRhNTgwMDkwZTc0ZTE4ZmVkNjgzMGIyOTVhMTQyEg9JWBIPSVg%3DMj; last_login_username=1191632388%40qq.com; PHPSESSID=35kbv62vpgkrfsgk3inifuuqs7; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1481613382,1482802638,1482889646,1482977231; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1482989173; imooc_isnew=2; cvde=58646fd2dd65d-43',
         'Host':'www.imooc.com',
         'Origin':'http://www.imooc.com',
         'Pragma':'no-cache',
         'Referer':'http://www.imooc.com/video/6700',
         'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
         'X-Requested-With':'XMLHttpRequest',
    }
}
var req=http.request(options,function (res) {
    console.log('Status:'+res.statusCode)
    console.log('Status:'+JSON.stringify(res.headers))
    res.on('data',function (chunk) {
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof  chunk)
    })
    res.on('end',function () {
        console.log('评论完毕！')
    })

})
req.on('error',function (e) {
    console.log('Error:'+e.message)
})
req.write(postData)
req.end()