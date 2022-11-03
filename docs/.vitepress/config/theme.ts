import { sidebar } from './sidebar';
import { nav } from './nav';
import { DefaultTheme } from 'vitepress';

const themeConfig: DefaultTheme.Config = {
    socialLinks: [{ icon: 'github', link: 'https://github.com/joker77877' }],
    docFooter: {
        prev: '上一页',
        next: '下一页',
    },
    algolia: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress',
    },
    editLink: {
        pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        text: 'Edit this page on GitHub',
    },
    outlineTitle: '在本页面',
    siteTitle: '尹彬宇的前端梦工厂',
    nav,
    sidebar,
};

export default themeConfig;
