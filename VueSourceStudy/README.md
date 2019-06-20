## Vue 源码黑科技（Vue 源码版本 [@2.6.10](https://github.com/vuejs/vue/tree/v2.6.10)）

1. 公共工具函数 【源码 `src/shared/util.js`】
   - [cached(fn:pure Function)](https://github.com/limoning/Miscellany/tree/master/VueSourceStudy/2019-06-18/cached.js) 为一个纯函数创建一个缓存版本的函数
   - [looseEqual(a:any,b:any)](https://github.com/limoning/Miscellany/tree/master/VueSourceStudy/2019-06-20/looseEqual.js) 检查 a , b 两个值是否相等
   - [extend(to:Object,from:Object)](https://github.com/limoning/Miscellany/tree/master/VueSourceStudy/2019-06-20/extend.js) 将 from 对象的属性混合到 to 对象中
   - [makeMap(str:String separated by ',',[expectsLowerCase:Boolean])](https://github.com/limoning/Miscellany/tree/master/VueSourceStudy/2019-06-20/makeMap.js) 根据一个 str 生成一个 map，然后根据该 map 产生一个新函数，新函数接收一个字符串参数作为 key，如果这个 key 在 map 中则返回 true，否则返回 undefined
