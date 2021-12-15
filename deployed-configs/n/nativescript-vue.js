new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://v1-3-1.nativescript-vue.org/en/docs/",
    "https://v1-3-1.nativescript-vue.org/",
    "https://v1-3-1.nativescript-vue.org/ko/docs/",
    "https://v1-3-1.nativescript-vue.org/pt-br/docs/",
    "https://v1-3-1.nativescript-vue.org/pt-BR/docs/",
    "https://v1-3-1.nativescript-vue.org/ru/docs/",
    "https://nativescript-vue.org/en/docs/",
    "https://nativescript-vue.org/",
    "https://nativescript-vue.org/ko/docs/",
    "https://nativescript-vue.org/pt-br/docs/",
    "https://nativescript-vue.org/pt-BR/docs/",
    "https://nativescript-vue.org/ru/docs/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://nativescript-vue.org/sitemap.xml",
    "https://v1-3-1.nativescript-vue.org/sitemap.xml",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://v1-3-1.nativescript-vue.org/**",
    "https://nativescript-vue.org/**",
  ],
  schedule: "at 15:00 on Thursday",
  actions: [
    {
      indexName: "nativescript-vue",
      pathsToMatch: ["https://v1-3-1.nativescript-vue.org/en/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content .docSearch-lvl1",
            content:
              ".docSearch-content .markdown-body p, .docSearch-content .markdown-body li, .docSearch-content .markdown-body tbody td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docSearch-content .docSearch-lvl2",
            lvl3: ".docSearch-content .docSearch-lvl3",
            lvl4: ".docSearch-content .docSearch-lvl4",
            lvl5: ".docSearch-content .docSearch-lvl5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["v1-3-1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript-vue",
      pathsToMatch: ["https://v1-3-1.nativescript-vue.org/ko/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content .docSearch-lvl1",
            content:
              ".docSearch-content .markdown-body p, .docSearch-content .markdown-body li, .docSearch-content .markdown-body tbody td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docSearch-content .docSearch-lvl2",
            lvl3: ".docSearch-content .docSearch-lvl3",
            lvl4: ".docSearch-content .docSearch-lvl4",
            lvl5: ".docSearch-content .docSearch-lvl5",
            lang: {
              defaultValue: ["ko"],
            },
            version: {
              defaultValue: ["v1-3-1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript-vue",
      pathsToMatch: ["https://v1-3-1.nativescript-vue.org/pt-br/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content .docSearch-lvl1",
            content:
              ".docSearch-content .markdown-body p, .docSearch-content .markdown-body li, .docSearch-content .markdown-body tbody td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docSearch-content .docSearch-lvl2",
            lvl3: ".docSearch-content .docSearch-lvl3",
            lvl4: ".docSearch-content .docSearch-lvl4",
            lvl5: ".docSearch-content .docSearch-lvl5",
            lang: {
              defaultValue: ["pt-br"],
            },
            version: {
              defaultValue: ["v1-3-1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript-vue",
      pathsToMatch: ["https://v1-3-1.nativescript-vue.org/pt-BR/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content .docSearch-lvl1",
            content:
              ".docSearch-content .markdown-body p, .docSearch-content .markdown-body li, .docSearch-content .markdown-body tbody td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docSearch-content .docSearch-lvl2",
            lvl3: ".docSearch-content .docSearch-lvl3",
            lvl4: ".docSearch-content .docSearch-lvl4",
            lvl5: ".docSearch-content .docSearch-lvl5",
            lang: {
              defaultValue: ["pt-BR"],
            },
            version: {
              defaultValue: ["v1-3-1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript-vue",
      pathsToMatch: ["https://v1-3-1.nativescript-vue.org/ru/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content .docSearch-lvl1",
            content:
              ".docSearch-content .markdown-body p, .docSearch-content .markdown-body li, .docSearch-content .markdown-body tbody td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docSearch-content .docSearch-lvl2",
            lvl3: ".docSearch-content .docSearch-lvl3",
            lvl4: ".docSearch-content .docSearch-lvl4",
            lvl5: ".docSearch-content .docSearch-lvl5",
            lang: {
              defaultValue: ["ru"],
            },
            version: {
              defaultValue: ["v1-3-1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript-vue",
      pathsToMatch: ["https://nativescript-vue.org/en/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content .docSearch-lvl1",
            content:
              ".docSearch-content .markdown-body p, .docSearch-content .markdown-body li, .docSearch-content .markdown-body tbody td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docSearch-content .docSearch-lvl2",
            lvl3: ".docSearch-content .docSearch-lvl3",
            lvl4: ".docSearch-content .docSearch-lvl4",
            lvl5: ".docSearch-content .docSearch-lvl5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript-vue",
      pathsToMatch: ["https://nativescript-vue.org/ko/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content .docSearch-lvl1",
            content:
              ".docSearch-content .markdown-body p, .docSearch-content .markdown-body li, .docSearch-content .markdown-body tbody td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docSearch-content .docSearch-lvl2",
            lvl3: ".docSearch-content .docSearch-lvl3",
            lvl4: ".docSearch-content .docSearch-lvl4",
            lvl5: ".docSearch-content .docSearch-lvl5",
            lang: {
              defaultValue: ["ko"],
            },
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript-vue",
      pathsToMatch: ["https://nativescript-vue.org/pt-br/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content .docSearch-lvl1",
            content:
              ".docSearch-content .markdown-body p, .docSearch-content .markdown-body li, .docSearch-content .markdown-body tbody td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docSearch-content .docSearch-lvl2",
            lvl3: ".docSearch-content .docSearch-lvl3",
            lvl4: ".docSearch-content .docSearch-lvl4",
            lvl5: ".docSearch-content .docSearch-lvl5",
            lang: {
              defaultValue: ["pt-br"],
            },
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript-vue",
      pathsToMatch: ["https://nativescript-vue.org/pt-BR/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content .docSearch-lvl1",
            content:
              ".docSearch-content .markdown-body p, .docSearch-content .markdown-body li, .docSearch-content .markdown-body tbody td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docSearch-content .docSearch-lvl2",
            lvl3: ".docSearch-content .docSearch-lvl3",
            lvl4: ".docSearch-content .docSearch-lvl4",
            lvl5: ".docSearch-content .docSearch-lvl5",
            lang: {
              defaultValue: ["pt-BR"],
            },
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nativescript-vue",
      pathsToMatch: ["https://nativescript-vue.org/ru/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content .docSearch-lvl1",
            content:
              ".docSearch-content .markdown-body p, .docSearch-content .markdown-body li, .docSearch-content .markdown-body tbody td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docSearch-content .docSearch-lvl2",
            lvl3: ".docSearch-content .docSearch-lvl3",
            lvl4: ".docSearch-content .docSearch-lvl4",
            lvl5: ".docSearch-content .docSearch-lvl5",
            lang: {
              defaultValue: ["ru"],
            },
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "nativescript-vue": {
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