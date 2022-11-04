<br>

<p align="center">
<img src="https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg" style="width:100px;" />
</p>

<h1 align="center">UnoCSS</h1>

<p align="center">
即时按需原子 CSS 引擎。
</p>

## Features

灵感来自 [Windi CSS](http://windicss.org/), [Tailwind CSS](https://tailwindcss.com/), 和 [Twind](https://github.com/tw-in-js/twind), 但:

-   [完全可定制](#configurations) - 没有核心实用程序，所有功能都通过预设提供。
-   没有解析，没有 AST，没有扫描，它是**即时的**（比 Windi CSS 或 Tailwind JIT 快 5 倍）。
-   ~6kb min+brotli - 零依赖和对浏览器友好。
-   [捷径](#shortcuts) - 别名实用程序，动态。
-   [属性化模式](https://github.com/unocss/unocss/tree/main/packages/preset-attributify/) - 在属性中分组实用程序。
-   [纯 CSS 图标](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - 将任何图标用作单个类。
-   [变体组](https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group) - 具有公共前缀的组实用程序的简写。
-   [CSS 指令](https://github.com/unocss/unocss/tree/main/packages/transformer-directives) - 使用 `@apply` 指令在 CSS 中重用实用工具。
-   [编译模式](https://github.com/unocss/unocss/tree/main/packages/transformer-compile-class/) - 在构建时将多个类合成为一个。
-   [检查器](#inspector) - 交互式检查和调试。
-   [CSS-in-JS 运行时构建](https://github.com/unocss/unocss/tree/main/packages/runtime) - 将 UnoCSS 与一行 CDN 导入一起使用。
-   [VS Code 插件](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)
-   CSS 的代码分割 - 为 MPA 提供最小的 CSS。

## 在 vite 中安装

### @unocss/vite

UnoCSS 的 Vite 插件。随 unocss 软件包一起提供。

```
npm i -D unocss
```

```ts
// vite.config.ts
import Unocss from 'unocss/vite';

export default {
    plugins: [
        Unocss({
            /* options */
        }),
    ],
};
```

将 uno.css 添加到您的入口文件：

```ts
// main.ts
import 'uno.css';
```

#### 无预设使用

> 这个插件没有任何默认预设。如果您在 UnoCSS 之上构建元框架，请参阅[此文件](https://github.com/unocss/unocss/blob/main/packages/unocss/src/vite.ts)以获取绑定默认预设的示例。

```sh
npm i -D @unocss/vite
```

```ts
// vite.config.ts
import Unocss from '@unocss/vite';

export default {
    plugins: [
        Unocss({
            presets: [
                /* no presets by default */
            ],
            /* options */
        }),
    ],
};
```

## 总结

更多教程可去[UnoCSS官网](https://github.com/unocss/unocss)查看。