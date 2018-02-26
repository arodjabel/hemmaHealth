const execSync = require('child_process').execSync;
const chalk = require('chalk');
const fs = require('fs.extra');

function errorMsg(e) {
  console.log(chalk.red('**** ERROR ****', e));
}

function successMsg(e) {
  console.log(chalk.green('** ', e))
}

function errorCb() {
  errorMsg('SOMETHING WENT WRONG');
}

function finish() {
  successMsg('ALL DONE, SUCCESSFULLY');
}

function runTests() {
  return new Promise((resolve, reject) => {
    try {
      const code = execSync('npm run test');
      successMsg('Tests Passed');
      resolve();
    }
    catch (e) {
      errorMsg('Tests Failed');
      reject();
    }
  });
}

function buildFrontEnd() {
  return new Promise((resolve, reject) => {
    try {
      const fe = execSync('npm run build');
      successMsg('Build Success');
      resolve();
    }
    catch (e) {
      errorMsg('Build Failed');
      reject();
    }
  });
}

function copyAssets() {
  return new Promise((resolve, reject) => {
    fs.copyRecursive('./build', './app/frontend', function (err) {
      if (err) {
        reject();
      }
      resolve();
    });
  })
}

// copy build to app dir
// copy package.json to app dir
// eb deploy

runTests()
  .then(() => {
    return buildFrontEnd().then(null, errorCb)
  }, errorCb)
  .then(() => {
    return copyAssets().then(finish, errorCb)
  });
