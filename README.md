# @vta/format-npm-yarn-lock

format package-lock.json or yarn.lock

![npm](https://img.shields.io/npm/v/@vta/format-npm-yarn-lock)
[![Build Status](https://travis-ci.com/vta-js/format-npm-yarn-lock.svg?branch=master)](https://travis-ci.com/vta-js/format-npm-yarn-lock)
[![codecov](https://codecov.io/gh/vta-js/format-npm-yarn-lock/branch/master/graph/badge.svg)](https://codecov.io/gh/vta-js/format-npm-yarn-lock)

### Install

```bash
npm install --save-dev @vta/format-npm-yarn-lock
// or using yarn
yarn add @vta/format-npm-yarn-lock --dev
```

## Usage

### using in cli

```json
{
  "scripts": {
    "format-lock": "vta-format-npm-yarn-lock"
  }
}
```

### using in js files

```javascript
const format = require("@vta/format-npm-yarn-lock");

format({}).then(err => {
  if (err) {
    console.log(`format error :${err.message}`);
    return;
  }
  console.log("format successfully");
});
```

### best practices

if use `lerna`, please set your package.json's **install** script. when all your dependencies have beed installed, we will format your lock file automatically. upgrade dependencies please run `yarn dep-upgrade`

```json
{
  "scripts": {
    "install": "vta-format-npm-yarn-lock",
    "dep-upgrade": "rimraf yarn.lock && lerna bootstrap --force-local"
  }
}
```

if don't use `lerna`, please set your package.json's scripts like this. when all your dependencies have beed installed, please run `yarn format-lock` to format your lock file. upgrade dependencies please run `yarn dep-upgrade`

```json
{
  "scripts": {
    "format-lock": "vta-format-npm-yarn-lock",
    "dep-upgrade": "yarn upgrade && yarn run format-lock"
  }
}
```

## Options

```typescript
export interface FormatOptions {
  cwd?: string;
}
```

### cwd

working directory. default is `.`

### MIT License
