/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MPL-Publisher Documentation',
  tagline: 'Self-publish your WordPress book & ebook 📚',
  url: 'https://mpl-docs.ferranfigueredo.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'ferranfg', // Usually your GitHub org/user name.
  projectName: 'mpl-docs', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      content: '📚 To get all the available formats and more cool features, visit <a href="https://mpl-publisher.ferranfigueredo.com/?utm_medium=docs&utm_campaign=premium" target="_blank">MPL-Publisher Premium</a> ⭐'
    },
    navbar: {
      title: 'MPL-Publisher',
      logo: {
        alt: 'MPL-Publisher',
        src: 'img/logo.webp'
      },
      items: [
        {
          href: 'https://mpl-publisher.ferranfigueredo.com',
          label: '🏠 Home',
          position: 'left',
        },
        {
          href: 'https://mpl-marketplace.ferranfigueredo.com',
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
          label: 'WordPress',
          position: 'right',
        },
        {
          href: 'https://github.com/ferranfg/mpl-publisher',
          label: 'GitHub',
          position: 'right',
        },
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
      copyright: `© <a href="https://ferranfigueredo.com">ferranfigueredo.com</a> 🚀 All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ferranfg/mpl-docs.ferranfigueredo.com/edit/master/'
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
        domain: 'mpl-docs.ferranfigueredo.com',
        customDomain: 'plausible.ferranfigueredo.com'
      },
    ]
  ],
};
