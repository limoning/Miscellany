/**
 * 为一个纯函数创建一个缓存版本的函数
 * @param {pure Function} fn 一个纯函数
 * @return {Function}  纯函数的缓存版本
 */
export function cached(fn) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
