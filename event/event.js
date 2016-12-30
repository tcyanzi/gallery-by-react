/**
 * Created by Administrator on 2016/12/29.
 */
/*
 Events

 a.EventEmitter支持多个事件监听，最大为10，也可以自定义最大数

 //添加监听
 var EventEmitter = require('events').EventEmitter;
 var instance = new EventEmitter();
 instance.on('event',function(arguments){});

 b.如果超过十个也能执行，不过有可能会造成内存泄漏

 //自定义最大数
 //每个setMaxListeners针对的是一个特定事件：即event1,event2,... 默认最大都为10,本例为num
 instance.setMaxListeners(num);

 c.事件监听之后，需要emit(发射,发出)才会执行
 instance.emit('event',arguments)

 d.判断是否监听
 boolean instance.emit('event',arguments)	//true or false

 e.移除监听事件

 //移除单个事件监听
 instance.removeListener('event',funcName)	//移除事件需具名函数，匿名函数不行

 //移除多个事件监听
 instance.removeAllListerner()	//不传参表示移除所有事件监听
 instance.removeAllListerner('event')	//移除特定event的所有事件监听

 f.计算事件监听数量

 //第一种
 instance.listeners('event').length

 //第二种
 EventEmitter.listenerCount(instance,'event')
*/
var EventEmitter=require('events').EventEmitter
var life=new EventEmitter()
life.on('zuo',function (who) {
    console.log(who+'该'+'看书'+'了')
})
life.on('zuo',function (who) {
    console.log(who+'该'+'吃饭'+'了')
})
life.on('zuo',function (who) {
    console.log(who+'该'+'上班'+'了')
})
life.on('zuo',function (who) {
    console.log(who+'该'+'下班'+'了')
})
life.on('zudo',function (who) {
    console.log(who+'该'+'逛街'+'了')
})
life.emit('zuo','tcy')
//on 方法 监听事件 ，emit方法触发（发射）事件