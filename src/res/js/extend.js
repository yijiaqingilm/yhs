/**
 * Created by Administrator on 2016/12/5.
 */

(function () {


    //给 Functoin 原型中添加 method 方法
    var FuncProto = Function.prototype;
    FuncProto.method = function (name, func) {
        if (!this.prototype[name]) {
            this.prototype[name] = func;
        } else {
            throw name + " existing in the prototype ";
        }
    }


    /*数组 方法 扩展*/
    /* 删除数组中的 index 位置的 元素*/
    Array.method("removeByIndex", function (index) {
        var self = this;
        self.splice(index, 1);
        return self;
    });


})();