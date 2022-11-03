import { defineConfig } from 'vitepress';
import { mdRenderFilename } from './config/markdown';
import themeConfig from './config/theme';

export default defineConfig({
    outDir: '../public',
    title: 'joker的前端梦工厂',
    description: 'Just playing around.',
    // markdown: {
    //     config(md) {
    //         md.use(mdRenderFilename);
    //     },
    // },
    themeConfig,
});
