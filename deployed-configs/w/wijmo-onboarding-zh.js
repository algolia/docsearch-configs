new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://demo.grapecity.com.cn/wijmo/docs/",
    "https://demo.grapecity.com.cn/",
    "https://demo.grapecity.com.cn/wijmo/demos/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://demo.grapecity.com.cn/wijmo/docs/sitemap.xml",
    "https://demo.grapecity.com.cn/wijmo/demos/resource/sitemap.xml",
  ],
  exclusionPatterns: [
    "**/angular**",
    "**/angular**/**",
    "**/vue**",
    "**/vue**/**",
    "**/react**",
    "**/react**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://demo.grapecity.com.cn/**"],
  schedule: "at 10:10 on Saturday",
  actions: [
    {
      indexName: "wijmo-onboarding-zh",
      pathsToMatch: ["https://demo.grapecity.com.cn/wijmo/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post article h1",
            content: ".post article p, .post article li",
            lvl0: {
              selectors: "#lvl0",
              defaultValue: "参考文档",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lvl5: ".post h5",
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "wijmo-onboarding-zh",
      pathsToMatch: ["https://demo.grapecity.com.cn/wijmo/demos/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".app-content-description h1",
            content: ".app-content-description p, .app-content-description li",
            lvl0: {
              selectors: "#demo_source_name",
              defaultValue: "示例",
            },
            lvl2: ".app-content-description h2",
            lvl3: ".app-content-description h3",
            lvl4: ".app-content-description h4",
            lvl5: ".app-content-description h5",
            tags: {
              defaultValue: ["demos"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    "wijmo-onboarding-zh": {
      attributesForFaceting: ["type", "lang", "language", "version", "tags"],
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