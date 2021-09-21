new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://www.rst-bj.com/my-blog/",
    "http://www.rst-bj.com/",
    "http://www.rst-bj.com:8000/my-blog/",
    "http://www.rst-bj.com:8000/",
    "http://www.rst-bj.com:8000/my-blog/blog/JavaScript%E4%B8%AD%E7%9A%84%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98.html",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "http://www.rst-bj.com/**",
    "http://www.rst-bj.com:8000/**",
  ],
  schedule: "at 10:40 on Friday",
  actions: [
    {
      indexName: "rst-bj",
      pathsToMatch: ["http://www.rst-bj.com/my-blog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content h1",
            content: ".theme-default-content p, .theme-default-content li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "rst-bj",
      pathsToMatch: [
        "http://www.rst-bj.com:8000/my-blog/**",
        "http://www.rst-bj.com:8000/my-blog/blog/JavaScript%E4%B8%AD%E7%9A%84%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content h1",
            content: ".theme-default-content p, .theme-default-content li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "rst-bj": {
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