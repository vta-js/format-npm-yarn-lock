const path = require("path");
const fse = require("fs-extra");
const format = require("../scripts/format");
const spawn = require("./utils/spawn");
const checkFile = require("./utils/checkFile");

jest.setTimeout(1000000);

function check(cwd, lock, snapShot = false) {
  return format({ cwd })
    .then(() => checkFile(lock))
    .then(checked => {
      expect(checked).toBe(true);
      if (snapShot) {
        return fse
          .readFile(lock, "utf8")
          .then(blob => blob.toString())
          .then(content => {
            expect(content).toMatchSnapshot();
          });
      }
      return undefined;
    });
}

describe("format-test", () => {
  it("file-yarn", () => {
    const cwd = path.resolve(__dirname, "./data/file-yarn");
    const lock = path.resolve(cwd, "./yarn.lock");
    return fse
      .copyFile(path.resolve(cwd, "./yarn.lock.backup"), lock)
      .then(() => check(cwd, lock, true));
  });
  it("file-npm", () => {
    const cwd = path.resolve(__dirname, "./data/file-npm");
    const lock = path.resolve(cwd, "./package-lock.json");
    return fse
      .copyFile(path.resolve(cwd, "./package-lock.json.backup"), lock)
      .then(() => check(cwd, lock, true));
  });
  it("project-null", () => {
    const cwd = path.resolve(__dirname, "./data/project-null");
    return format({ cwd }).then(res => {
      expect(res).toBe(undefined);
    });
  });
  it("project-npm", () => {
    const cwd = path.resolve(__dirname, "./data/project-npm");
    const lock = path.resolve(cwd, "./package-lock.json");
    return fse
      .remove(lock)
      .then(() => spawn("npm install", [], { cwd }))
      .then(() => check(cwd, lock));
  });

  it("project-yarn", () => {
    const cwd = path.resolve(__dirname, "./data/project-yarn");
    const lock = path.resolve(cwd, "./yarn.lock");
    return fse
      .remove(lock)
      .then(() => spawn("yarn install", [], { cwd }))
      .then(() => check(cwd, lock));
  });
});
