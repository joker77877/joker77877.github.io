# Windi CSS

## 入门

Windi CSS 是下一代实用程序优先的 CSS 框架。

如果您已经熟悉 [Tailwind CSS](https://tailwindcss.com/docs/installation)，可以将 Windi CSS 视为 Tailwind 的按需替代品，它提供更快的加载时间、与 Tailwind v2.0 的完全兼容性以及一系列额外的酷功能。

## 为什么选择 Windi CSS？

作者的一句话应该说明他创建 Windi CSS 的动机：

> 当我的项目变大，大约有几十个组件时，初始编译时间达到 3s，使用 Tailwind CSS 热更新时间超过 1s。
> \- [@voorjaar](https://github.com/voorjaar)

通过扫描您的 HTML 和 CSS 并按需生成实用程序，Windi CSS 能够在开发中提供更快的加载时间和快速的 HMR，并且不需要在生产中进行清除。

## 基本用法

Windi CSS 支持 [Tailwind CSS](https://tailwindcss.com/docs/installation) 的所有[实用程序](https://windicss.org/utilities/)，无需任何额外配置。

**只有你使用的实用程序会生成相应的 CSS。**

## [Vite](https://vitejs.dev/) 集成

### Features

-   ⚡️ **速度快** - 比 Vite 上的 Tailwind 快 20~100 倍
-   🧩 按需 CSS 实用程序（与 Tailwind CSS v2 完全兼容
-   📦 按需原生元素样式重置（预检）
-   🔥 热模块更换 (HMR)
-   🍃 从 tailwind.config.js 加载配置
-   🤝 与框架无关 - Vue、React、Svelte 和 vanilla！
-   📄 CSS `@apply` / `@screen` 指令转换（也适用于 Vue SFC 的 `<style>`）
-   🎳 支持变体组 - 例如`bg-gray-200 hover:(bg-gray-100 text-red-300)`
-   😎 ["在 Devtools 中设计"](#design-in-devtools) - 如果您在传统的 Tailwind 中以这种方式工作，我们没有理由不能！

### 安装

安装包：

```bash
pnpm add vite-plugin-windicss windicss -D
```

然后，在你的 Vite 配置中安装插件：

#### **`vite.config.js`**

```ts
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
    plugins: [WindiCSS()],
});
```

最后，在你的的 Vite 如入口文件导入 virtual:windi.css：

#### **`main.ts`**

```ts
import 'virtual:windi.css';
```

## 用于 VS Code的 Windi CSS 智能感知

Windi CSS IntelliSense 通过为 Visual Studio Code 用户提供自动完成、语法突出显示、代码折叠和构建等高级功能来增强 Windi 开发体验。

### 安装

**[通过 Visual Studio Code Marketplace 安装 →](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)**


本插件自带windicss编译器，无需安装windicss即可使用，还支持配置文件 `(tailwind|windi).config.(js|cjs|ts)`.

## 总结

更多教程可去[Windi CSS官网](https://windicss.org/guide/)查看。
