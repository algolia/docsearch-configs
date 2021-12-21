new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.home-assistant.io/integrations/",
    "https://www.home-assistant.io/",
    "https://www.home-assistant.io/getting-started/",
    "https://www.home-assistant.io/lovelace/",
    "https://www.home-assistant.io/docs/",
    "https://www.home-assistant.io/installation/",
    "https://www.home-assistant.io/common-tasks/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://www.home-assistant.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.home-assistant.io/**"],
  schedule: "at 10:30 on Wednesday",
  actions: [
    {
      indexName: "home-assistant",
      pathsToMatch: ["https://www.home-assistant.io/integrations/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "header h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            pageRank: "5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "home-assistant",
      pathsToMatch: ["https://www.home-assistant.io/getting-started/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "header h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "home-assistant",
      pathsToMatch: ["https://www.home-assistant.io/lovelace/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "header h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "home-assistant",
      pathsToMatch: ["https://www.home-assistant.io/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "header h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "home-assistant",
      pathsToMatch: ["https://www.home-assistant.io/installation/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "header h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "home-assistant",
      pathsToMatch: ["https://www.home-assistant.io/common-tasks/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "header h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "home-assistant": {
      attributesForFaceting: ["type", "lang", "language", "version"],
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