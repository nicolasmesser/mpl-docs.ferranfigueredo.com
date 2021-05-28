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
    navbar: {
      title: 'MPL-Publisher',
      logo: {
        alt: 'MPL-Publisher',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://mpl-publisher.ferranfigueredo.com',
          label: '🏠 Homepage',
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
