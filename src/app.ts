#!/usr/bin/env node
import { argv } from "./utils/arg";
import { writeFile } from "./utils/file";
import { getTemplateReadPath } from "./utils/template";

//  获取模板
const template = getTemplateReadPath();

writeFile(template, { name: argv.name, type: argv.type || "view" });
