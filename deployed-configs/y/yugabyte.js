new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.yugabyte.com/latest/",
    "https://docs.yugabyte.com/",
    "https://docs.yugabyte.com/stable/",
    "https://docs.yugabyte.com/v2.1/",
    "https://docs.yugabyte.com/v2.0/",
    "https://docs.yugabyte.com/v1.3/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["!**/"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.yugabyte.com/**"],
  schedule: "at 19:40 on Saturday",
  actions: [
    {
      indexName: "yugabyte",
      pathsToMatch: ["https://docs.yugabyte.com/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h2",
            content: ".article p, .article li, .article ol",
            lvl0: {
              selectors: "main article h1",
            },
            lvl2: "main article h3",
            lvl3: "main article h4",
            lvl4: "main article h5",
            lvl5: "main article h6",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "yugabyte",
      pathsToMatch: ["https://docs.yugabyte.com/stable/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h2",
            content: ".article p, .article li, .article ol",
            lvl0: {
              selectors: "main article h1",
            },
            lvl2: "main article h3",
            lvl3: "main article h4",
            lvl4: "main article h5",
            lvl5: "main article h6",
            version: {
              defaultValue: ["stable"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "yugabyte",
      pathsToMatch: ["https://docs.yugabyte.com/v2.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h2",
            content: ".article p, .article li, .article ol",
            lvl0: {
              selectors: "main article h1",
            },
            lvl2: "main article h3",
            lvl3: "main article h4",
            lvl4: "main article h5",
            lvl5: "main article h6",
            version: {
              defaultValue: ["v2.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "yugabyte",
      pathsToMatch: ["https://docs.yugabyte.com/v2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h2",
            content: ".article p, .article li, .article ol",
            lvl0: {
              selectors: "main article h1",
            },
            lvl2: "main article h3",
            lvl3: "main article h4",
            lvl4: "main article h5",
            lvl5: "main article h6",
            version: {
              defaultValue: ["v2.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "yugabyte",
      pathsToMatch: ["https://docs.yugabyte.com/v1.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h2",
            content: ".article p, .article li, .article ol",
            lvl0: {
              selectors: "main article h1",
            },
            lvl2: "main article h3",
            lvl3: "main article h4",
            lvl4: "main article h5",
            lvl5: "main article h6",
            version: {
              defaultValue: ["v1.3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    yugabyte: {
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
      separatorsToIndex: "-_",
    },
  },
});