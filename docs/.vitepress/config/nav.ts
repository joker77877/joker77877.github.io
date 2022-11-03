import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: '框架',
        items: [
            { text: 'React', link: '/react/introduce' },
            { text: 'Vue', link: '/item-3' },
        ],
    },
    {
        text: 'css',
        items: [
            {
                // Title for the section.
                text: '预处理器',
                items: [
                    { text: 'Less', link: '...' },
                    { text: 'Scss', link: '...' },
                ],
            },
            {
                // Title for the section.
                text: 'css框架',
                items: [
                    {
                        text: 'tailwindcss',
                        link: '/tailwindcss/what-is-tailwindcss',
                    },
                ],
            },
        ],
    },
];
