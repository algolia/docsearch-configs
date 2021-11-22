new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://www.eclipse.org/rap/developers-guide",
    "http://www.eclipse.org/",
    "http://www.eclipse.org/rap/noteworthy/3.0",
    "http://wiki.eclipse.org/RAP",
    "http://wiki.eclipse.org/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/**version=2**",
    "**/**version=2**/**",
    "**/**Incubator**",
    "**/**Incubator**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "http://www.eclipse.org/**",
    "http://wiki.eclipse.org/**",
  ],
  schedule: "at 20:00 on Tuesday",
  actions: [
    {
      indexName: "eclipse_rap",
      pathsToMatch: ["http://www.eclipse.org/rap/developers-guide**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#midcolumn h1, #main-page-content h2",
            content:
              "#midcolumn p, #midcolumn li, #main-page-content p, #main-page-content li",
            lvl0: {
              selectors: "",
            },
            lvl2: "#midcolumn h2, #main-page-content h3",
            lvl3: "#midcolumn h3, #main-page-content h4",
            lvl4: "#midcolumn h4, #main-page-content h5",
            tags: {
              defaultValue: ["guide"],
            },
          },
          indexHeadings: { from: 3, to: 6 },
        });
      },
    },
    {
      indexName: "eclipse_rap",
      pathsToMatch: ["http://www.eclipse.org/rap/noteworthy/3.0**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#midcolumn h1, #main-page-content h2",
            content:
              "#midcolumn p, #midcolumn li, #main-page-content p, #main-page-content li",
            lvl0: {
              selectors: "",
            },
            lvl2: "#midcolumn h2, #main-page-content h3",
            lvl3: "#midcolumn h3, #main-page-content h4",
            lvl4: "#midcolumn h4, #main-page-content h5",
            tags: {
              defaultValue: ["news"],
            },
          },
          indexHeadings: { from: 3, to: 6 },
        });
      },
    },
    {
      indexName: "eclipse_rap",
      pathsToMatch: ["http://wiki.eclipse.org/RAP**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#midcolumn h1, #main-page-content h2",
            content:
              "#midcolumn p, #midcolumn li, #main-page-content p, #main-page-content li",
            lvl0: {
              selectors: "",
            },
            lvl2: "#midcolumn h2, #main-page-content h3",
            lvl3: "#midcolumn h3, #main-page-content h4",
            lvl4: "#midcolumn h4, #main-page-content h5",
            tags: {
              defaultValue: ["wiki"],
            },
          },
          indexHeadings: { from: 3, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    eclipse_rap: {
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