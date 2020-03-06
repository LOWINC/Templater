import get from "lodash/get";
import { config, Config } from "./config";
import { rootPath } from "./rootPath";

// 获取模板目录
export function getTemplateReadPath(): Required<Config["template"]> {
  const configView = get(config, "template.view");
  const configStore = get(config, "template.store");

  return {
    view: configView ? rootPath + "/" + configView : "",
    store: configStore ? rootPath + "/" + configStore : ""
  };
}
