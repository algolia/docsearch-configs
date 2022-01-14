new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.rudder.io/history/2.11/",
    "https://docs.rudder.io/",
    "https://docs.rudder.io/history/3.0/",
    "https://docs.rudder.io/history/3.1/",
    "https://docs.rudder.io/history/3.2/",
    "https://docs.rudder.io/history/4.0/",
    "https://docs.rudder.io/history/4.1/",
    "https://docs.rudder.io/history/4.2/",
    "https://docs.rudder.io/history/4.3/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.rudder.io/**"],
  schedule: "at 10:40 on Friday",
  actions: [
    {
      indexName: "rudder_project",
      pathsToMatch: ["https://docs.rudder.io/history/2.11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bigtitle, .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".titlepage h2",
            content: ".section p",
            lvl0: {
              selectors: "#header h1",
            },
            lvl2: ".section h3",
            lvl3: ".section h4",
            lvl4: ".section h5",
            tags: {
              defaultValue: ["v2.11"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "rudder_project",
      pathsToMatch: ["https://docs.rudder.io/history/3.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bigtitle, .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".titlepage h2",
            content: ".section p",
            lvl0: {
              selectors: "#header h1",
            },
            lvl2: ".section h3",
            lvl3: ".section h4",
            lvl4: ".section h5",
            tags: {
              defaultValue: ["v3.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "rudder_project",
      pathsToMatch: ["https://docs.rudder.io/history/3.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bigtitle, .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".titlepage h2",
            content: ".section p",
            lvl0: {
              selectors: "#header h1",
            },
            lvl2: ".section h3",
            lvl3: ".section h4",
            lvl4: ".section h5",
            tags: {
              defaultValue: ["v3.1"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "rudder_project",
      pathsToMatch: ["https://docs.rudder.io/history/3.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bigtitle, .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".titlepage h2",
            content: ".section p",
            lvl0: {
              selectors: "#header h1",
            },
            lvl2: ".section h3",
            lvl3: ".section h4",
            lvl4: ".section h5",
            tags: {
              defaultValue: ["v3.2"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "rudder_project",
      pathsToMatch: ["https://docs.rudder.io/history/4.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bigtitle, .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".titlepage h2",
            content: ".section p",
            lvl0: {
              selectors: "#header h1",
            },
            lvl2: ".section h3",
            lvl3: ".section h4",
            lvl4: ".section h5",
            tags: {
              defaultValue: ["v4.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "rudder_project",
      pathsToMatch: ["https://docs.rudder.io/history/4.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bigtitle, .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".titlepage h2",
            content: ".section p",
            lvl0: {
              selectors: "#header h1",
            },
            lvl2: ".section h3",
            lvl3: ".section h4",
            lvl4: ".section h5",
            tags: {
              defaultValue: ["v4.1"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "rudder_project",
      pathsToMatch: ["https://docs.rudder.io/history/4.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bigtitle, .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".titlepage h2",
            content: ".section p",
            lvl0: {
              selectors: "#header h1",
            },
            lvl2: ".section h3",
            lvl3: ".section h4",
            lvl4: ".section h5",
            tags: {
              defaultValue: ["v4.2"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "rudder_project",
      pathsToMatch: ["https://docs.rudder.io/history/4.3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bigtitle, .toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".titlepage h2",
            content: ".section p",
            lvl0: {
              selectors: "#header h1",
            },
            lvl2: ".section h3",
            lvl3: ".section h4",
            lvl4: ".section h5",
            tags: {
              defaultValue: ["v4.3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    rudder_project: {
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