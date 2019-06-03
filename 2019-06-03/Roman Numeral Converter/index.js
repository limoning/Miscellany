/**
 * 获取指数量的罗马数字
 * @param {Number|String=>Number} length 数字
 * @param {String} s 指定的罗马数字字符
 */
const getLomanNum = (length, s) => Array.from({ length }, i => s).join("")

/**
 * 获取指定的数字
 * @param {Number|String=>Number} n 数字
 * @param {Number} f 开始截取的位置 默认为0
 * @param {Number} s 结束截取的位置
 */
const getNum = (n, f = 0, s) => String(Number(n)).substr(f, s)

/** 
 * 转换级别 
 */
const ROMAN_LV = {
    1: {
        LV: 1,
        N: "X",
        P: "I",
        C: "V"
    },
    2: {
        LV: 2,
        N: "C",
        P: "X",
        C: "L"
    },
    3: {
        LV: 3,
        N: "M",
        P: "C",
        C: "D"
    },
    4: {
        LV: 4,
        C: "M"
    }
}
/**
 * 获取当前数字转换等级
 */
const getLV = num => {
    if (num < 10) {
        return ROMAN_LV[1];
    }
    if (num < 100) {
        return ROMAN_LV[2];
    }
    if (num < 1000) {
        return ROMAN_LV[3];
    }
    return ROMAN_LV[4];
}
/**
 * 转换
 * @param {Number}
 */
const convertToRN = (num) => {
    if (!num || num <= 0) {
        return "";
    }
    const cNum = getNum(num, 0, 1);
    const Len = 5 - cNum;
    const absLen = Math.abs(Len);
    let Str = "";
    let { LV, N, P, C } = getLV(num);

    if (num >= 1000) {
        return getLomanNum(Math.floor(num / 1000), C) + convertToRN(getNum(num, 1));
    }
    if (cNum < 4) {
        Str = getLomanNum(cNum, P);
    } else {
        if (absLen > 3) {
            Str = getLomanNum(absLen - 3, P) + N;
        } else {
            Str = getLomanNum(absLen, P);
            Str = Len < 0 ? C + Str : Str + C;
        }
    }
    return LV > 1 ? Str + convertToRN(getNum(num, 1)) : Str;
}

export default convertToRN;
