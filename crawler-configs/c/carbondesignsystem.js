new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://www.carbondesignsystem.com/",
    "https://www.carbondesignsystem.com/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "http://www.carbondesignsystem.com/**",
    "https://www.carbondesignsystem.com/**",
  ],
  schedule: "at 11:00 on Tuesday",
  actions: [
    {
      indexName: "carbondesignsystem",
      pathsToMatch: ["http://www.carbondesignsystem.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "style";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1#page-title",
            content:
              ".page-content p, .page-content li, .page p, .page li, .page-intro",
            lvl0: {
              selectors: "h4.page-header__label",
              defaultValue: "Documentation",
            },
            lvl2: ".page-tabs li a",
            lvl3: "h2",
            lvl4: "h3",
            lvl5: "h4",
            lvl6: "h5",
          },
          indexHeadings: { from: 3, to: 6 },
        });
      },
    },
    {
      indexName: "carbondesignsystem",
      pathsToMatch: ["https://www.carbondesignsystem.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "style";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1#page-title",
            content:
              ".page-content p, .page-content li, .page p, .page li, .page-intro",
            lvl0: {
              selectors: "h4.page-header__label",
              defaultValue: "Documentation",
            },
            lvl2: ".page-tabs li a",
            lvl3: "h2",
            lvl4: "h3",
            lvl5: "h4",
            lvl6: "h5",
          },
          indexHeadings: { from: 3, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    carbondesignsystem: {
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