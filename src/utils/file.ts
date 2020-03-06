import mkdirp from "mkdirp";
import { config } from "./config";
import fs from "fs-extra";
import { argv, Argv } from "./arg";
import { getTemplateReadPath } from "./template";

import { storeText } from "../template/store";
import { viewText } from "../template/view";

export const readFile = async (path: string, name?: string) => {
  const buffer = await fs.readFile(path);
  const fakeCode = buffer.toString();
  if (!name) {
    return fakeCode;
  }
  return fakeCode.replace(/_PAGE_NAME_|_MODULE_NAME_/g, name);
};

export const writeFile = async (name: string, type: Argv["type"]) => {
  if (!name) {
    console.log("请输入模块名");
    return;
  }

  const { view, store } = getTemplateReadPath();

  if (!type || type === "view") {
    const fakeCode = view ? await readFile(view, name) : viewText;
    await mkdirp(config.view);
    fs.writeFile(`${config.view}/${name}.tsx`, fakeCode);
  }

  if (type === "store") {
    const fakeCode = store ? await readFile(store, name) : storeText;
    await mkdirp(config.store);
    fs.writeFile(`${config.store}/${name}.ts`, fakeCode);
  }
};
