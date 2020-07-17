const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const watch = require('glob-watcher');

/**
 * 构建所有端
 * @returns {Promise<void>}
 */
exports.startExecAll = async function (media) {
  if (media === 'build') {
    process.env.NODE_ENV = 'production';
    await exports.getWebBuildPromise(media, isCompile);
    startMlLinter(media);
  }
}

/**
 * web端构建
 * @returns {Promise<void>}
 */
exports.getWebBuildPromise = async function (media, isCompile) {
  
  if (media === 'dev') {
    let options = exports.getOptions(media, 'web');
    let webpackConfig = await getConfig(options)
    let compiler;
    if (isCompile) {
      compiler = webpack(webpackConfig);
    }
    return devServer({ webpackConfig, options, compiler });
  } else {
    if (isCompile) {
      return exports.getBuildPromise(media, 'web');
    } else {
      return Promise.resolve();
    }
  }
}

// let lastLintTime = null;
function startMlLinter(media) {
  if (media === 'dev') {
    // cmlLinter(cml.projectRoot);
    const watcher = watch([ml.projectRoot + '/src/**/**.**']);
    watcher.on('change', function (path, stat) {
      // cmlLinter(cml.projectRoot);
    });
  }
}

