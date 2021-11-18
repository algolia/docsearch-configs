new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.medusa-commerce.com/api/store",
    "https://docs.medusa-commerce.com/",
    "https://docs.medusa-commerce.com/api/admin",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.medusa-commerce.com/**"],
  schedule: "at 10:00 on Thursday",
  actions: [
    {
      indexName: "medusa-commerce",
      pathsToMatch: ["https://docs.medusa-commerce.com/api/store**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocSearch-content h1",
            content:
              ".DocSearch-content p, .DocSearch-content li, .DocSearch-content span, .DocSearch-content span p",
            lvl0: {
              selectors: "",
              defaultValue: "Storefront API Reference",
            },
            lvl2: ".DocSearch-content h2",
            lvl3: ".DocSearch-content h3",
            tags: {
              defaultValue: ["api", "reference", "store"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "medusa-commerce",
      pathsToMatch: ["https://docs.medusa-commerce.com/api/admin**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocSearch-content h1",
            content:
              ".DocSearch-content p, .DocSearch-content li, .DocSearch-content span, .DocSearch-content span p",
            lvl0: {
              selectors: "",
              defaultValue: "Admin API Reference",
            },
            lvl2: ".DocSearch-content h2",
            lvl3: ".DocSearch-content h3",
            tags: {
              defaultValue: ["api", "reference", "admin"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "medusa-commerce",
      pathsToMatch: ["https://docs.medusa-commerce.com/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Docs",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            tags: {
              defaultValue: ["docs", "tutorials", "how-to"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "medusa-commerce": {
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