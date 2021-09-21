new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.nativescript.org/plugins/",
    "https://docs.nativescript.org/",
    "https://docs.nativescript.org/best-practices/",
    "https://docs.nativescript.org/api-reference/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.nativescript.org/**"],
  schedule: "at 15:00 on Thursday",
  actions: [
    {
      indexName: "nativescript",
      pathsToMatch: ["https://docs.nativescript.org/plugins/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".prose h2",
            content: ".prose p, .prose li",
            lvl0: {
              selectors: "",
              defaultValue: "Plugins",
            },
            lvl2: ".prose h3",
            lvl3: ".prose h4",
            lvl4: ".prose h5",
            lvl5: ".prose h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript",
      pathsToMatch: ["https://docs.nativescript.org/best-practices/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".prose h2",
            content: ".prose p, .prose li",
            lvl0: {
              selectors: "",
              defaultValue: "Best Practices",
            },
            lvl2: ".prose h3",
            lvl3: ".prose h4",
            lvl4: ".prose h5",
            lvl5: ".prose h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript",
      pathsToMatch: ["https://docs.nativescript.org/api-reference/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container h1",
            content: ".col-content p, .col-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Api Reference",
            },
            lvl2: ".col-content h2",
            lvl3: ".col-content h3",
            lvl4: ".col-content h4",
            lvl5: ".col-content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript",
      pathsToMatch: [
        "https://docs.nativescript.org/**",
        "!https://docs.nativescript.org/plugins/**",
        "!https://docs.nativescript.org/best-practices/**",
        "!https://docs.nativescript.org/api-reference/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".prose h2",
            content: ".prose p, .prose li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".prose h3",
            lvl3: ".prose h4",
            lvl4: ".prose h5",
            lvl5: ".prose h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    nativescript: {
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