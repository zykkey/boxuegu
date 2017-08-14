/**
 * Created by Administrator on 2017/8/14.
 */
define(function (){
       alert('这是D模块在执行代码了...也是有返回值的，是一个函数...');
       var fn = function (){
          alert('D模块中的函数执行代码了....DDDDDDDDDDDDDDDDDDDDD');
       };
       return fn;
})