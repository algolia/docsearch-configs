new Crawler({
  appId: '',
  apiKey: '',
  rateLimit: 8,
  startUrls: [
    'https://docs.imandra.ai/imandra-docs/',
    'https://docs.imandra.ai/',
    'https://docs.imandra.ai/ipl/',
    'https://docs.imandra.ai/fix-engine/',
    'https://docs.imandra.ai/idf-py/',
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ['**/odoc/**'],
  ignoreCanonicalTo: false,
  discoveryPatterns: ['https://docs.imandra.ai/**'],
  schedule: 'at 15:20 on Wednesday',
  actions: [
    {
      indexName: 'imandra',
      pathsToMatch: ['https://docs.imandra.ai/imandra-docs/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: '.text_cell_render h2',
            content: '.text_cell_render p, .text_cell_render li',
            lvl0: {
              selectors: '.text_cell_render h1',
            },
            lvl2: '.text_cell_render h3',
            lvl3: '.text_cell_render h4',
            lvl4: '.text_cell_render h5',
            lvl5: '.text_cell_render h6',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'imandra',
      pathsToMatch: ['https://docs.imandra.ai/ipl/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: '.main-content h2',
            content: '.main-content p',
            lvl0: {
              selectors: '.main-content h1',
            },
            lvl2: '.main-content h3',
            lvl3: '.main-content h4',
            lvl4: '.main-content h5',
            lvl5: '.main-content h6',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'imandra',
      pathsToMatch: ['https://docs.imandra.ai/fix-engine/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: '.main-content h2',
            content: '.main-content p',
            lvl0: {
              selectors: '.main-content h1',
            },
            lvl2: '.main-content h3',
            lvl3: '.main-content h4',
            lvl4: '.main-content h5',
            lvl5: '.main-content h6',
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: 'imandra',
      pathsToMatch: ['https://docs.imandra.ai/idf-py/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: '.main-content h2',
            content: '.main-content p',
            lvl0: {
              selectors: '.main-content h1',
            },
            lvl2: '.main-content h3',
            lvl3: '.main-content h4',
            lvl4: '.main-content h5',
            lvl5: '.main-content h6',
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    imandra: {
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
