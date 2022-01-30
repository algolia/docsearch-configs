new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://rethinkdb.com/api/javascript/",
    "https://rethinkdb.com/",
    "https://rethinkdb.com/api/python/",
    "https://rethinkdb.com/api/ruby/",
    "https://rethinkdb.com/api/java/",
    "https://rethinkdb.com/faq",
    "https://rethinkdb.com/docs",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["!**/"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://rethinkdb.com/**"],
  schedule: "at 10:00 on Friday",
  actions: [
    {
      indexName: "rethinkdb",
      pathsToMatch: ["https://rethinkdb.com/api/javascript/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#markdown-toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-article h1.title",
            content: ".docs-article p, .docs-article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-article h1:not(.title)",
            lvl3: ".docs-article h2",
            lvl4: ".docs-article h3",
            lvl5: ".docs-article h4",
            lvl6: ".docs-article h5",
            tags: {
              defaultValue: ["api", "javascript"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "rethinkdb",
      pathsToMatch: ["https://rethinkdb.com/api/python/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#markdown-toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-article h1.title",
            content: ".docs-article p, .docs-article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-article h1:not(.title)",
            lvl3: ".docs-article h2",
            lvl4: ".docs-article h3",
            lvl5: ".docs-article h4",
            lvl6: ".docs-article h5",
            tags: {
              defaultValue: ["api", "python"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "rethinkdb",
      pathsToMatch: ["https://rethinkdb.com/api/ruby/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#markdown-toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-article h1.title",
            content: ".docs-article p, .docs-article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-article h1:not(.title)",
            lvl3: ".docs-article h2",
            lvl4: ".docs-article h3",
            lvl5: ".docs-article h4",
            lvl6: ".docs-article h5",
            tags: {
              defaultValue: ["api", "ruby"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "rethinkdb",
      pathsToMatch: ["https://rethinkdb.com/api/java/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#markdown-toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-article h1.title",
            content: ".docs-article p, .docs-article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-article h1:not(.title)",
            lvl3: ".docs-article h2",
            lvl4: ".docs-article h3",
            lvl5: ".docs-article h4",
            lvl6: ".docs-article h5",
            tags: {
              defaultValue: ["api", "java"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "rethinkdb",
      pathsToMatch: ["https://rethinkdb.com/faq**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#markdown-toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-article h2",
            content: ".docs-article p, .docs-article li",
            lvl0: {
              selectors: ".docs-article h1.title",
            },
            lvl2: ".docs-article h3",
            lvl3: ".docs-article h4",
            lvl4: ".docs-article h5",
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "rethinkdb",
      pathsToMatch: ["https://rethinkdb.com/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#markdown-toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-article h1.title",
            content: ".docs-article p, .docs-article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-article h1:not(.title)",
            lvl3: ".docs-article h2",
            lvl4: ".docs-article h3",
            lvl5: ".docs-article h4",
            lvl6: ".docs-article h5",
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    rethinkdb: {
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