new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.typescriptlang.org/docs/handbook/release-notes/",
    "https://www.typescriptlang.org/",
    "https://www.typescriptlang.org/docs/",
    "https://www.typescriptlang.org/tsconfig",
  ],
  renderJavaScript: false,
  sitemaps: ["https://www.typescriptlang.org/sitemap.xml"],
  exclusionPatterns: [
    "**/global-plugin/**",
    "**/**declaration-files/templates/**",
    "**/**release-notes/overview.html",
    "**/docs/handbook/basic-types.html",
    "**/docs/handbook/classes.html",
    "**/docs/handbook/functions.html",
    "**/docs/handbook/generics.html",
    "**/docs/handbook/interfaces.html",
    "**/docs/handbook/literal-types.html",
    "**/docs/handbook/unions-and-intersections.html",
    "**/docs/handbook/advanced-types.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.typescriptlang.org/**"],
  schedule: "at 19:50 on Friday",
  actions: [
    {
      indexName: "typescriptlang",
      pathsToMatch: [
        "https://www.typescriptlang.org/docs/handbook/release-notes/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".markdown > p:first-child + ul li a";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[role='article'] > h2",
            content: ".markdown p, .markdown li, .markdown td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "Releases",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4, .markdown td:first-child",
            lvl5: ".markdown h5",
            tags: {
              defaultValue: ["release"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "typescriptlang",
      pathsToMatch: ["https://www.typescriptlang.org/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".markdown > p:first-child + ul li a";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[role='article'] > h2",
            content: ".markdown p, .markdown li, .markdown td:last-child",
            lvl0: {
              selectors: "#sidebar > ul > li.open > button",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4, .markdown td:first-child",
            lvl5: ".markdown h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "typescriptlang",
      pathsToMatch: ["https://www.typescriptlang.org/tsconfig**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".markdown > p:first-child + ul li a";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[role='article'] > h2",
            content: ".markdown p, .markdown li, .markdown td:last-child",
            lvl0: {
              selectors: "#sidebar > ul > li.open > button",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4, .markdown td:first-child",
            lvl5: ".markdown h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    typescriptlang: {
      attributesForFaceting: ["type", "lang", "language", "tags"],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
      ],
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
      separatorsToIndex: "_@",
    },
  },
});