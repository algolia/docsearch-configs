new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.rularavel.com/docs/master/",
    "https://docs.rularavel.com/",
    "https://docs.rularavel.com/docs/8.x/",
    "https://docs.rularavel.com/docs/6.x/",
    "https://docs.rularavel.com/docs/4.2/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.rularavel.com/**"],
  schedule: "at 10:40 on Friday",
  actions: [
    {
      indexName: "rularavel",
      pathsToMatch: ["https://docs.rularavel.com/docs/master/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".docs_main p, .docs_main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_main h2",
            lvl3: ".docs_main h3",
            lvl4: ".docs_main h4",
            lvl5: ".docs_main h5",
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "rularavel",
      pathsToMatch: ["https://docs.rularavel.com/docs/8.x/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".docs_main p, .docs_main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_main h2",
            lvl3: ".docs_main h3",
            lvl4: ".docs_main h4",
            lvl5: ".docs_main h5",
            version: {
              defaultValue: ["8.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "rularavel",
      pathsToMatch: ["https://docs.rularavel.com/docs/6.x/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".docs_main p, .docs_main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_main h2",
            lvl3: ".docs_main h3",
            lvl4: ".docs_main h4",
            lvl5: ".docs_main h5",
            version: {
              defaultValue: ["6.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "rularavel",
      pathsToMatch: ["https://docs.rularavel.com/docs/4.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".docs_main p, .docs_main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_main h2",
            lvl3: ".docs_main h3",
            lvl4: ".docs_main h4",
            lvl5: ".docs_main h5",
            version: {
              defaultValue: ["4.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    rularavel: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
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
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url_without_anchor",
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