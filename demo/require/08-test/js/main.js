/**
 * Created by Administrator on 2017/8/14.
 */
require(['a','b','c','mode/d','e','../../05-test/js/m'],function (a,obj,str,fn){
       console.log(a);
       console.log(obj);
    console.log(str);
    fn();
});

// 这个路径还是相对于调用 者而言 ，谁执行了require()这个函数就上相对于谁