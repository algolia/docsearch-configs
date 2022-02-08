new Crawler({
  appId: '',
  apiKey: '',
  rateLimit: 8,
  startUrls: ['https://doc.modelica.org/'],
  renderJavaScript: false,
  sitemaps: ['https://doc.modelica.org/sitemap.xml'],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    'https://doc.modelica.org/**',
    'https://specification.modelica.org/**',
  ],
  schedule: 'at 10:30 on Thursday',
  actions: [
    {
      indexName: 'modelica',
      pathsToMatch: ['https://doc.modelica.org/**'],
      recordExtractor: ({ $, helpers, url }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          '.ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples';
        $(toRemove).remove();

        // `tool`, `version` and `library` could be retrieved using `meta` tags.
        // see https://docsearch.algolia.com/docs/required-configuration#introduce-global-information-as-meta-tags
        const pathParts = url.pathname.split('/');
        const libraryWithVersion = pathParts[1];
        const [library, version] = libraryWithVersion.split('%20');
        const tool = pathParts[4];

        return helpers.docsearch({
          recordProps: {
            lvl1: 'h2',
            content: 'p, li, .ModelicaDescription, .ltx_text',
            lvl0: {
              selectors: 'h1',
            },
            lvl2: 'h3',
            lvl3: 'h4',
            lvl4: 'h5',
            lvl5: 'h6',
            tool: {
              defaultValue: [tool],
            },
            version: {
              defaultValue: [version],
            },
            library: {
              defaultValue: [library],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: 'modelica',
      pathsToMatch: ['https://specification.modelica.org/**'],
      recordExtractor: ({ $, helpers, url }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          '.ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples';
        $(toRemove).remove();

        // `version` could be retrieved using `meta` tags.
        // see https://docsearch.algolia.com/docs/required-configuration#introduce-global-information-as-meta-tags
        const pathParts = url.pathname.split('/');
        const version = pathParts[2];

        return helpers.docsearch({
          recordProps: {
            lvl1: 'h2',
            content: 'p, li, .ModelicaDescription, .ltx_text',
            lvl0: {
              selectors: 'h1',
            },
            lvl2: 'h3',
            lvl3: 'h4',
            lvl4: 'h5',
            lvl5: 'h6',
            version: {
              defaultValue: [version],
            },
            tags: {
              defaultValue: ['specification'],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    modelica: {
      attributesForFaceting: [
        'type',
        'lang',
        'tags',
        'tool',
        'version',
        'library',
      ],
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
