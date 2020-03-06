import { rootPath } from "./rootPath";

export interface Config {
  view: string;
  store: string;
  template?: {
    view?: string;
    store?: string;
  };
}

export const config: Config = require(`${rootPath}/templater.json`);
