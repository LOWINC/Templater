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
  "store": "src/store",
  // 可选
  "template": {
    "view": "template/index.tsx",
    "store": "template/index.ts"
  }
}
```

### 使用

默认生成页面

> lowincCreatefile pageName

加上第二个参数 store 生成 store

> lowincCreatefile storeName store
