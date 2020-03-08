import fs from "fs-extra";
import mkdirp from "mkdirp";
import { Argv } from "./arg";
import { config } from "./config";
import { getTemplateReadPath } from "./template";

export const readFile = async (path: string, name?: string) => {
  const buffer = await fs.readFile(path);
  const fakeCode = buffer.toString();
  if (!name) {
    return fakeCode;
  }
  return fakeCode.replace(/_PAGE_NAME_|_MODULE_NAME_/g, name);
};

export const writeFile = async (
  template: {
    view: string;
    store: string;
  },
  params: {
    name: string;
    type: Argv["type"];
  }
) => {
  const { view, store } = template;
  const { name, type } = params;

  if (!name) {
    console.log("请输入模块名");
    return;
  }

  type NewFile = {
    code: string;
    path: string;
    file: string;
  };

  const fileMap: Record<Argv["type"], NewFile> = {
    view: {
      code: await readFile(view, name),
      path: config.view,
      file: `${config.view}/${name}.tsx`
    },
    store: {
      code: await readFile(store, name),
      path: config.store,
      file: `${config.store}/${name}.ts`
    }
  };

  const pointFile = fileMap[type];
  await mkdirp(pointFile.path);
  fs.writeFile(pointFile.file, pointFile.code);
};
