import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/react/': [
        {
            text: '介绍',
            collapsible: true,
            items: [{ text: '什么是React?', link: '/react/introduce' }],
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
            ],
        },
    ],
};
