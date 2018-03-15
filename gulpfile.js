var gulp = require("gulp");
var connect = require("gulp-connect");
var less = require("gulp-less");
// gulp.task("task1",function() {
//     console.log(111);
// })
// gulp.task("default",["task1"]);

//转移html到dist文件夹下
gulp.task("html",function() {
    gulp.src("./src/index.html")  //读取index.html文件
        .pipe(gulp.dest('./dist'))//输出
        .pipe(connect.reload()); 
})
//监听任务
gulp.task("watch",function() {
    gulp.watch("./src/index.html",["html"]);
    gulp.watch("./src/less/*.less",["less"]);
    gulp.watch("./src/js/index.js",["js"]);
})
//开服务器
gulp.task("server",function() {
    connect.server({
        root:"dist",
        livereload:"true"
    });
})
//把less转换为css
gulp.task("less",function() {
    gulp.src("./src/less/*.less")
        .pipe(connect.reload())
        .pipe(less())
        .pipe(gulp.dest("./dist/css"))

})
//转移src的js文件夹到dist文件夹下
gulp.task("js",function() {
    gulp.src("./src/js/*.js")     //读取index.js文件
        .pipe(gulp.dest('./dist/js'))//输出
        .pipe(connect.reload()) //可用代码压缩插件 gulp-uglify
})
gulp.task("default",["html","watch","server","less","js"]);

    