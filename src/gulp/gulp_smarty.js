/**
 * @author: laoona
 * @date:  2020-07-30
 * @time: 15:15
 * @contact: laoono.com
 * @description: #
 */

const gulp = require('gulp');
const smarty4js = require('gulp-smarty4js-render');
const path = require('path');

const {log} = require('../lib/index');

const projectDir = process.cwd();
const baseDir = path.join(projectDir, './templates');

const srcFiles = path.join(baseDir, './**/*.tpl');
const distDir = path.join(projectDir, '/pages');

module.exports = (config = {}) => {
  const smartyConf = config.smarty || {};

  const smarty4jsConf = {
    baseDir: smartyConf.baseDir,
    templateDataDir: smartyConf.templateDataDir || projectDir,
    dataManifest: smartyConf.dataManifest || {},
    constPath: smartyConf.constPath,
    rootDir: smartyConf.rootDir ? path.resolve(projectDir, smartyConf.rootDir) : path.join(projectDir, '/templates/../../')
  };

  return gulp.src([srcFiles])
    .pipe(smarty4js(smarty4jsConf))
    .on('error', function (error) {
      log.error(error.message);
      this.end();
    })
    .pipe(gulp.dest(distDir));
}