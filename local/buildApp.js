import { runTests, buildFrontEnd, copyAssets, copyPackageJson, errorCb, finish } from "./buildServices";

runTests()
  .then(() => {
    return buildFrontEnd().then(null, errorCb)
  }, errorCb)
  .then(() => {
    return copyAssets().then(null, errorCb)
  })
  .then(() => {
    return copyPackageJson().then(finish, errorCb)
  });