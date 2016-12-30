var http=require('http')
var cheerio=require('cheerio')
var url='http://www.imooc.com/learn/348'
function filterChapters(html) {
    //模块
    var $=cheerio.load(html)
    var chapters=$('.chapter')
    /*[{
        chaptersTitle:'',
        videos:[
            title:'',
            id:''
        ]
    }]*/
    var courseData=[]
    chapters.each(function (item) {
        var chapter=$(this)
        var chapterTitleli=chapter.find('.icon-drop_up').text()
        var chapterTitle=chapter.find('strong').text()
        chapterTitle = chapterTitle.replace(new RegExp(chapterTitleli), "");
        var videos=chapter.find('.video').children('li')
        var chacpterData={
            charpterTile:chapterTitle,
            videos:[]
        }
        videos.each(function (item) {
            var video=$(this).find('.J-media-item')
            var videoTile=video.text()
            var id=video.attr('href').split('video/')[1]
            chacpterData.videos.push({
                title:videoTile,
                id:id
            })

        })
        courseData.push(chacpterData)
    })
    return courseData

}
//去除特殊字符
var excludeSpecial = function(s) {
    // 去掉转义字符
    s = s.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');
    // 去掉特殊字符
    s = s.replace(/[\@\#\$\%\^\&\*\{\}\:\"\L\<\>\?]/);
    return s;
};
function printCourseInfo(couserData) {

    couserData.forEach(function (item) {
        var chapterTitle=item.charpterTile
       console.log(chapterTitle+'\n')
        item.videos.forEach(function (video) {
         console.log('['+video.id+']'+(video.title)+'\n')
        })
    })
}
http.get(url,function (res) {
    var html=''
    res.on('data',function (data) {
        html+=data
    })
    res.on('end',function () {
        //过滤
        var courseData = filterChapters(html)
        printCourseInfo(courseData)
   //     console.log(html)
    })
}).on('error',function () {
    console.log('获取页面数据出错')
})

