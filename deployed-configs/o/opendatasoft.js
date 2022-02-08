new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://help.opendatasoft.com/platform/en/",
    "https://help.opendatasoft.com/",
    "https://help.opendatasoft.com/platform/fr/",
    "https://help.opendatasoft.com/platform/de/",
    "https://help.opendatasoft.com/platform/es/",
    "https://help.opendatasoft.com/platform/nl/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/**404**", "**/**404**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://help.opendatasoft.com/**"],
  schedule: "at 20:30 on Thursday",
  actions: [
    {
      indexName: "opendatasoft",
      pathsToMatch: ["https://help.opendatasoft.com/platform/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p, .section td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            language: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "opendatasoft",
      pathsToMatch: ["https://help.opendatasoft.com/platform/fr/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p, .section td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            language: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "opendatasoft",
      pathsToMatch: ["https://help.opendatasoft.com/platform/de/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p, .section td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            language: {
              defaultValue: ["de"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "opendatasoft",
      pathsToMatch: ["https://help.opendatasoft.com/platform/es/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p, .section td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            language: {
              defaultValue: ["es"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "opendatasoft",
      pathsToMatch: ["https://help.opendatasoft.com/platform/nl/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p, .section td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            language: {
              defaultValue: ["nl"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    opendatasoft: {
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