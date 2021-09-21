new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.expressionengine.com/latest/",
    "https://docs.expressionengine.com/",
    "https://docs.expressionengine.com/v5/",
    "https://docs.expressionengine.com/v4/",
    "https://docs.expressionengine.com/v3/",
    "https://docs.expressionengine.com/v2/",
    "https://docs.expressionengine.com/v1/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.expressionengine.com/**"],
  schedule: "at 20:50 on Tuesday",
  actions: [
    {
      indexName: "expressionengine",
      pathsToMatch: ["https://docs.expressionengine.com/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents, .docs-footer";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#docsearch-content h2",
            content:
              "#docsearch-content p, #docsearch-content li, #docsearch-content table td:last-child",
            lvl0: {
              selectors: "#docsearch-content h1",
            },
            lvl2: "#docsearch-content h3",
            lvl3: "#docsearch-content h4, #docsearch-content table td:first-child",
            lvl4: "#docsearch-content h5",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "expressionengine",
      pathsToMatch: ["https://docs.expressionengine.com/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents, .docs-footer";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#docsearch-content h2",
            content:
              "#docsearch-content p, #docsearch-content li, #docsearch-content table td:last-child",
            lvl0: {
              selectors: "#docsearch-content h1",
            },
            lvl2: "#docsearch-content h3",
            lvl3: "#docsearch-content h4, #docsearch-content table td:first-child",
            lvl4: "#docsearch-content h5",
            version: {
              defaultValue: ["v5"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "expressionengine",
      pathsToMatch: ["https://docs.expressionengine.com/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents, .docs-footer";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#docsearch-content h2",
            content:
              "#docsearch-content p, #docsearch-content li, #docsearch-content table td:last-child",
            lvl0: {
              selectors: "#docsearch-content h1",
            },
            lvl2: "#docsearch-content h3",
            lvl3: "#docsearch-content h4, #docsearch-content table td:first-child",
            lvl4: "#docsearch-content h5",
            version: {
              defaultValue: ["v4"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "expressionengine",
      pathsToMatch: ["https://docs.expressionengine.com/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents, .docs-footer";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#docsearch-content h2",
            content:
              "#docsearch-content p, #docsearch-content li, #docsearch-content table td:last-child",
            lvl0: {
              selectors: "#docsearch-content h1",
            },
            lvl2: "#docsearch-content h3",
            lvl3: "#docsearch-content h4, #docsearch-content table td:first-child",
            lvl4: "#docsearch-content h5",
            version: {
              defaultValue: ["v3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "expressionengine",
      pathsToMatch: ["https://docs.expressionengine.com/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents, .docs-footer";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#docsearch-content h2",
            content:
              "#docsearch-content p, #docsearch-content li, #docsearch-content table td:last-child",
            lvl0: {
              selectors: "#docsearch-content h1",
            },
            lvl2: "#docsearch-content h3",
            lvl3: "#docsearch-content h4, #docsearch-content table td:first-child",
            lvl4: "#docsearch-content h5",
            version: {
              defaultValue: ["v2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "expressionengine",
      pathsToMatch: ["https://docs.expressionengine.com/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents, .docs-footer";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#docsearch-content h2",
            content:
              "#docsearch-content p, #docsearch-content li, #docsearch-content table td:last-child",
            lvl0: {
              selectors: "#docsearch-content h1",
            },
            lvl2: "#docsearch-content h3",
            lvl3: "#docsearch-content h4, #docsearch-content table td:first-child",
            lvl4: "#docsearch-content h5",
            version: {
              defaultValue: ["v1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    expressionengine: {
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
      separatorsToIndex: "_",
    },
  },
});