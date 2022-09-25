export default class StrUtil {
    /**
     * 获取uuid
     * @returns
     */
    static uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    static id = 1000;
    /** */
    static getId = () => {
        this.id++;
        return this.id + '';
    };
    /**
     * 判断内容是否为空
     */
    static isNull(str) {
        if (str instanceof Array)
            return str.length == 0;
        if (str !== null && str !== 'null' && str !== undefined && str !== 'undefined' && str !== '' && str + '' !== 'NaN')
            return false;
        return true;
    }
    /**
     * 验证邮箱
     */
    static isEmail(obj) {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(obj))
            return false;
        return true;
    }
    /**
     * 验证数字
     */
    static isNumber(obj) {
        var reg = /^[0-9]+$/;
        if (obj != "" && !reg.test(obj))
            return false;
        return true;
    }
}
