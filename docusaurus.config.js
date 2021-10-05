/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MPL-Publisher Documentation',
  tagline: 'Self-publish your WordPress book & ebook 📚',
  url: 'https://docs.mpl-publisher.com',
  trailingSlash: true,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'ferranfg', // Usually your GitHub org/user name.
  projectName: 'mpl-docs', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      content: '📚 To get all the available formats and more cool features, visit <a href="https://wordpress.mpl-publisher.com/?utm_medium=docs&utm_campaign=premium" target="_blank">MPL-Publisher Premium</a> ⭐'
    },
    colorMode: {
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '☀️',
        lightIconStyle: {
          marginLeft: '2px',
        },
      },
    },
    navbar: {
      title: 'MPL-Publisher',
      logo: {
        alt: 'MPL-Publisher',
        src: 'img/logo.webp'
      },
      items: [
        {
          href: 'https://wordpress.mpl-publisher.com',
          label: '🏠 Home',
          position: 'left',
        },
        {
          href: 'https://marketplace.mpl-publisher.com',
          label: '🧰 Resources',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '🚀 Getting Started',
        },
        {
          href: 'https://wordpress.org/plugins/mpl-publisher/',
          label: '⬇️ Download MPL',
          position: 'right',
        }
      ],
    },
    algolia: {
      apiKey: 'bd08e40560438ad229b7b11c84d35153',
      indexName: 'DOCS',
      // contextualSearch: true,
      appId: 'OC9N1TKHGY'
    },
    hideableSidebar: true,
    footer: {
      copyright: `© <a href="https://mpl-publisher.com">MPL-Publisher</a> 📚 All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ferranfg/docs.mpl-publisher.com/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-plausible',
      {
        domain: 'docs.mpl-publisher.com',
        customDomain: 'plausible.ferranfigueredo.com'
      },
    ]
  ],
  scripts: [
    'https://twemoji.maxcdn.com/v/latest/twemoji.min.js'
  ]
};
