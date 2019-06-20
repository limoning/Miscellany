/**
 * makeMap 函数首先根据一个字符串生成一个 map，
 * 然后根据该 map 产生一个新函数，新函数接收一个字符串参数作为 key，
 * 如果这个 key 在 map 中则返回 true，否则返回 undefined。
 * @param {String separated by ","} str
 * @param {Boolean} [expectsLowerCase]
 */
export function makeMap(str, expectsLowerCase) {
  // 创建闭包 map
  const map = Object.create(null);
  // 以","分割传入的字符串
  const list = str.split(",");
  // 扩充map对象
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  //返回一个函数，并且如果 expectsLowerCase 为 true 的话，将 map 的 key
  return expectsLowerCase ? val => map[val.toLowerCase()] : val => map[val];
}
