new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://getbootstrap.kr/docs/5.0/",
    "https://getbootstrap.kr/",
    "https://getbootstrap.kr/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://getbootstrap.kr/sitemap.xml"],
  exclusionPatterns: ["**/examples/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://getbootstrap.kr/**"],
  schedule: "at 06:30 on Tuesday",
  actions: [
    {
      indexName: "bootstrap-kr",
      pathsToMatch: ["https://getbootstrap.kr/docs/5.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bd-example";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".bd-layout h1",
            content: "main p, main li, main td:last-child",
            lvl0: {
              selectors: ".bd-sidebar .active.my-1 > a",
              defaultValue: "문서",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
            language: {
              defaultValue: ["ko"],
            },
            version: {
              defaultValue: ["5.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bootstrap-kr",
      pathsToMatch: [
        "https://getbootstrap.kr/docs/**",
        "!https://getbootstrap.kr/docs/5.0/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bd-example";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li, main td:last-child",
            lvl0: {
              selectors: ".bd-toc-item.active > a",
              defaultValue: "문서",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "bootstrap-kr": {
      attributesForFaceting: ["type", "lang", "version", "language"],
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