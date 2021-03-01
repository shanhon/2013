// var timer;
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    //获取元素当前位置
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    }
    obj.timer = setInterval(function() {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }
        //attr变量
        obj.style[attr] = newValue + "px";
        if (newValue == target) {
            clearInterval(obj.timer);
            //有函数就调用函数
            callback && callback();
        }


    }, 30);
}

function getStyle(obj, name) {
    return getComputedStyle(obj, null)[name];
}