import get from "lodash/get";
import path from "path";
import { config, Config } from "./config";
import { rootPath } from "./rootPath";

// 获取模板目录
export function getTemplateReadPath(): Required<Config["template"]> {
  const configView = get(config, "template.view");
  const configStore = get(config, "template.store");
  const defaultView = path.resolve(__dirname, "../template/view.tsx");
  const defaultStore = path.resolve(__dirname, "../template/store.ts");

  return {
    view: configView ? rootPath + "/" + configView : defaultView,
    store: configStore ? rootPath + "/" + configStore : defaultStore
  };
}
