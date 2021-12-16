new Crawler({
  appId: '',
  apiKey: '',
  rateLimit: 8,
  startUrls: [
    'https://doc.ibexa.co/en/latest/api',
    'https://doc.ibexa.co/en/3.3/api',
    'https://doc.ibexa.co/en/3.2/api',
    'https://doc.ibexa.co/en/2.5/api',
    'https://doc.ibexa.co/en/1.13/api',
    'https://doc.ibexa.co/en/master/api',
    'https://doc.ibexa.co/en/latest/community_resources',
    'https://doc.ibexa.co/en/3.3/community_resources',
    'https://doc.ibexa.co/en/3.2/community_resources',
    'https://doc.ibexa.co/en/2.5/community_resources',
    'https://doc.ibexa.co/en/1.13/community_resources',
    'https://doc.ibexa.co/en/master/community_resources',
    'https://doc.ibexa.co/en/latest/extending',
    'https://doc.ibexa.co/en/3.3/extending',
    'https://doc.ibexa.co/en/3.2/extending',
    'https://doc.ibexa.co/en/2.5/extending',
    'https://doc.ibexa.co/en/1.13/extending',
    'https://doc.ibexa.co/en/master/extending',
    'https://doc.ibexa.co/en/latest/getting_started',
    'https://doc.ibexa.co/en/3.3/getting_started',
    'https://doc.ibexa.co/en/3.2/getting_started',
    'https://doc.ibexa.co/en/2.5/getting_started',
    'https://doc.ibexa.co/en/1.13/getting_started',
    'https://doc.ibexa.co/en/master/getting_started',
    'https://doc.ibexa.co/en/latest/guide',
    'https://doc.ibexa.co/en/3.3/guide',
    'https://doc.ibexa.co/en/3.2/guide',
    'https://doc.ibexa.co/en/2.5/guide',
    'https://doc.ibexa.co/en/1.13/guide',
    'https://doc.ibexa.co/en/master/guide',
    'https://doc.ibexa.co/en/latest/migrating',
    'https://doc.ibexa.co/en/3.3/migrating',
    'https://doc.ibexa.co/en/3.2/migrating',
    'https://doc.ibexa.co/en/2.5/migrating',
    'https://doc.ibexa.co/en/1.13/migrating',
    'https://doc.ibexa.co/en/master/migrating',
    'https://doc.ibexa.co/en/latest/releases',
    'https://doc.ibexa.co/en/3.3/releases',
    'https://doc.ibexa.co/en/3.2/releases',
    'https://doc.ibexa.co/en/2.5/releases',
    'https://doc.ibexa.co/en/1.13/releases',
    'https://doc.ibexa.co/en/master/releases',
    'https://doc.ibexa.co/en/latest/tutorials',
    'https://doc.ibexa.co/en/3.3/tutorials',
    'https://doc.ibexa.co/en/3.2/tutorials',
    'https://doc.ibexa.co/en/2.5/tutorials',
    'https://doc.ibexa.co/en/1.13/tutorials',
    'https://doc.ibexa.co/en/master/tutorials',
    'https://doc.ibexa.co/en/latest/updating',
    'https://doc.ibexa.co/en/3.3/updating',
    'https://doc.ibexa.co/en/3.2/updating',
    'https://doc.ibexa.co/en/2.5/updating',
    'https://doc.ibexa.co/en/1.13/updating',
    'https://doc.ibexa.co/en/master/updating',
    'https://doc.ibexa.co/en/latest/upgrading',
    'https://doc.ibexa.co/en/3.3/upgrading',
    'https://doc.ibexa.co/en/3.2/upgrading',
    'https://doc.ibexa.co/en/2.5/upgrading',
    'https://doc.ibexa.co/en/1.13/upgrading',
    'https://doc.ibexa.co/en/master/upgrading',
    'https://doc.ibexa.co/en/latest/references/',
    'https://doc.ibexa.co/en/3.3/references/',
    'https://doc.ibexa.co/en/3.2/references/',
    'https://doc.ibexa.co/en/2.5/references/',
    'https://doc.ibexa.co/en/1.13/references/',
    'https://doc.ibexa.co/en/master/references/',
    'https://doc.ibexa.co/en/latest/',
    'https://doc.ibexa.co/en/3.3/',
    'https://doc.ibexa.co/en/3.2/',
    'https://doc.ibexa.co/en/2.5/',
    'https://doc.ibexa.co/en/1.13/',
    'https://doc.ibexa.co/en/master/',
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ['https://doc.ibexa.co/**'],
  schedule: 'at 20:50 on Tuesday',
  actions: [
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/latest/updating**/**',
        "https://doc.ibexa.co/en/latest/upgrading**/**'",
        'https://doc.ibexa.co/en/latest/api**/**',
        'https://doc.ibexa.co/en/latest/extending**/**',
        'https://doc.ibexa.co/en/latest/tutorials**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['latest'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '16',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/3.3/updating**/**',
        "https://doc.ibexa.co/en/3.3/upgrading**/**'",
        'https://doc.ibexa.co/en/3.3/api**/**',
        'https://doc.ibexa.co/en/3.3/extending**/**',
        'https://doc.ibexa.co/en/3.3/tutorials**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['3.3'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '16',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/3.2/updating**/**',
        "https://doc.ibexa.co/en/3.2/upgrading**/**'",
        'https://doc.ibexa.co/en/3.2/api**/**',
        'https://doc.ibexa.co/en/3.2/extending**/**',
        'https://doc.ibexa.co/en/3.2/tutorials**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['3.2'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '16',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/2.5/updating**/**',
        "https://doc.ibexa.co/en/2.5/upgrading**/**'",
        'https://doc.ibexa.co/en/2.5/api**/**',
        'https://doc.ibexa.co/en/2.5/extending**/**',
        'https://doc.ibexa.co/en/2.5/tutorials**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['2.5'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '16',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/1.13/updating**/**',
        "https://doc.ibexa.co/en/1.13/upgrading**/**'",
        'https://doc.ibexa.co/en/1.13/api**/**',
        'https://doc.ibexa.co/en/1.13/extending**/**',
        'https://doc.ibexa.co/en/1.13/tutorials**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['1.13'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '16',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/master/updating**/**',
        "https://doc.ibexa.co/en/master/upgrading**/**'",
        'https://doc.ibexa.co/en/master/api**/**',
        'https://doc.ibexa.co/en/master/extending**/**',
        'https://doc.ibexa.co/en/master/tutorials**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['master'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '16',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/latest/community_resources**/**',
        'https://doc.ibexa.co/en/latest/references/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['latest'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '6',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/3.3/community_resources**/**',
        'https://doc.ibexa.co/en/3.3/references/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['3.3'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '6',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/3.2/community_resources**/**',
        'https://doc.ibexa.co/en/3.2/references/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['3.2'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '6',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/2.5/community_resources**/**',
        'https://doc.ibexa.co/en/2.5/references/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['2.5'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '6',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/1.13/community_resources**/**',
        'https://doc.ibexa.co/en/1.13/references/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['1.13'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '6',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/master/community_resources**/**',
        'https://doc.ibexa.co/en/master/references/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['master'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '6',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/latest/getting_started**/**',
        'https://doc.ibexa.co/en/latest/guide**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['latest'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '18',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/3.3/getting_started**/**',
        'https://doc.ibexa.co/en/3.3/guide**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['3.3'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '18',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/3.2/getting_started**/**',
        'https://doc.ibexa.co/en/3.2/guide**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['3.2'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '18',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/2.5/getting_started**/**',
        'https://doc.ibexa.co/en/2.5/guide**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['2.5'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '18',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/1.13/getting_started**/**',
        'https://doc.ibexa.co/en/1.13/guide**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['1.13'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '18',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/master/getting_started**/**',
        'https://doc.ibexa.co/en/master/guide**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['master'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '18',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: ['https://doc.ibexa.co/en/latest/releases**/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['latest'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '12',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: ['https://doc.ibexa.co/en/3.3/releases**/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['3.3'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '12',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: ['https://doc.ibexa.co/en/3.2/releases**/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['3.2'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '12',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: ['https://doc.ibexa.co/en/2.5/releases**/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['2.5'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '12',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: ['https://doc.ibexa.co/en/1.13/releases**/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['1.13'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '12',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: ['https://doc.ibexa.co/en/master/releases**/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['master'],
            },
            lang: {
              defaultValue: ['en'],
            },
            pageRank: '12',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/latest/**',
        '!https://doc.ibexa.co/en/latest/api**/**',
        '!https://doc.ibexa.co/en/latest/extending**/**',
        '!https://doc.ibexa.co/en/latest/tutorials**/**',
        '!https://doc.ibexa.co/en/latest/references**/**',
        '!https://doc.ibexa.co/en/latest/upgrading**/**',
        '!https://doc.ibexa.co/en/latest/updating**/**',
        '!https://doc.ibexa.co/en/latest/tutorials**/**',
        '!https://doc.ibexa.co/en/latest/releases**/**',
        '!https://doc.ibexa.co/en/latest/guide**/**',
        '!https://doc.ibexa.co/en/latest/getting_started**/**',
        '!https://doc.ibexa.co/en/latest/community_resources**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['latest'],
            },
            lang: {
              defaultValue: ['en'],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/3.3/**',
        '!https://doc.ibexa.co/en/3.3/api**/**',
        '!https://doc.ibexa.co/en/3.3/extending**/**',
        '!https://doc.ibexa.co/en/3.3/tutorials**/**',
        '!https://doc.ibexa.co/en/3.3/references**/**',
        '!https://doc.ibexa.co/en/3.3/upgrading**/**',
        '!https://doc.ibexa.co/en/3.3/updating**/**',
        '!https://doc.ibexa.co/en/3.3/tutorials**/**',
        '!https://doc.ibexa.co/en/3.3/releases**/**',
        '!https://doc.ibexa.co/en/3.3/guide**/**',
        '!https://doc.ibexa.co/en/3.3/getting_started**/**',
        '!https://doc.ibexa.co/en/3.3/community_resources**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['3.3'],
            },
            lang: {
              defaultValue: ['en'],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/3.2/**',
        '!https://doc.ibexa.co/en/3.2/api**/**',
        '!https://doc.ibexa.co/en/3.2/extending**/**',
        '!https://doc.ibexa.co/en/3.2/tutorials**/**',
        '!https://doc.ibexa.co/en/3.2/references**/**',
        '!https://doc.ibexa.co/en/3.2/upgrading**/**',
        '!https://doc.ibexa.co/en/3.2/updating**/**',
        '!https://doc.ibexa.co/en/3.2/tutorials**/**',
        '!https://doc.ibexa.co/en/3.2/releases**/**',
        '!https://doc.ibexa.co/en/3.2/guide**/**',
        '!https://doc.ibexa.co/en/3.2/getting_started**/**',
        '!https://doc.ibexa.co/en/3.2/community_resources**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['3.2'],
            },
            lang: {
              defaultValue: ['en'],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/2.5/**',
        '!https://doc.ibexa.co/en/2.5/api**/**',
        '!https://doc.ibexa.co/en/2.5/extending**/**',
        '!https://doc.ibexa.co/en/2.5/tutorials**/**',
        '!https://doc.ibexa.co/en/2.5/references**/**',
        '!https://doc.ibexa.co/en/2.5/upgrading**/**',
        '!https://doc.ibexa.co/en/2.5/updating**/**',
        '!https://doc.ibexa.co/en/2.5/tutorials**/**',
        '!https://doc.ibexa.co/en/2.5/releases**/**',
        '!https://doc.ibexa.co/en/2.5/guide**/**',
        '!https://doc.ibexa.co/en/2.5/getting_started**/**',
        '!https://doc.ibexa.co/en/2.5/community_resources**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['2.5'],
            },
            lang: {
              defaultValue: ['en'],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/1.13/**',
        '!https://doc.ibexa.co/en/1.13/api**/**',
        '!https://doc.ibexa.co/en/1.13/extending**/**',
        '!https://doc.ibexa.co/en/1.13/tutorials**/**',
        '!https://doc.ibexa.co/en/1.13/references**/**',
        '!https://doc.ibexa.co/en/1.13/upgrading**/**',
        '!https://doc.ibexa.co/en/1.13/updating**/**',
        '!https://doc.ibexa.co/en/1.13/tutorials**/**',
        '!https://doc.ibexa.co/en/1.13/releases**/**',
        '!https://doc.ibexa.co/en/1.13/guide**/**',
        '!https://doc.ibexa.co/en/1.13/getting_started**/**',
        '!https://doc.ibexa.co/en/1.13/community_resources**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['1.13'],
            },
            lang: {
              defaultValue: ['en'],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'ezplatform',
      pathsToMatch: [
        'https://doc.ibexa.co/en/master/**',
        '!https://doc.ibexa.co/en/master/api**/**',
        '!https://doc.ibexa.co/en/master/extending**/**',
        '!https://doc.ibexa.co/en/master/tutorials**/**',
        '!https://doc.ibexa.co/en/master/references**/**',
        '!https://doc.ibexa.co/en/master/upgrading**/**',
        '!https://doc.ibexa.co/en/master/updating**/**',
        '!https://doc.ibexa.co/en/master/tutorials**/**',
        '!https://doc.ibexa.co/en/master/releases**/**',
        '!https://doc.ibexa.co/en/master/guide**/**',
        '!https://doc.ibexa.co/en/master/getting_started**/**',
        '!https://doc.ibexa.co/en/master/community_resources**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: 'a.md-nav__link--active',
            content:
              '.md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation',
            },
            lvl2: '.md-content h2',
            lvl3: '.md-content h3',
            lvl4: '.md-content h4',
            lvl5: '.md-content h5',
            lvl6: '.md-content h6',
            version: {
              defaultValue: ['master'],
            },
            lang: {
              defaultValue: ['en'],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    ezplatform: {
      attributesForFaceting: ['type', 'lang'],
      attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url'],
      attributesToHighlight: ['hierarchy', 'hierarchy_camel', 'content'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'hierarchy_radio', 'content'],
      searchableAttributes: [
        'unordered(hierarchy_radio_camel.lvl0)',
        'unordered(hierarchy_radio.lvl0)',
        'unordered(hierarchy_radio_camel.lvl1)',
        'unordered(hierarchy_radio.lvl1)',
        'unordered(hierarchy_radio_camel.lvl2)',
        'unordered(hierarchy_radio.lvl2)',
        'unordered(hierarchy_radio_camel.lvl3)',
        'unordered(hierarchy_radio.lvl3)',
        'unordered(hierarchy_radio_camel.lvl4)',
        'unordered(hierarchy_radio.lvl4)',
        'unordered(hierarchy_radio_camel.lvl5)',
        'unordered(hierarchy_radio.lvl5)',
        'unordered(hierarchy_radio_camel.lvl6)',
        'unordered(hierarchy_radio.lvl6)',
        'unordered(hierarchy_camel.lvl0)',
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy_camel.lvl1)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy_camel.lvl2)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy_camel.lvl3)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy_camel.lvl4)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy_camel.lvl5)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy_camel.lvl6)',
        'unordered(hierarchy.lvl6)',
        'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
      ranking: [
        'words',
        'filters',
        'typo',
        'attribute',
        'proximity',
        'exact',
        'custom',
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: 'allOptional',
    },
  },
});
