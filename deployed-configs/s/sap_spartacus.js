new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://sap.github.io/spartacus-docs/3.x/",
    "https://sap.github.io/spartacus-docs/2.x/",
    "https://sap.github.io/spartacus-docs/1.x/",
    "https://sap.github.io/spartacus-docs/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://sap.github.io/spartacus-docs/sitemap.xml",
    "https://sap.github.io/spartacus-docs/1.x/sitemap.xml",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://sap.github.io/**"],
  schedule: "at 15:00 on Friday",
  actions: [
    {
      indexName: "sap_spartacus",
      pathsToMatch: ["https://sap.github.io/spartacus-docs/3.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".archive h2",
            content: ".archive p, .archive li",
            lvl0: {
              selectors: ".archive h1",
            },
            lvl2: ".archive h3",
            lvl3: ".archive h4",
            lvl4: ".archive h5",
            lvl5: ".archive h6",
            tags: {
              defaultValue: ["3.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "sap_spartacus",
      pathsToMatch: ["https://sap.github.io/spartacus-docs/2.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".archive h2",
            content: ".archive p, .archive li",
            lvl0: {
              selectors: ".archive h1",
            },
            lvl2: ".archive h3",
            lvl3: ".archive h4",
            lvl4: ".archive h5",
            lvl5: ".archive h6",
            tags: {
              defaultValue: ["2.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "sap_spartacus",
      pathsToMatch: ["https://sap.github.io/spartacus-docs/1.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".archive h2",
            content: ".archive p, .archive li",
            lvl0: {
              selectors: ".archive h1",
            },
            lvl2: ".archive h3",
            lvl3: ".archive h4",
            lvl4: ".archive h5",
            lvl5: ".archive h6",
            tags: {
              defaultValue: ["1.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "sap_spartacus",
      pathsToMatch: ["https://sap.github.io/spartacus-docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".archive h2",
            content: ".archive p, .archive li",
            lvl0: {
              selectors: ".archive h1",
            },
            lvl2: ".archive h3",
            lvl3: ".archive h4",
            lvl4: ".archive h5",
            lvl5: ".archive h6",
            tags: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    sap_spartacus: {
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
