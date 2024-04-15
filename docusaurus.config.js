/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Docs | MPL-Publisher',
  tagline: '✍ Keep earning with your great writing',
  url: 'https://docs.mpl-publisher.com',
  trailingSlash: true,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'ferranfg', // Usually your GitHub org/user name.
  projectName: 'docs.mpl-publisher.com', // Usually your repo name.
  themeConfig: {
    image: 'https://ps.w.org/mpl-publisher/assets/banner-1544x500.jpg?rev=2636271',
    docs: {
      sidebar: {
        hideable: true
      }
    },
    metadata: [{
      property: 'og:type',
      content: 'article'
    }, {
      property: 'fb:app_id',
      content: '1123545991778390'
    }],
    navbar: {
      title: 'MPL-Publisher',
      logo: {
        alt: 'MPL-Publisher',
        src: 'img/logo.webp'
      },
      items: [
        {
          href: '/search/',
          label: '🔍 Search Docs',
        },
        {
          href: 'https://mpl-publisher.com',
          label: '📚 Home',
          position: 'right',
        },
        {
          href: 'https://mpl-publisher.com/blog',
          label: '📰 Blog',
          position: 'right',
        },
        {
          href: 'https://mpl-publisher.com/blog/contact-us',
          label: '📨 Contact',
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
      '@docusaurus/plugin-content-docs',
      {
        id: 'children',
        path: 'children',
        routeBasePath: 'children'
      }
    ]
  ],
  scripts: [{
    'src': 'https://plausible.f13o.com/js/plausible.js',
    'defer': true,
    'data-domain': 'mpl-publisher.com'
  }],
};
