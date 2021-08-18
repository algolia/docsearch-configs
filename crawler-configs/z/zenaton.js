new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://zenaton.com/documentation/php/",
    "https://zenaton.com/",
    "https://zenaton.com/documentation/go/",
    "https://zenaton.com/documentation/ruby/",
    "https://zenaton.com/documentation/node/",
    "https://zenaton.com/documentation/node-old/",
    "https://zenaton.com/documentation/python/",
    "https://zenaton.com/documentation",
  ],
  renderJavaScript: false,
  sitemaps: ["https://zenaton.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://zenaton.com/**"],
  schedule: "at 00:00 on Sunday",
  actions: [
    {
      indexName: "zenaton",
      pathsToMatch: ["https://zenaton.com/documentation/php/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc_part h2",
            content: ".doc_part p, .doc_part li",
            lvl0: {
              selectors: "#documentation-container h1",
            },
            lvl2: ".doc_part h3",
            lvl3: ".doc_part h4",
            lvl4: ".doc_part h5",
            lvl5: ".doc_part h6",
            language: {
              defaultValue: ["php"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zenaton",
      pathsToMatch: ["https://zenaton.com/documentation/go/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc_part h2",
            content: ".doc_part p, .doc_part li",
            lvl0: {
              selectors: "#documentation-container h1",
            },
            lvl2: ".doc_part h3",
            lvl3: ".doc_part h4",
            lvl4: ".doc_part h5",
            lvl5: ".doc_part h6",
            language: {
              defaultValue: ["go"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zenaton",
      pathsToMatch: ["https://zenaton.com/documentation/ruby/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc_part h2",
            content: ".doc_part p, .doc_part li",
            lvl0: {
              selectors: "#documentation-container h1",
            },
            lvl2: ".doc_part h3",
            lvl3: ".doc_part h4",
            lvl4: ".doc_part h5",
            lvl5: ".doc_part h6",
            language: {
              defaultValue: ["ruby"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zenaton",
      pathsToMatch: ["https://zenaton.com/documentation/node/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc_part h2",
            content: ".doc_part p, .doc_part li",
            lvl0: {
              selectors: "#documentation-container h1",
            },
            lvl2: ".doc_part h3",
            lvl3: ".doc_part h4",
            lvl4: ".doc_part h5",
            lvl5: ".doc_part h6",
            language: {
              defaultValue: ["node"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zenaton",
      pathsToMatch: ["https://zenaton.com/documentation/node-old/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc_part h2",
            content: ".doc_part p, .doc_part li",
            lvl0: {
              selectors: "#documentation-container h1",
            },
            lvl2: ".doc_part h3",
            lvl3: ".doc_part h4",
            lvl4: ".doc_part h5",
            lvl5: ".doc_part h6",
            language: {
              defaultValue: ["node-old"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zenaton",
      pathsToMatch: ["https://zenaton.com/documentation/python/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc_part h2",
            content: ".doc_part p, .doc_part li",
            lvl0: {
              selectors: "#documentation-container h1",
            },
            lvl2: ".doc_part h3",
            lvl3: ".doc_part h4",
            lvl4: ".doc_part h5",
            lvl5: ".doc_part h6",
            language: {
              defaultValue: ["python"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zenaton",
      pathsToMatch: ["https://zenaton.com/documentation**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc_part h2",
            content: ".doc_part p, .doc_part li",
            lvl0: {
              selectors: "#documentation-container h1",
            },
            lvl2: ".doc_part h3",
            lvl3: ".doc_part h4",
            lvl4: ".doc_part h5",
            lvl5: ".doc_part h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    zenaton: {
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
        "desc(weight.page_rank)",
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