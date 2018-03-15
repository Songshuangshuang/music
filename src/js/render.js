(function ($,root) {
    var $scope = $(document.body);
    function renderInfo (info) {
        var html = `<div class="song-name">${info.song}</div>
        <div class="singer-name">${info.singer}</div>
        <div class="album-name">${info.album}</div>`;
        $scope.find(".song-info").html(html);//????????????
    }
    function renderImg (src) {
        var img = new Image();
        img.onload = function () {
            $scope.find(".song-img img").attr("src",src);
            root.blurImg(img,$scope);
        }
        img.src = src;
    }
    function renderIsLike (isLike) {
        if(isLike) {
            $scope.find(".like-btn").addClass("like");
        } else {
            $scope.find(".like-btn").removeClass("like");
        }
    }
    root.render = function (data) {
        renderInfo(data);
        renderImg(data.image);
        renderIsLike(data.isLike);
    }
}(window.Zepto,window.player))