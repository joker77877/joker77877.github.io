import { defineConfig } from 'vitepress';
const base = process.env.NODE_ENV === 'development' ? '' : '/yby-docs/';
export default defineConfig({
    title: 'joker的前端梦工厂',
    description: 'Just playing around.',
    base,
    themeConfig: {
        // Type is `DefaultTheme.Config`
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
        outlineTitle: 'In hac pagina',
        siteTitle: '尹彬宇的前端梦工厂',
        sidebar: [
            {
                text: '文档中心',
                items: [
                    { text: 'css', link: '/css' },
                    { text: 'Getting Started', link: '/getting-started' },
                ],
            },
        ],
        nav: [
            { text: '文档', link: '/guide' },
            {
                text: 'Dropdown Menu',
                items: [
                    {
                        // Title for the section.
                        text: 'Section A Title',
                        items: [
                            { text: 'Section A Item A', link: '...' },
                            { text: 'Section B Item B', link: '...' },
                        ],
                    },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' },
                ],
            },
            {
                text: 'Dropdown Menu',
                items: [
                    {
                        // You may also omit the title.
                        items: [
                            { text: 'Section A Item A', link: '...' },
                            { text: 'Section B Item B', link: '...' },
                        ],
                    },
                ],
            },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/joker77877' },
        ],
        docFooter: {
            prev: 'Pagina prior',
            next: 'Proxima pagina',
        },
    },
});
