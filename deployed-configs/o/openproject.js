new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.openproject.org/release-notes/",
    "https://docs.openproject.org/",
    "https://docs.openproject.org/api/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.openproject.org/sitemap.xml"],
  exclusionPatterns: ["**/**org/de/**", "**/**443**", "**/**443**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.openproject.org/**"],
  schedule: "at 20:30 on Thursday",
  actions: [
    {
      indexName: "openproject",
      pathsToMatch: ["https://docs.openproject.org/release-notes/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-content h1",
            content: ".article-content p, .article-content li:not([id])",
            lvl0: {
              selectors: "",
              defaultValue: "Release notes",
            },
            lvl2: ".article-content h4",
            lvl3: ".article-content h5",
            lvl4: ".article-content h6",
          },
          indexHeadings: { from: 3, to: 6 },
        });
      },
    },
    {
      indexName: "openproject",
      pathsToMatch: ["https://docs.openproject.org/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-content h2",
            content: ".article-content p, .article-content li:not([id])",
            lvl0: {
              selectors: ".article-content h1",
            },
            lvl2: ".article-content h3",
            lvl3: ".article-content h4",
          },
          indexHeadings: { from: 3, to: 6 },
        });
      },
    },
    {
      indexName: "openproject",
      pathsToMatch: [
        "https://docs.openproject.org**/**",
        "!https://docs.openproject.org/release-notes/**",
        "!https://docs.openproject.org/api/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-content h2",
            content: ".article-content p, .article-content li:not([id])",
            lvl0: {
              selectors: ".article-content h1",
            },
            lvl2: ".article-content h3",
            lvl3: ".article-content h4",
            lvl4: ".article-content h5",
            lvl5: ".article-content h6",
          },
          indexHeadings: { from: 3, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    openproject: {
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
      separatorsToIndex: "_",
    },
  },
});