/**
 * 检查是否是对象
 * @param {any} obj
 */
function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
/**
 * 检查两个值是否相等
 * @param {any} a
 * @param {any} b
 */
export function looseEqual(a, b) {
  //基本类型直接比较如果全等直接返回 true
  if (a === b) return true;
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    //如果a、b均为 object 类型的值，进入try catch语句
    try {
      const isArrayA = Array.isArray(a);
      const isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        //如果a、b均为数组，并且a、b的length相等，则对数组的每一个元素再次调用 looseEqual 进入递归
        return (
          a.length === b.length &&
          a.every((e, i) => {
            return looseEqual(e, b[i]);
          })
        );
      } else if (a instanceof Date && b instanceof Date) {
        //如果是Date类型将数据转换为时间戳进行比较
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        //如果a、b均不为数组，获取a、b对象的key集合并比较长度，若长度相等，则调用 looseEqual 进入递归
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        return (
          keysA.length === keysB.length &&
          keysA.every(key => {
            return looseEqual(a[key], b[key]);
          })
        );
      } else {
        //如果a、b中一个是数组，一个是对象，直接返回 false
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    //如果a、b均不为 object 类型的值，对两个值调用 String() 方法进行比较
    return String(a) === String(b);
  } else {
    //如果a、b中一个是 object 类型的值，一个不是，直接返回 false
    return false;
  }
}
