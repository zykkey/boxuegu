/**
 * Created by Administrator on 2017/8/14.
 */
require.config({
   baseUrl:'/',  // 只要是设置了这个根目录 ，所有的模块之间的加载或是依赖，都是相对于这个根目录而言，其它的路径必须按着这个根目录进行设置，否则加载不上
  paths:{
     tttt:'demo/day5/require/09-test/js/a',
     b:'demo/day5/require/09-test/js/b',
     c:'demo/day5/require/09-test/js/c',
     d:'demo/day5/require/09-test/js/mode/d',
     m:'demo/day5/require/05-test/js/m'
  }
});
// require(['demo/day5/require/09-test/js/a','demo/day5/require/09-test/js/b','demo/day5/require/09-test/js/c','demo/day5/require/09-test/js/mode/d','demo/day5/require/05-test/js/m'],function (a,obj,str,fn){
//        console.log(a);
//        console.log(obj);
//     console.log(str);
//     fn();
// });
require(['tttt','b','c','d','m'],function (a,obj,str,fn){
  console.log(a);
  console.log(obj);
  console.log(str);
  fn();
});

// 这个路径还是相对于调用 者而言 ，谁执行了require()这个函数就上相对于谁