const gulp = require("gulp");
const sass = require("gulp-sass");
const { resolve } = require("path");

sass.compiler = require("node-sass");

const scss_path = resolve(__dirname, "src/scss/*.scss");
const css_path = resolve(__dirname, "disc/css");

gulp.task("sass", () =>
	gulp
		.src(scss_path)
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(gulp.dest(css_path))
);

gulp.task("watch", () => {
	gulp.watch(scss_path, gulp.series("sass"));
});
