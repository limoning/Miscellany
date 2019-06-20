/**
 * 将 _from 对象的属性混合到 to 对象中
 * @param {Object} to
 * @param {Object} _from
 */
export function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
}
