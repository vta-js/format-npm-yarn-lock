const path = require("path");
const spawn = require("cross-spawn");

spawn("node", [path.resolve(__dirname, "./child.js")], { cwd: process.cwd() });
