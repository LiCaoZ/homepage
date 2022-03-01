module.exports = {
    lang: 'zh-CN',
    title: 'LiCaoZ',
    description: 'Hi, LiCaoZ!',

    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'LiCaoZ',
            description: '嗨，我是 LiCaoZ！',
            selectLanguageName: '简体中文',

        },
        '/en/': {
            lang: 'en-US',
            title: 'LiCaoZ',
            description: 'Hi, LiCaoZ!',
            selectLanguageName: 'English',
        },
    },

    theme: '@vuepress/theme-default',
    themeConfig: {
        editLink: false,
        logo: 'https://sdn.geekzu.org/avatar/deb6addcb5b3df43e93b3d7cb0caa46a?s=64',
        locales: {
            '/': {
                navbar: [
                    {
                        text: '首页',
                        link: '/',
                    },
                    {
                        text: '博客',
                        link: 'https://licaoz.com',
                    },
                    {
                        text: '更多',
                        children: [
                            {
                                text: 'GitHub',
                                link: 'https://github.com/LiCaoZ',
                            },
                            {
                                text: '捐赠',
                                link: 'https://licaoz.com/donation',
                            },
                        ],
                    },
                    '/about.md',
                ],
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                tip: '提示',
                warning: '注意',
                danger: '警告',
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '万籁俱寂',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',
                openInNewWindow: '在新窗口打开',
                toggleDarkMode: '切换夜间模式',
                toggleSidebar: '切换侧边栏',

            },

            '/en/': {
                selectLanguageName: 'English',
                editLinkText: 'Edit this page on GitHub',
                navbar: [
                    {
                        text: 'Home',
                        link: '/en/',
                    },
                    {
                        text: 'Blog',
                        link: 'https://licaoz.com',
                    },
                    {
                        text: 'More',
                        children: [
                            {
                                text: 'GitHub',
                                link: 'https://github.com/LiCaoZ',
                            },
                            {
                                text: 'Donate',
                                link: 'https://licaoz.com/donation',
                            },
                        ],
                    },
                    '/en/about.md',
                ],

            },
        },

    },
}