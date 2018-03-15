(function ($,root) {
    var $scope = $(document.body);
    var curDuration;
    var frameId;
    var lastPercent = 0;
    var startTime;
    function formateTime(duration) {
        duration = Math.round(duration);
        var minute = Math.floor(duration / 60);
        var seccond = duration - minute * 60;
        if(minute < 10) {
            minute = "0" + minute;
        }
        if(seccond < 10) {
            seccond = "0" + seccond;
        }
        return minute + ":" + seccond;
    }
    function renderAllTime(duration){
        lastPercent = 0;
        curDuration = duration;
        var allTime = formateTime(duration);
        $scope.find(".all-time").html(allTime);
    }
    function renderPro (percent) {
        var percentage = (percent - 1) * 100 + "%";
        $scope.find(".pro-top").css({
            transform : "translateX("+percentage+")"
        })
    }
    function update (percent) {
        var curTime = percent * curDuration;
            curTime = formateTime(curTime);
        $scope.find(".cur-time").html(curTime);
        renderPro(percent);
    }
    function startPro (percentage) {
        percentage ? lastPercent = percentage : lastPercent;
        cancelAnimationFrame(frameId);
        startTime = new Date().getTime();//获取当前时间 毫秒
        function frame () {
            var curTime = new Date().getTime();
            var percent = lastPercent + (curTime - startTime) / (curDuration * 1000);
            if(percent < 1) {
                frameId = requestAnimationFrame(frame);
                update(percent);
            } else {
                cancelAnimationFrame(frameId);
            }
        }
        frame();
    }
    function stopPro () {
        var stop = new Date().getTime();
        lastPercent = lastPercent + (stop - startTime) / (curDuration * 1000);
        cancelAnimationFrame(frameId);
    }
    root.proccessor = {
        renderAllTime : renderAllTime, //??????
        startPro : startPro,//????
        stopPro : stopPro,//?????
        update : update //?????
    }
}(window.Zepto,window.player))