new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: ["https://www.ktorm.org/api-docs/", "https://www.ktorm.org/"],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.ktorm.org/**"],
  schedule: "at 01:40 on Thursday",
  actions: [
    {
      indexName: "ktorm",
      pathsToMatch: ["https://www.ktorm.org/api-docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#support-footer-container, .api-docs > p:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h1",
            content: "#page-content > p",
            lvl0: {
              selectors: "",
              defaultValue: "API-Docs",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4, .api-docs-table td:first-child",
            lvl4: "#page-content h5",
            lvl5: "#page-content h6",
            tags: {
              defaultValue: ["api-docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "ktorm",
      pathsToMatch: ["https://www.ktorm.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#support-footer-container, .api-docs > p:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".dc-page h1",
            content: ".dc-page p, .dc-page li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".dc-page h2",
            lvl3: ".dc-page h3",
            lvl4: ".dc-page h4",
            lvl5: ".dc-page h5",
            lvl6: ".dc-page h6",
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    ktorm: {
      attributesForFaceting: ["type", "lang", "tags"],
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