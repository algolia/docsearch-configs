new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.redislabs.com/latest/",
    "https://docs.redislabs.com/",
    "https://docs.redislabs.com/latest/rs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.redislabs.com/latest/sitemap.xml"],
  exclusionPatterns: ["**/release-notes/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.redislabs.com/**"],
  schedule: "at 10:00 on Friday",
  actions: [
    {
      indexName: "redislabs",
      pathsToMatch: [
        "https://docs.redislabs.com/latest/**",
        "https://docs.redislabs.com/latest/rs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".main-content #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".page h1",
            content:
              ".main-content-left > p, .main-content-left > ul > li, .expand-content p, .main-content td:not(:first-child)",
            lvl0: {
              selectors: ".menu .parent> a",
              defaultValue: "Documentation",
            },
            lvl2: ".main-content-left > h2",
            lvl3: ".main-content-left > h3, .main-content td:first-child",
            lvl4: ".main-content-left > h4",
            lvl5: ".main-content-left > h5",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    redislabs: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "hierarchy_camel.lvl1",
        "hierarchy.lvl1",
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
      customRanking: ["desc(weight.page_rank)", "asc(weight.position)"],
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