new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://applinks.devicebook.com/docs/html/tutorial-",
    "https://applinks.devicebook.com/",
    "https://applinks.devicebook.com/docs/html/",
    "https://applinks.devicebook.com/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://applinks.devicebook.com/docs/html/sitemap.xml"],
  exclusionPatterns: [
    "**/index.html",
    "https://applinks.devicebook.com/docs/html/",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://applinks.devicebook.com/**"],
  schedule: "at 15:00 on Tuesday",
  actions: [
    {
      indexName: "devicebook_applinks",
      pathsToMatch: [
        "https://applinks.devicebook.com/docs/html/tutorial-**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".signature, .type-signature";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#main h1:not(.page-title)",
            content: "#main p, #main li",
            lvl0: {
              selectors: "#main h1.page-title",
            },
            lvl2: "#main h2",
            lvl3: "#main h3",
            lvl4: "#main h4",
            lvl5: "#main h5",
            lvl6: "#main h6, #main td.name",
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "devicebook_applinks",
      pathsToMatch: [
        "https://applinks.devicebook.com/docs/**",
        "https://applinks.devicebook.com/docs/html/**",
        "!https://applinks.devicebook.com/docs/html/tutorial-**/**",
        "!https://applinks.devicebook.com/docs/html/tutorial-**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".signature, .type-signature";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#main h2",
            content: "#main p, #main li",
            lvl0: {
              selectors: "#main h1.page-title",
            },
            lvl2: "#main h3",
            lvl3: "#main h4",
            lvl4: "#main h5",
            lvl5: "#main h6, #main td.name",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    devicebook_applinks: {
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