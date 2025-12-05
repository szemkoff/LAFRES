import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'L.A.F.R.E.S.',
  tagline: 'Lithium-Acoustic Fusion Research & Engineering System',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://szemkoff.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/LAFRES/',

  // GitHub pages deployment config.
  organizationName: 'szemkoff', // Your GitHub username
  projectName: 'LAFRES', // Your repo name
  trailingSlash: false,

  onBrokenLinks: 'throw',
  
  markdown: {
    mermaid: true,
  },
  
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: false,
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'L.A.F.R.E.S.',
      logo: {
        alt: 'LAFRES Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        width: 40,
        height: 40,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview',
            },
            {
              label: 'System Architecture',
              to: '/docs/system-architecture',
            },
            {
              label: 'Physics Background',
              to: '/docs/physics-background',
            },
          ],
        },
        {
          title: 'Technical',
          items: [
            {
              label: 'Specifications',
              to: '/docs/specs/plasma-core',
            },
            {
              label: 'Safety Protocols',
              to: '/docs/safety/overview',
            },
            {
              label: 'Simulations',
              to: '/docs/simulations',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Roadmap',
              to: '/docs/roadmap/overview',
            },
            {
              label: 'Team',
              to: '/docs/team',
            },
            {
              label: 'Contact',
              to: '/docs/contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} L.A.F.R.E.S. Research Team. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
