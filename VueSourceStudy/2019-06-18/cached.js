/**
 * 为一个纯函数创建一个缓存版本的函数
 * @param {pure Function} fn 一个纯函数
 * @return {Function}  纯函数的缓存版本
 */
export function cached(fn) {
  //创建一个缓存对象
  const cache = Object.create(null);
  return function cachedFn(str) {
    //从现有缓存中读取
    const hit = cache[str];
    //如果有缓存值直接返回，否则执行纯函数，并将执行结果缓存，以备下次使用
    return hit || (cache[str] = fn(str));
  };
}
