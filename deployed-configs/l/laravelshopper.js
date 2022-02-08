new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.laravelshopper.io/docs/contribution-guide",
    "https://docs.laravelshopper.io/",
    "https://docs.laravelshopper.io/docs/upgrade",
    "https://docs.laravelshopper.io/docs/requirements",
    "https://docs.laravelshopper.io/docs/installation",
    "https://docs.laravelshopper.io/docs/configuration",
    "https://docs.laravelshopper.io/docs/settings",
    "https://docs.laravelshopper.io/docs/helper-methods",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.laravelshopper.io/**"],
  schedule: "at 05:00 on Thursday",
  actions: [
    {
      indexName: "laravelshopper",
      pathsToMatch: [
        "https://docs.laravelshopper.io/docs/contribution-guide**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            lvl5: ".markdown h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "laravelshopper",
      pathsToMatch: ["https://docs.laravelshopper.io/docs/upgrade**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            lvl5: ".markdown h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "laravelshopper",
      pathsToMatch: ["https://docs.laravelshopper.io/docs/requirements**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            lvl5: ".markdown h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "laravelshopper",
      pathsToMatch: ["https://docs.laravelshopper.io/docs/installation**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            lvl5: ".markdown h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "laravelshopper",
      pathsToMatch: ["https://docs.laravelshopper.io/docs/configuration**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            lvl5: ".markdown h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "laravelshopper",
      pathsToMatch: ["https://docs.laravelshopper.io/docs/settings**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            lvl5: ".markdown h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "laravelshopper",
      pathsToMatch: ["https://docs.laravelshopper.io/docs/helper-methods**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            lvl5: ".markdown h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    laravelshopper: {
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