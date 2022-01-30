new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://graphcms.com/docs/guides/",
    "https://graphcms.com/",
    "https://graphcms.com/docs/api-reference/",
    "https://graphcms.com/docs/ui-extensions/",
    "https://graphcms.com/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://graphcms.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://graphcms.com/**"],
  schedule: "at 06:40 on Wednesday",
  actions: [
    {
      indexName: "graphcms",
      pathsToMatch: ["https://graphcms.com/docs/guides/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#heading-anchor";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Guides",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            tags: {
              defaultValue: ["guides"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "graphcms",
      pathsToMatch: ["https://graphcms.com/docs/api-reference/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#heading-anchor";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "API Reference",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "graphcms",
      pathsToMatch: ["https://graphcms.com/docs/ui-extensions/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#heading-anchor";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "UI Extensions",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            tags: {
              defaultValue: ["ui"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "graphcms",
      pathsToMatch: [
        "https://graphcms.com/docs/**",
        "!https://graphcms.com/docs/guides/**",
        "!https://graphcms.com/docs/api-reference/**",
        "!https://graphcms.com/docs/ui-extensions/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#heading-anchor";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    graphcms: {
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