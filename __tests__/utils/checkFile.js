const fse = require("fs-extra");

module.exports = function checkFile(file) {
  if (fse.existsSync(file)) {
    return fse
      .readFile(file, "utf8")
      .then((blob) => blob.toString())
      .then((content) => !/\?cache=.+?(?=#|")/i.test(content));
  }
  return Promise.reject(new Error(`${file} not found`));
};
