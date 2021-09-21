new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://pinia.esm.dev/introduction.html",
    "https://pinia.esm.dev/",
    "https://pinia.esm.dev/getting-started.html",
    "https://pinia.esm.dev/core-concepts/",
    "https://pinia.esm.dev/ssr/",
    "https://pinia.esm.dev/cookbook/",
    "https://pinia.esm.dev/api/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["!**/", "!**/**.html"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://pinia.esm.dev/**"],
  schedule: "at 00:10 on Friday",
  actions: [
    {
      indexName: "pinia",
      pathsToMatch: ["https://pinia.esm.dev/introduction.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content [class^=language-]",
            lvl0: {
              selectors:
                ".sidebar > .sidebar-links > .sidebar-link > .sidebar-link-item.active",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            lvl6: ".content p, .content li",
            tags: {
              defaultValue: ["Introduction"],
            },
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pinia",
      pathsToMatch: ["https://pinia.esm.dev/getting-started.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content [class^=language-]",
            lvl0: {
              selectors:
                ".sidebar > .sidebar-links > .sidebar-link > .sidebar-link-item.active",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            lvl6: ".content p, .content li",
            tags: {
              defaultValue: ["Introduction"],
            },
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pinia",
      pathsToMatch: ["https://pinia.esm.dev/core-concepts/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content [class^=language-]",
            lvl0: {
              selectors:
                ".sidebar > .sidebar-links > .sidebar-link > .sidebar-link-item.active",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            lvl6: ".content p, .content li",
            tags: {
              defaultValue: ["Core Concepts"],
            },
            pageRank: "10",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pinia",
      pathsToMatch: ["https://pinia.esm.dev/ssr/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content [class^=language-]",
            lvl0: {
              selectors:
                ".sidebar > .sidebar-links > .sidebar-link > .sidebar-link-item.active",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            lvl6: ".content p, .content li",
            tags: {
              defaultValue: ["SSR"],
            },
            pageRank: "8",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pinia",
      pathsToMatch: ["https://pinia.esm.dev/cookbook/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content [class^=language-]",
            lvl0: {
              selectors:
                ".sidebar > .sidebar-links > .sidebar-link > .sidebar-link-item.active",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            lvl6: ".content p, .content li",
            tags: {
              defaultValue: ["Cookbook"],
            },
            pageRank: "5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pinia",
      pathsToMatch: ["https://pinia.esm.dev/api/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content [class^=language-]",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            lvl6: ".content p, .content li",
            tags: {
              defaultValue: ["API"],
            },
            pageRank: "4",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    pinia: {
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