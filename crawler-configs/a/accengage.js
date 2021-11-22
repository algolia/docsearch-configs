new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://documentation.accengage.com/sdk",
    "https://documentation.accengage.com/",
    "https://documentation.accengage.com/api",
    "https://documentation.accengage.com/dataflow/introduction",
    "https://documentation.accengage.com/user-guide/en",
    "https://documentation.accengage.com/user-guide/fr",
    "https://documentation.accengage.com/faq",
  ],
  renderJavaScript: false,
  sitemaps: ["https://documentation.accengage.com/sitemap.xml"],
  exclusionPatterns: [
    "https://documentation.accengage.com/admin**",
    "https://documentation.accengage.com/admin**/**",
    "**/**documentation.accengage.com/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://documentation.accengage.com/**"],
  schedule: "at 01:00 on Tuesday",
  actions: [
    {
      indexName: "accengage",
      pathsToMatch: ["https://documentation.accengage.com/faq**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".sidebar-container, .footer, .top-navbar, .toc-container";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content h2",
            content: ".main-content p, .main-content li",
            lvl0: {
              selectors: ".block_questions--link a, .main-content h1",
            },
            lvl2: ".main-content h3",
            lvl3: ".main-content h4",
            lvl4: ".main-content h5",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "accengage",
      pathsToMatch: [
        "https://documentation.accengage.com**/**",
        "https://documentation.accengage.com/sdk**/**",
        "https://documentation.accengage.com/api**/**",
        "https://documentation.accengage.com/dataflow/introduction**/**",
        "https://documentation.accengage.com/user-guide/en**/**",
        "https://documentation.accengage.com/user-guide/fr**/**",
        "!https://documentation.accengage.com/faq**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".sidebar-container, .footer, .top-navbar, .toc-container";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content h2",
            content: ".main-content p, .main-content li",
            lvl0: {
              selectors: ".main-content h1",
            },
            lvl2: ".main-content h3",
            lvl3: ".main-content h4",
            lvl4: ".main-content h5",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    accengage: {
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