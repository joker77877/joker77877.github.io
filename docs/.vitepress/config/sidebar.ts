import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/react/': [
        {
            text: '介绍',
            collapsible: true,
            items: [{ text: '什么是React?', link: '/react/introduce' }],
        },
    ],
    '/other/': [
        {
            text: '技术文档',
            collapsible: true,
            items: [{ text: '低代码平台重构技术文档', link: '/other/amis' },
            { text: '生死狙击1手游官网重构技术文档', link: '/other/ssjj' }],
        },
    ],
    '/vue/': [
        {
            text: '文档中心',
            items: [
                {
                    text: 'css',
                    items: [
                        { text: 'tailwindcss', link: '/css/tailwindcss' },
                        {
                            text: 'Getting Started',
                            link: '/getting-started',
                        },
                    ],
                },
                { text: 'Getting Started', link: '/getting-started' },
            ],
        },
    ],
    '/tailwindcss/': [
        {
            text: 'tailwindcss',
            collapsible: true,
            items: [
                {
                    text: '什么是tailwindcss？',
                    link: '/tailwindcss/what-is-tailwindcss',
                },
                { text: '入门', link: '/tailwindcss/getting-started' },
                { text: 'windicss', link: '/tailwindcss/windicss' },
                { text: 'UnoCSS', link: '/tailwindcss/unocss' },
            ],
        },
    ],
};
