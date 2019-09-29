const path = require("path");
const fse = require("fs-extra");

module.exports = function format({ cwd = process.cwd() } = {}) {
  let lockFile;
  const lockFiles = ["yarn.lock", "package-lock.json"].map(file => path.resolve(cwd, file));
  const reg = /\?cache=.+?(?=#|")/gim;
  for (let i = 0, len = lockFiles.length; i < len; i += 1) {
    if (fse.existsSync(lockFiles[i])) {
      lockFile = lockFiles[i];
      break;
    }
  }
  if (lockFile) {
    return fse
      .readFile(lockFile, "utf8")
      .then(blob => blob.toString())
      .then(content => content.replace(reg, ""))
      .then(content => fse.writeFile(lockFile, content, { encoding: "utf8" }))
      .then(() => "SUCCESS");
  }
  return Promise.resolve("NOLOCKFILE");
};
