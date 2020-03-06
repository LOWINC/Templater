# Templater

骨架初始化工具

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

> lowincCreatefile user

加上 store 生成 store

> lowincCreatefile user store

### TODO

1. 报错

> because it would be overwritten by multiple input files.

直接通过文件生成会报错
临时改成了 字符串
需要修改 src/utils/template.ts , src/template/view.ts, src/template/store.ts
