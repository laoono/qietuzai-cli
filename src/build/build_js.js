/**
 * @author: laoona
 * @date:  2020-07-31
 * @time: 15:53
 * @contact: laoono.com
 * @description: #
 */
const path = require('path');
const gulp = require('gulp');
const debug = require('gulp-debug');
const gUtil = require('gulp-util');

const src = '/src/assets';
const projectDir = process.cwd();
const buildDir = path.join(projectDir, '/dist/', '/assets/js');

module.exports = () => {
  return gulp.src(projectDir + src + '/js/**/*')
    .pipe(debug({title: 'SLICE-JS: ' + gUtil.colors.green('✔')}))
    .pipe(gulp.dest(buildDir));
}
