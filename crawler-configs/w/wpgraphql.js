new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.wpgraphql.com/docs/",
    "https://www.wpgraphql.com/",
    "https://www.wpgraphql.com/extension-plugins/",
    "https://www.wpgraphql.com/developer-reference/",
    "https://www.wpgraphql.com/actions/",
    "https://www.wpgraphql.com/filters/",
    "https://www.wpgraphql.com/functions/",
    "https://www.wpgraphql.com/recipes/",
  ],
  renderJavaScript: true,
  sitemaps: ["https://www.wpgraphql.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.wpgraphql.com/**"],
  schedule: "at 10:30 on Saturday",
  actions: [
    {
      indexName: "wpgraphql",
      pathsToMatch: ["https://www.wpgraphql.com/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content h3, .content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wpgraphql",
      pathsToMatch: ["https://www.wpgraphql.com/extension-plugins/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content h3, .content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Extensions",
            },
            lvl2: ".content h2",
            tags: {
              defaultValue: ["extensions"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wpgraphql",
      pathsToMatch: ["https://www.wpgraphql.com/developer-reference/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content h3, .content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Developer Reference",
            },
            lvl2: ".content h2",
            tags: {
              defaultValue: ["dev"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wpgraphql",
      pathsToMatch: ["https://www.wpgraphql.com/actions/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content h3, .content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Developer Reference",
            },
            lvl2: ".content h2",
            tags: {
              defaultValue: ["dev"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wpgraphql",
      pathsToMatch: ["https://www.wpgraphql.com/filters/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content h3, .content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Developer Reference",
            },
            lvl2: ".content h2",
            tags: {
              defaultValue: ["dev"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wpgraphql",
      pathsToMatch: ["https://www.wpgraphql.com/functions/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content h3, .content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Developer Reference",
            },
            lvl2: ".content h2",
            tags: {
              defaultValue: ["dev"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wpgraphql",
      pathsToMatch: ["https://www.wpgraphql.com/recipes/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content h3, .content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Developer Reference",
            },
            lvl2: ".content h2",
            tags: {
              defaultValue: ["dev"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    wpgraphql: {
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
      separatorsToIndex: "_",
    },
  },
});