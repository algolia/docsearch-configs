new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://developer.frame.io/docs/",
    "https://developer.frame.io/",
    "https://developer.frame.io/api/reference/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://gist.githubusercontent.com/jhodges10/6af161631f4f1a61099ada8c4606b331/raw/ae2e3926ceb23d5e9548182e4336f77b5020642e/sitemap.xml",
  ],
  exclusionPatterns: [
    "https://developer.frame.io/api/reference/operation/getInstallationForMe/**",
    "https://developer.frame.io/api/reference/operation/getSubtitles/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://developer.frame.io/**"],
  schedule: "at 01:40 on Wednesday",
  actions: [
    {
      indexName: "frame",
      pathsToMatch: ["https://developer.frame.io/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "aside";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content: "main p",
            lvl0: {
              selectors: "",
              defaultValue: "Guides",
            },
            lvl2: ".header-wrapper h2",
            lvl3: "main h1, h2, h3, h4, h5, h6",
            lvl4: "main .custom-block",
            tags: {
              defaultValue: ["docs"],
            },
            pageRank: "10",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "frame",
      pathsToMatch: ["https://developer.frame.io/api/reference/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "aside";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".api-content h2",
            content: ".api-content p",
            lvl0: {
              selectors: "",
              defaultValue: "API Reference",
            },
            lvl2: ".api-content h3",
            lvl3: ".api-content .http-verb",
            tags: {
              defaultValue: ["api"],
            },
            pageRank: "7",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "frame",
      pathsToMatch: ["https://developer.frame.io/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "aside";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[class^='hero__Header'] h1",
            content:
              "[class^='layout__Container'] p, [class^='layout__Container'] li",
            lvl0: {
              selectors: "",
              defaultValue: "Developer Portal",
            },
            lvl2: "[class^='layout__Container'] h2",
            lvl3: "[class^='layout__Container'] h3",
            lvl4: "[class^='layout__Container'] h4",
            lvl5: "[class^='layout__Container'] h5",
            tags: {
              defaultValue: ["portal"],
            },
            pageRank: "5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    frame: {
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