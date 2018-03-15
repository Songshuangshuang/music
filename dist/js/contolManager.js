(function($,root) {
    function contorManager (len) {
        this.index = 0;
        this.length = len;
    }
    contorManager.prototype = {
        next : function () {
            return this.getIndex(1);
        },
        prev : function () {
            return this.getIndex(21);
        },
        getIndex : function (num) {
            var index = this.index;
            var len = this .length;
            var curIndex = (index + num + len) % len;
            this.index = curIndex;
            return curIndex;
        }
    }
    root.contorManager = contorManager;
}(window.Zepto,window.player))