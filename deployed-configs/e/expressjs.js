new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://expressjs.com/.*/api",
    "http://expressjs.com/",
    "http://expressjs.com/.*/changelog",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/resources/**", "**/2x/**", "**/3x/**", "**/4x/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["http://expressjs.com/**"],
  schedule: "at 20:50 on Tuesday",
  actions: [
    {
      indexName: "expressjs",
      pathsToMatch: ["http://expressjs.com/.*/api**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[id^='previous-']";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#api-doc h2",
            content: "#api-doc p, #api-doc li, #api-doc td:nth-child(2)",
            lvl0: {
              selectors: "#api-doc h1",
            },
            lvl2: "#api-doc h3",
            lvl3: "#api-doc h4",
            lvl4: "#api-doc h5",
            lvl5: "#api-doc td:first-child",
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "expressjs",
      pathsToMatch: ["http://expressjs.com/.*/changelog**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[id^='previous-']";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-doc h2",
            content: "#page-doc p, #page-doc li",
            lvl0: {
              selectors: "#page-doc h1",
            },
            lvl2: "#page-doc h3",
            lvl3: "#page-doc h4",
            lvl4: "#page-doc h5",
            tags: {
              defaultValue: ["changelog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "expressjs",
      pathsToMatch: ["http://expressjs.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[id^='previous-']";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-doc h1",
            content: "#page-doc p, #page-doc li",
            lvl0: {
              selectors: "#navmenu .active",
              defaultValue: "Documentation",
            },
            lvl2: "#page-doc h2",
            lvl3: "#page-doc h3",
            lvl4: "#page-doc h4",
            lvl5: "#page-doc h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    expressjs: {
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