new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.growingio.com/docs/",
    "https://docs.growingio.com/",
    "https://docs.growingio.com/mp/",
    "https://docs.growingio.com/v3",
    "https://docs.growingio.com/op",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.growingio.com/**"],
  schedule: "at 06:40 on Wednesday",
  actions: [
    {
      indexName: "growingio",
      pathsToMatch: ["https://docs.growingio.com/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content h2",
            content: ".docSearch-content p, .docSearch-content li",
            lvl0: {
              selectors: ".docSearch-content h1",
            },
            lvl2: ".docSearch-content h3",
            lvl3: ".docSearch-content h4",
            lvl4: ".docSearch-content h5",
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "growingio",
      pathsToMatch: ["https://docs.growingio.com/mp/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content h2",
            content: ".docSearch-content p, .docSearch-content li",
            lvl0: {
              selectors: ".docSearch-content h1",
            },
            lvl2: ".docSearch-content h3",
            lvl3: ".docSearch-content h4",
            lvl4: ".docSearch-content h5",
            tags: {
              defaultValue: ["mp"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "growingio",
      pathsToMatch: ["https://docs.growingio.com/v3**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content h2",
            content: ".docSearch-content p, .docSearch-content li",
            lvl0: {
              selectors: ".docSearch-content h1",
            },
            lvl2: ".docSearch-content h3",
            lvl3: ".docSearch-content h4",
            lvl4: ".docSearch-content h5",
            tags: {
              defaultValue: ["v3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "growingio",
      pathsToMatch: ["https://docs.growingio.com/op**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content h2",
            content: ".docSearch-content p, .docSearch-content li",
            lvl0: {
              selectors: ".docSearch-content h1",
            },
            lvl2: ".docSearch-content h3",
            lvl3: ".docSearch-content h4",
            lvl4: ".docSearch-content h5",
            tags: {
              defaultValue: ["op"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    growingio: {
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