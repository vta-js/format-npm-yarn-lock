const crossSpawn = require("cross-spawn");
const chalk = require("chalk");

module.exports = async function spawn(command, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    const p = crossSpawn(command, args, {
      cwd: process.cwd(),
      stdio: ["pipe", "pipe", "pipe"],
      ...options,
    });
    p.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        console.log(`\n[command]:${chalk.cyan(command)}`);
        reject(new Error(`spawn execute fail: code ${code}`));
      }
    });
    p.on("error", reject);
  });
};
