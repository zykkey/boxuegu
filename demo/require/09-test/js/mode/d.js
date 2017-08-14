/**
 * Created by Administrator on 2017/8/14.
 */
define(['demo/day5/require/09-test/js/c'],function (str){
       alert('这是D模块在执行代码了...也是有返回值的，是一个函数...');
       var fn = function (){
          alert('D模块中的函数执行代码了....DDDDDDDDDDDDDDDDDDDDD'+str);
       };
       return fn;
});

//模块和模块之间的依赖或是调用 的话，路径是相对于自己而言的