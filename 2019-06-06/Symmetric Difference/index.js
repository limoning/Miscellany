/**
 * 创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.
 */
export default () => {
    return [...new Set(Array.from(arguments).reduce((p, n) => ([...p.filter(i => !n.includes(i)), ...n.filter(i => !p.includes(i))])))];
}