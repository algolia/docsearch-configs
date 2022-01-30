new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://cert-manager.io/next-docs/",
    "https://cert-manager.io/",
    "https://cert-manager.io/docs/",
    "https://cert-manager.io/v0.12-docs/",
    "https://cert-manager.io/v0.13-docs/",
    "https://cert-manager.io/v0.14-docs/",
    "https://cert-manager.io/v0.15-docs/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://cert-manager.io/**"],
  schedule: "at 11:00 on Tuesday",
  actions: [
    {
      indexName: "cert-manager",
      pathsToMatch: ["https://cert-manager.io/next-docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".td-content h2",
            content: ".td-content p, .td-content li",
            lvl0: {
              selectors: ".td-content h1",
            },
            lvl2: ".td-content h3",
            lvl3: ".td-content h4",
            lvl4: ".td-content h5",
            lvl5: ".td-content h6",
            version: {
              defaultValue: ["next-docs"],
            },
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
    {
      indexName: "cert-manager",
      pathsToMatch: ["https://cert-manager.io/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".td-content h2",
            content: ".td-content p, .td-content li",
            lvl0: {
              selectors: ".td-content h1",
            },
            lvl2: ".td-content h3",
            lvl3: ".td-content h4",
            lvl4: ".td-content h5",
            lvl5: ".td-content h6",
            version: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
    {
      indexName: "cert-manager",
      pathsToMatch: ["https://cert-manager.io/v0.12-docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".td-content h2",
            content: ".td-content p, .td-content li",
            lvl0: {
              selectors: ".td-content h1",
            },
            lvl2: ".td-content h3",
            lvl3: ".td-content h4",
            lvl4: ".td-content h5",
            lvl5: ".td-content h6",
            version: {
              defaultValue: ["v0.12-docs"],
            },
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
    {
      indexName: "cert-manager",
      pathsToMatch: ["https://cert-manager.io/v0.13-docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".td-content h2",
            content: ".td-content p, .td-content li",
            lvl0: {
              selectors: ".td-content h1",
            },
            lvl2: ".td-content h3",
            lvl3: ".td-content h4",
            lvl4: ".td-content h5",
            lvl5: ".td-content h6",
            version: {
              defaultValue: ["v0.13-docs"],
            },
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
    {
      indexName: "cert-manager",
      pathsToMatch: ["https://cert-manager.io/v0.14-docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".td-content h2",
            content: ".td-content p, .td-content li",
            lvl0: {
              selectors: ".td-content h1",
            },
            lvl2: ".td-content h3",
            lvl3: ".td-content h4",
            lvl4: ".td-content h5",
            lvl5: ".td-content h6",
            version: {
              defaultValue: ["v0.14-docs"],
            },
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
    {
      indexName: "cert-manager",
      pathsToMatch: ["https://cert-manager.io/v0.15-docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".td-content h2",
            content: ".td-content p, .td-content li",
            lvl0: {
              selectors: ".td-content h1",
            },
            lvl2: ".td-content h3",
            lvl3: ".td-content h4",
            lvl4: ".td-content h5",
            lvl5: ".td-content h6",
            version: {
              defaultValue: ["v0.15-docs"],
            },
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    "cert-manager": {
      attributesForFaceting: ["type", "lang"],
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
    },
  },
});