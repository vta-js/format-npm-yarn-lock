# @vta/format-npm-yarn-lock

format package-lock.json or yarn.lock after dependencies installed

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

after added this pkg to your package.json's `dependencies` or `devDependencies`, when all your dependencies have beed installed, we will format your `package-lock.json` or `yarn.lock` to remove all **?cache=**. we also support cli usage and js usage.

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

## Options

```typescript
export interface FormatOptions {
  cwd?: string;
}
```

### cwd

working directory. default is `.`

### MIT License
