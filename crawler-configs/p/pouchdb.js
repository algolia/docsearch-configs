new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://pouchdb.com/guides/",
    "https://pouchdb.com/",
    "https://pouchdb.com/api.html",
    "https://pouchdb.com/learn.html",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/**index.html"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://pouchdb.com/**"],
  schedule: "at 00:30 on Friday",
  actions: [
    {
      indexName: "pouchdb",
      pathsToMatch: ["https://pouchdb.com/guides/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "[role='main'] [role='main'] .h2",
            content:
              "[role='main'] [role='main'] p, [role='main'] [role='main'] li",
            lvl0: {
              selectors: ".band h1",
            },
            lvl2: "[role='main'] [role='main'] .h3",
            lvl3: "[role='main'] [role='main'] .h4",
            lvl4: "[role='main'] [role='main'] .h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pouchdb",
      pathsToMatch: ["https://pouchdb.com/api.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "[role='main'] [role='main'] .h2",
            content:
              "[role='main'] [role='main'] p, [role='main'] [role='main'] li",
            lvl0: {
              selectors: ".band h1",
            },
            lvl2: "[role='main'] [role='main'] .h3",
            lvl3: "[role='main'] [role='main'] .h4",
            lvl4: "[role='main'] [role='main'] .h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pouchdb",
      pathsToMatch: ["https://pouchdb.com/learn.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "[role='main'] [role='main'] .h2",
            content:
              "[role='main'] [role='main'] p, [role='main'] [role='main'] li",
            lvl0: {
              selectors: ".band h1",
            },
            lvl2: "[role='main'] [role='main'] .h3",
            lvl3: "[role='main'] [role='main'] .h4",
            lvl4: "[role='main'] [role='main'] .h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    pouchdb: {
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