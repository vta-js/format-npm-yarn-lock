#!/usr/bin/env node

const program = require("commander");
const packageJson = require("../package.json");
const format = require("../scripts/format");

program
  .version(packageJson.version, "-v,--version")
  .usage("")
  .parse(process.argv);

format();
