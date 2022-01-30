new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://hexo.io/docs/",
    "https://hexo.io/",
    "https://hexo.io/api/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "https://hexo.io/docs/index.html",
    "https://hexo.io/api/index.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://hexo.io/**"],
  schedule: "at 10:00 on Wednesday",
  actions: [
    {
      indexName: "hexo",
      pathsToMatch: ["https://hexo.io/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "figure";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-header h1",
            content: ".article-content p,  .article-content td:nth-child(2)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".article-content h2",
            lvl3: ".article-content h3, .article-content td:first-child",
            lvl4: ".article-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hexo",
      pathsToMatch: ["https://hexo.io/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "figure";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-header h1",
            content: ".article-content p,  .article-content td:nth-child(2)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".article-content h2",
            lvl3: ".article-content h3, .article-content td:first-child",
            lvl4: ".article-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    hexo: {
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