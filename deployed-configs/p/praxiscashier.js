new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://doc.praxiscashier.com/integration_docs/latest/",
    "https://doc.praxiscashier.com/",
    "https://doc.praxiscashier.com/integration_docs/3.2/",
    "https://doc.praxiscashier.com/integration_docs/3.1/",
    "https://doc.praxiscashier.com/integration_docs/3.0/",
    "https://doc.praxiscashier.com/integration_docs/2.24b/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://doc.praxiscashier.com/**"],
  schedule: "at 00:40 on Friday",
  actions: [
    {
      indexName: "praxiscashier",
      pathsToMatch: [
        "https://doc.praxiscashier.com/integration_docs/latest/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".documentation h2",
            content: ".documentation p, .documentation li",
            lvl0: {
              selectors: ".documentation h1",
            },
            lvl2: ".documentation h3",
            lvl3: ".documentation h4",
            lvl4: ".documentation h5",
            lvl5: ".documentation h6",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "praxiscashier",
      pathsToMatch: ["https://doc.praxiscashier.com/integration_docs/3.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".documentation h2",
            content: ".documentation p, .documentation li",
            lvl0: {
              selectors: ".documentation h1",
            },
            lvl2: ".documentation h3",
            lvl3: ".documentation h4",
            lvl4: ".documentation h5",
            lvl5: ".documentation h6",
            version: {
              defaultValue: ["3.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "praxiscashier",
      pathsToMatch: ["https://doc.praxiscashier.com/integration_docs/3.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".documentation h2",
            content: ".documentation p, .documentation li",
            lvl0: {
              selectors: ".documentation h1",
            },
            lvl2: ".documentation h3",
            lvl3: ".documentation h4",
            lvl4: ".documentation h5",
            lvl5: ".documentation h6",
            version: {
              defaultValue: ["3.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "praxiscashier",
      pathsToMatch: ["https://doc.praxiscashier.com/integration_docs/3.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".documentation h2",
            content: ".documentation p, .documentation li",
            lvl0: {
              selectors: ".documentation h1",
            },
            lvl2: ".documentation h3",
            lvl3: ".documentation h4",
            lvl4: ".documentation h5",
            lvl5: ".documentation h6",
            version: {
              defaultValue: ["3.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "praxiscashier",
      pathsToMatch: ["https://doc.praxiscashier.com/integration_docs/2.24b/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".documentation h2",
            content: ".documentation p, .documentation li",
            lvl0: {
              selectors: ".documentation h1",
            },
            lvl2: ".documentation h3",
            lvl3: ".documentation h4",
            lvl4: ".documentation h5",
            lvl5: ".documentation h6",
            version: {
              defaultValue: ["2.24b"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    praxiscashier: {
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