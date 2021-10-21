new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://vitejs.dev/guide/",
    "https://vitejs.dev/",
    "https://vitejs.dev/config/",
    "https://vitejs.dev/plugins/",
    "https://cn.vitejs.dev/guide/",
    "https://cn.vitejs.dev/",
    "https://cn.vitejs.dev/config/",
    "https://cn.vitejs.dev/plugins/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**.html"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://vitejs.dev/**", "https://cn.vitejs.dev/**"],
  schedule: "at 05:10 on Saturday",
  actions: [
    {
      indexName: "vitejs",
      pathsToMatch: ["https://vitejs.dev/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Guide & APIs",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            tags: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vitejs",
      pathsToMatch: ["https://vitejs.dev/config/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Config",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            tags: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vitejs",
      pathsToMatch: ["https://vitejs.dev/plugins/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Plugins",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            tags: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vitejs",
      pathsToMatch: ["https://cn.vitejs.dev/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Guide & APIs",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            tags: {
              defaultValue: ["cn"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vitejs",
      pathsToMatch: ["https://cn.vitejs.dev/config/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Config",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            tags: {
              defaultValue: ["cn"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vitejs",
      pathsToMatch: ["https://cn.vitejs.dev/plugins/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Plugins",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            tags: {
              defaultValue: ["cn"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    vitejs: {
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