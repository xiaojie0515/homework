//首先引入 gulp 模块
var gulp = require('gulp');
//引入 gulp-stylus 插件
var stylus = require('gulp-stylus');
//引入压缩 css 的文件
var minifycss = require('gulp-minify-css')
//引入压缩 js 的文件
var uglify = require('gulp-uglify')
var nodemon = require('gulp-nodemon')
var browserSync = require('browser-sync').create()

//var serverStart = borwserSync.create()
var reload = browserSync.reload;

gulp.task('nodemon', function(ab){
	var ft = false;
	return nodemon({
		script:'./app.js'
	}).on('start', function(){
		if(!ft){
			ab();
			ft = true;
		}
	})
})

gulp.task('browserSync',['nodemon'], function(){
	browserSync.init({
		proxy: {
			target: 'http://127.0.0.1:9999'
		},
		files: ["*"],
		port: 9888,
		open: false
	})
})

gulp.task('stylus', function(){
	//获取要编译的文件
	//指定一个文件
	//gulp.src('./stylus/index.styl')
	//指定多个文件
	//gulp.src('./stylus/index.styl, ./stylus/css.styl')
	//指定一个目录下所有(不包含子目录)
	//gulp.src('./stylus/*.styl')
	//指定一个目录及所有子目录下的文件
	return gulp.src('./stylus/**/*.styl')
		//执行stulus编译
		.pipe(stylus())
		//输出编译后的文件
		.pipe(gulp.dest('./public/css'))
})



gulp.task('minifycss',["stylus"], function(){
	return gulp.src('./public/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest("./public/mincss"))
})

gulp.task('uglify', function(){
	return gulp.src('./public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/minijs'))
})

gulp.task('watcher',['browserSync','stylus','uglify'], function(){
	gulp.watch('./stylus/**/*.styl', ['stylus'])
	gulp.watch('./public/js/**/*.js', ['uglify'])
	
	gulp.watch(["./public/css/**/*.css", "./public/mincss/**/*.css",
			'./public/minjs/**/*.js']).on('change', function(){
		reload();
	})
})



//创建一个 default 任务
gulp.task('default', function(){
	console.log('this default')
});
