new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://componentkit.org/docs",
    "https://componentkit.org/",
    "https://componentkit.org/appledoc/html/index.html",
    "https://componentkit.org/appledoc/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://componentkit.org/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://componentkit.org/**"],
  schedule: "at 11:30 on Tuesday",
  actions: [
    {
      indexName: "componentkit",
      pathsToMatch: ["https://componentkit.org/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[class*='docItemContainer'] h1",
            content:
              "[class*='docItemContainer'] p, [class*='docItemContainer'] li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "[class*='docItemContainer'] h2",
            lvl3: "[class*='docItemContainer'] h3",
            lvl4: "[class*='docItemContainer'] h4",
            lvl5: "[class*='docItemContainer'] h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "componentkit",
      pathsToMatch: [
        "https://componentkit.org/appledoc/**",
        "https://componentkit.org/appledoc/html/index.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[class*='docItemContainer'] h1",
            content:
              "[class*='docItemContainer'] p, [class*='docItemContainer'] li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "[class*='docItemContainer'] h2",
            lvl3: "[class*='docItemContainer'] h3",
            lvl4: "[class*='docItemContainer'] h4",
            lvl5: "[class*='docItemContainer'] h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    componentkit: {
      attributesForFaceting: ["type", "lang", "language", "version"],
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