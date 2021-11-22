new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://ax.dev/docs/",
    "https://ax.dev/",
    "https://ax.dev/api/",
    "https://ax.dev/tutorials/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://ax.dev/sitemap.xml"],
  exclusionPatterns: ["**/_**", "**/_**/**", "**/**genindex.html"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://ax.dev/**"],
  schedule: "at 01:50 on Tuesday",
  actions: [
    {
      indexName: "ax",
      pathsToMatch: ["https://ax.dev/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[role='main'] h1",
            content: "[role='main'] p, [role='main'] li",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: "[role='main'] h2",
            lvl3: "[role='main'] h3",
            lvl4: "[role='main'] h4, [role='main'] .descname",
            lvl5: "[role='main'] h5",
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "ax",
      pathsToMatch: ["https://ax.dev/tutorials/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".tutorialBody p, .tutorialBody li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".tutorialBody h1",
            lvl3: ".tutorialBody h2",
            lvl4: ".tutorialBody h3",
            lvl5: ".tutorialBody h4",
            lvl6: ".tutorialBody h5",
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "ax",
      pathsToMatch: ["https://ax.dev/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".navGroup > h3.collapsible",
            content: ".post article p, .post article li",
            lvl0: {
              selectors: "",
              defaultValue: "Docs",
            },
            lvl2: ".post h1",
            lvl3: ".post h2",
            lvl4: ".post h3",
            lvl5: ".post h4",
            lvl6: ".post h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    ax: {
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
      separatorsToIndex: "_",
    },
  },
});