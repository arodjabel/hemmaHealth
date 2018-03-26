const execSync = require('child_process').execSync;
const chalk = require('chalk');
const fs = require('fs.extra');

export const errorMsg = (e) => {
  console.log(chalk.red('**** ERROR ****', e));
};

export const successMsg = (e) => {
  console.log(chalk.green('** ', e));
};

export const errorCb = (e) => {
  console.log(e);
  errorMsg('SOMETHING WENT WRONG');
};

export const finish = () => {
  successMsg('ALL DONE, SUCCESSFULLY');
};

export const runTests = () => {
  return new Promise((resolve, reject) => {
    try {
      const code = execSync('npm run test');
      successMsg('Tests Passed');
      resolve();
    }
    catch (e) {
      console.log(e.message);
      errorMsg('Tests Failed');
      reject();
    }
  });
};

export const buildFrontEnd = () => {
  return new Promise((resolve, reject) => {
    try {
      const fe = execSync('npm run buildClient');
      successMsg('Build Success');
      resolve();
    }
    catch (e) {
      errorMsg('Build Failed');
      reject();
    }
  });
};

export const copyAssets = () => {
  return new Promise((resolve, reject) => {
    function newCopy() {
      fs.copyRecursive('./client/build', './app/frontend', function (err) {
        if (err) {
          reject();
        } else {
          successMsg('Copied Assets');
          resolve();
        }
      });
    }

    fs.rmrf('./app/frontend', function (err) {
      if (err) {
        reject();
      } else {
        newCopy();
      }
    });
  })
};