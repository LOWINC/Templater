#!/usr/bin/env node

const fs = require("fs-extra");

// 把默认模板复制到dist下
fs.copySync("./src/template", "./dist/template");
