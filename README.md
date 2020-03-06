# Templater

基于 nodejs 实现的一个命令行工具,用于生成基础代码.

默认模板中: 页面使用 Taro,数据流使用 Dva,可以通过配置 templater.json 使用自定义模板.

### 安装

> yarn global add @lowinc/createfile

### 配置

根目录下

> templater.json

```json
{
  "view": "src/pages",
  "store": "src/store"
}
```

```ts
  view: '页面路径';
  store: 'store路径';
  template?: {
    view?: '自定义页面路径';
    store?: '自定义store路径';
  };
```

### 使用

默认生成页面

> lowincCreatefile pageName

加上第二个参数 store 生成 store

> lowincCreatefile storeName store

### TODO

1. 报错

直接通过文件生成会报错,暂时使用字符包代替

需要修改 src/utils/template.ts , src/template/view.ts, src/template/store.ts

> because it would be overwritten by multiple input files.
