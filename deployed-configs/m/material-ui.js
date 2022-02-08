new Crawler({
  appId: '',
  apiKey: '',
  rateLimit: 8,
  startUrls: [
    'https://mui.com/components/',
    'https://mui.com/',
    'https://v3.mui.com/',
    'https://v4.mui.com/',
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    '**/?expand-path**',
    '**/?expand-path**/**',
    '**/company/**',
    '**/store/**',
    '**/blog/**',
    'https://mui.com/guides/migration-v4/',
  ],
  ignoreCanonicalTo: true,
  discoveryPatterns: [
    'https://mui.com/**',
    'https://v3.mui.com/**',
    'https://v4.mui.com/**',
  ],
  schedule: 'at 10:00 on Thursday',
  actions: [
    {
      indexName: 'material-ui',
      pathsToMatch: ['https://mui.com/components/**'],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = '.exclude-docsearch-indexing';
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: '.markdown-body h1',
            content:
              '.markdown-body p, .markdown-body li, .markdown-body table td:last-child',
            lvl0: {
              selectors: '.algolia-lvl0',
            },
            lvl2: '.markdown-body h2',
            lvl3: '.markdown-body h3, .markdown-body table td:first-of-type',
            lvl4: '.markdown-body h4',
            pageRank: '10',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'material-ui',
      pathsToMatch: [
        '!https://mui.com/components/**',
        'https://v3.mui.com**/**',
        'https://v4.mui.com**/**',
        'https://mui.com**/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = '.exclude-docsearch-indexing';
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: '.markdown-body h1',
            content:
              '.markdown-body p, .markdown-body li, .markdown-body table td:last-child',
            lvl0: {
              selectors: '.algolia-lvl0',
            },
            lvl2: '.markdown-body h2',
            lvl3: '.markdown-body h3, .markdown-body table td:first-of-type',
            lvl4: '.markdown-body h4',
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    'material-ui': {
      attributesForFaceting: ['type', 'lang', 'version', 'language'],
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
