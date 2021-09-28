new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://dinerojs.com/",
    "https://v2.dinerojs.com/docs",
    "https://v2.dinerojs.com/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://v2.dinerojs.com/sitemap.xml"],
  exclusionPatterns: ["**/**.html"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://dinerojs.com/**", "https://v2.dinerojs.com/**"],
  schedule: "at 15:10 on Tuesday",
  actions: [
    {
      indexName: "dinerojs",
      pathsToMatch: ["https://dinerojs.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".type-signature, .sr-only, main article aside";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#main h3",
            content: "#main p, #main li, #main table td:last-child",
            lvl0: {
              selectors: "#main h1",
            },
            lvl2: "#main h4",
            lvl3: "#main h5",
            lvl4: "#main table td:first-child",
            tags: {
              defaultValue: ["v1"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "dinerojs",
      pathsToMatch: ["https://v2.dinerojs.com/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".type-signature, .sr-only, main article aside";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h2",
            content:
              "main article p, main article li, main article table tbody tr td:first-child",
            lvl0: {
              selectors: "main article h1",
            },
            lvl2: "main article h3",
            lvl3: "main article h4",
            lvl4: "main article h5",
            lvl5: "main article h6",
            tags: {
              defaultValue: ["v2"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    dinerojs: {
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
    },
  },
});