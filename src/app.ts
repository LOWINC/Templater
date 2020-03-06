#!/usr/bin/env node
import { argv } from "./utils/arg";
import { writeFile } from "./utils/file";

writeFile(argv.name, argv.type);
