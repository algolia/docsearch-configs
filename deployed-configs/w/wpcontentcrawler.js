new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.wpcontentcrawler.com/master/",
    "https://docs.wpcontentcrawler.com/",
    "https://docs.wpcontentcrawler.com/1.9/",
    "https://docs.wpcontentcrawler.com/1.10/",
    "https://docs.wpcontentcrawler.com/1.11/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.wpcontentcrawler.com/**"],
  schedule: "at 10:30 on Saturday",
  actions: [
    {
      indexName: "wpcontentcrawler",
      pathsToMatch: ["https://docs.wpcontentcrawler.com/master/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#contents, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h2",
            content:
              ".section p:not(.admonition-title), .section li,  .section td:nth-child(2)",
            lvl0: {
              selectors: ".section h1",
            },
            lvl2: ".section h3, #change-log strong",
            lvl3: ".section h4, .docutils > dt strong, .admonition-title, .section td:first-child",
            lvl4: ".section h5",
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wpcontentcrawler",
      pathsToMatch: ["https://docs.wpcontentcrawler.com/1.9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#contents, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h2",
            content:
              ".section p:not(.admonition-title), .section li,  .section td:nth-child(2)",
            lvl0: {
              selectors: ".section h1",
            },
            lvl2: ".section h3, #change-log strong",
            lvl3: ".section h4, .docutils > dt strong, .admonition-title, .section td:first-child",
            lvl4: ".section h5",
            version: {
              defaultValue: ["1.9"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wpcontentcrawler",
      pathsToMatch: ["https://docs.wpcontentcrawler.com/1.10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#contents, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h2",
            content:
              ".section p:not(.admonition-title), .section li,  .section td:nth-child(2)",
            lvl0: {
              selectors: ".section h1",
            },
            lvl2: ".section h3, #change-log strong",
            lvl3: ".section h4, .docutils > dt strong, .admonition-title, .section td:first-child",
            lvl4: ".section h5",
            version: {
              defaultValue: ["1.10"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wpcontentcrawler",
      pathsToMatch: ["https://docs.wpcontentcrawler.com/1.11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#contents, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h2",
            content:
              ".section p:not(.admonition-title), .section li,  .section td:nth-child(2)",
            lvl0: {
              selectors: ".section h1",
            },
            lvl2: ".section h3, #change-log strong",
            lvl3: ".section h4, .docutils > dt strong, .admonition-title, .section td:first-child",
            lvl4: ".section h5",
            version: {
              defaultValue: ["1.11"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wpcontentcrawler",
      pathsToMatch: ["https://docs.wpcontentcrawler.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#contents, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h2",
            content:
              ".section p:not(.admonition-title), .section li,  .section td:nth-child(2)",
            lvl0: {
              selectors: ".section h1",
            },
            lvl2: ".section h3, #change-log strong",
            lvl3: ".section h4, .docutils > dt strong, .admonition-title, .section td:first-child",
            lvl4: ".section h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    wpcontentcrawler: {
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