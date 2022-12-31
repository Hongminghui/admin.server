/*
 * @Date: 2022-12-26 23:12:07
 * @LastEditTime: 2022-12-26 23:14:45
 * @Description: 工具函数
 */

function underlineToHump(str) {
    // 单个字符串下划线转驼峰
    const reg = /_\S/g;

    str = str.replace(reg, function (item) {
        return item.replace('_', '').toUpperCase();
    });
    return str;
}

function formatField(list) {
    var newList = [];
    list.forEach((item) => {
        const keyList = Object.keys(item);
        const newObj = {};
        keyList.forEach((key) => {
            let newKey = underlineToHump(key);
            newObj[newKey] = item[key];
        });
        newList.push(newObj);
    });
    return newList;
}

module.exports = {
    formatField
}