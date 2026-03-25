import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'L.A.F.R.E.S.',
  tagline: 'Net-Gain Fusion Demonstrated - Published in Nature Scientific Reports 2024',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production: GitHub Pages project site. Custom domain (maximusfusion.com) can be enabled later in repo Settings + DNS.
  url: 'https://szemkoff.github.io',
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
        blogRouteBasePath: '/blog',
        indexBlog: true,
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
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          blogTitle: 'Project updates',
          blogDescription:
            'Milestones, lab progress, and science news for L.A.F.R.E.S. — not a website changelog.',
          blogSidebarTitle: 'Recent posts',
          postsPerPage: 8,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'L.A.F.R.E.S. project updates',
            description: 'Fusion research program news from MAXIMUS FUSION SYSTEMS / L.A.F.R.E.S.',
            copyright: `Copyright © ${new Date().getFullYear()} L.A.F.R.E.S.`,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card for link previews (1536x1024)
    image: 'img/LAFRES_Logo.jpg',
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
        {to: '/', label: 'Home', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Project updates', position: 'left'},
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
              to: '/docs/safety/safety-overview',
            },
            {
              label: 'Simulations',
              to: '/docs/simulations/lithium-cfd',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Project plan',
              to: '/docs/project-plan',
            },
            {
              label: 'Roadmap',
              to: '/docs/roadmap/roadmap-overview',
            },
            {
              label: 'Diagrams',
              to: '/docs/diagrams',
            },
            {
              label: 'Team',
              to: '/docs/team',
            },
            {
              label: 'Project updates (blog)',
              to: '/blog',
            },
            {
              label: 'FAQ',
              to: '/docs/faq',
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
