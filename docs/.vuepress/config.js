module.exports = {
	port: '80',
    title: 'xcw帮助',
    description: 'xcw帮助',
    base: '/',
    plugins: {
        '@vuepress/search': {
            searchMaxSuggestions: 10
        },
        '@vuepress/back-to-top': true,
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新的内容",
                buttonText: "刷新",
            }
        }
    },
    head: [
        ['link', { rel: 'icon', href: 'logo.png' }],
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-CZJ8X185MG',
            }
        ],
        [
            'script',
            {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-CZJ8X185MG');",
            ],
        ],
    ],
    themeConfig: {
        search: true,
        searchMaxSuggestions: 5,
        smoothScroll: true,
        lastUpdated: '上一次编辑',
        docsDir: 'docs',
        docsBranch: 'main',
        repo: 'sanshanya/hoshino_xcw',
        repoLabel: 'GitHub',
        docsRepo: 'sanshanya/hoshino_xcw_docs',
        editLinks: true,
        editLinkText: '编辑此页',
        displayAllHeaders: false,
        sidebarDepth: 2,
        activeHeaderLinks: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '关于', link: '/about/' },
            { text: '帮助', link: '/help/' },
            { text: 'CQ码', link: '/cqcode/' },
            { text: '搭建', link: '/build/' },
        ],
        sidebar: {
            '/about/': [
              '',
            ],
            '/help/': [
                '',
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
            ],
            '/cqcode/': [
                '',
            ],
            '/build/': [
                '',
                'main',
                'hoshino',
                'faq',
                'slider',
                'then',
            ]
        }
    }
}
