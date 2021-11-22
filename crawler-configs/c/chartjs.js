new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.chartjs.org/docs/latest/",
    "https://www.chartjs.org/",
    "https://www.chartjs.org/docs/2.9.3/",
    "https://www.chartjs.org/docs/master/",
    "https://www.chartjs.org/docs/master/getting-started/index",
    "https://www.chartjs.org/docs/next/",
    "https://www.chartjs.org/docs/next/getting-started/installation",
    "https://www.chartjs.org/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://www.chartjs.org/docs/next/sitemap.xml"],
  exclusionPatterns: ["**/_**", "**/_**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.chartjs.org/**"],
  schedule: "at 11:10 on Tuesday",
  actions: [
    {
      indexName: "chartjs",
      pathsToMatch: ["https://www.chartjs.org/docs/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, section h2",
            content:
              "article p, section p, article li, section li, article td:last-child",
            lvl0: {
              selectors: "header h1, section h1",
            },
            lvl2: "article h3, section h3",
            lvl3: "article h4, article td:first-child, section h4",
            lvl4: "article h5, section h5",
            lvl5: "article h6, section h6",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "chartjs",
      pathsToMatch: ["https://www.chartjs.org/docs/2.9.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, section h2",
            content:
              "article p, section p, article li, section li, article td:last-child",
            lvl0: {
              selectors: "header h1, section h1",
            },
            lvl2: "article h3, section h3",
            lvl3: "article h4, article td:first-child, section h4",
            lvl4: "article h5, section h5",
            lvl5: "article h6, section h6",
            version: {
              defaultValue: ["2.9.3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "chartjs",
      pathsToMatch: ["https://www.chartjs.org/docs/master/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, section h2",
            content:
              "article p, section p, article li, section li, article td:last-child",
            lvl0: {
              selectors: "header h1, section h1",
            },
            lvl2: "article h3, section h3",
            lvl3: "article h4, article td:first-child, section h4",
            lvl4: "article h5, section h5",
            lvl5: "article h6, section h6",
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "chartjs",
      pathsToMatch: [
        "https://www.chartjs.org/docs/master/getting-started/index**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, section h2",
            content:
              "article p, section p, article li, section li, article td:last-child",
            lvl0: {
              selectors: "header h1, section h1",
            },
            lvl2: "article h3, section h3",
            lvl3: "article h4, article td:first-child, section h4",
            lvl4: "article h5, section h5",
            lvl5: "article h6, section h6",
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "chartjs",
      pathsToMatch: ["https://www.chartjs.org/docs/next/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, section h2",
            content:
              "article p, section p, article li, section li, article td:last-child",
            lvl0: {
              selectors: "header h1, section h1",
            },
            lvl2: "article h3, section h3",
            lvl3: "article h4, article td:first-child, section h4",
            lvl4: "article h5, section h5",
            lvl5: "article h6, section h6",
            version: {
              defaultValue: ["next"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "chartjs",
      pathsToMatch: [
        "https://www.chartjs.org/docs/next/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, section h2",
            content:
              "article p, section p, article li, section li, article td:last-child",
            lvl0: {
              selectors: "header h1, section h1",
            },
            lvl2: "article h3, section h3",
            lvl3: "article h4, article td:first-child, section h4",
            lvl4: "article h5, section h5",
            lvl5: "article h6, section h6",
            version: {
              defaultValue: ["next"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "chartjs",
      pathsToMatch: [
        "https://www.chartjs.org/docs/**",
        "!https://www.chartjs.org/docs/latest/**",
        "!https://www.chartjs.org/docs/2.9.3/**",
        "!https://www.chartjs.org/docs/master/**",
        "!https://www.chartjs.org/docs/master/getting-started/index**/**",
        "!https://www.chartjs.org/docs/next/**",
        "!https://www.chartjs.org/docs/next/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, section h2",
            content:
              "article p, section p, article li, section li, article td:last-child",
            lvl0: {
              selectors: "header h1, section h1",
            },
            lvl2: "article h3, section h3",
            lvl3: "article h4, article td:first-child, section h4",
            lvl4: "article h5, section h5",
            lvl5: "article h6, section h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    chartjs: {
      attributesForFaceting: ["type", "lang", "language", "version"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
      separatorsToIndex: "_",
    },
  },
});