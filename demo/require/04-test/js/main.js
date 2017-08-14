/**
 * Created by Administrator on 2017/8/14.
 */
require(['a','b','c'],function (a,obj,str){
       console.log(a);
       console.log(obj);
    console.log(str);
});

// 这个路径还是相对于调用 者而言 ，谁执行了require()这个函数就是谁