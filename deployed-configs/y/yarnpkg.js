new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://classic.yarnpkg.com/en/docs/",
    "https://classic.yarnpkg.com/",
    "https://classic.yarnpkg.com/es-ES/docs/",
    "https://classic.yarnpkg.com/fr/docs/",
    "https://classic.yarnpkg.com/id-ID/docs/",
    "https://classic.yarnpkg.com/ja/docs/",
    "https://classic.yarnpkg.com/pt-BR/docs/",
    "https://classic.yarnpkg.com/ru/docs/",
    "https://classic.yarnpkg.com/tr/docs/",
    "https://classic.yarnpkg.com/uk/docs/",
    "https://classic.yarnpkg.com/zh-Hans/docs/",
    "https://classic.yarnpkg.com/zh-Hant/docs/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://classic.yarnpkg.com/**"],
  schedule: "at 19:00 on Saturday",
  actions: [
    {
      indexName: "yarnpkg",
      pathsToMatch: ["https://classic.yarnpkg.com/en/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".hero h1",
            content: ".guide-content p, .guide-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".guide-content h3",
            lvl3: ".guide-content h4",
            lvl4: ".guide-content h5",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "yarnpkg",
      pathsToMatch: ["https://classic.yarnpkg.com/es-ES/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".hero h1",
            content: ".guide-content p, .guide-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".guide-content h3",
            lvl3: ".guide-content h4",
            lvl4: ".guide-content h5",
            lang: {
              defaultValue: ["es-ES"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "yarnpkg",
      pathsToMatch: ["https://classic.yarnpkg.com/fr/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".hero h1",
            content: ".guide-content p, .guide-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".guide-content h3",
            lvl3: ".guide-content h4",
            lvl4: ".guide-content h5",
            lang: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "yarnpkg",
      pathsToMatch: ["https://classic.yarnpkg.com/id-ID/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".hero h1",
            content: ".guide-content p, .guide-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".guide-content h3",
            lvl3: ".guide-content h4",
            lvl4: ".guide-content h5",
            lang: {
              defaultValue: ["id-ID"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "yarnpkg",
      pathsToMatch: ["https://classic.yarnpkg.com/ja/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".hero h1",
            content: ".guide-content p, .guide-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".guide-content h3",
            lvl3: ".guide-content h4",
            lvl4: ".guide-content h5",
            lang: {
              defaultValue: ["ja"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "yarnpkg",
      pathsToMatch: ["https://classic.yarnpkg.com/pt-BR/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".hero h1",
            content: ".guide-content p, .guide-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".guide-content h3",
            lvl3: ".guide-content h4",
            lvl4: ".guide-content h5",
            lang: {
              defaultValue: ["pt-BR"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "yarnpkg",
      pathsToMatch: ["https://classic.yarnpkg.com/ru/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".hero h1",
            content: ".guide-content p, .guide-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".guide-content h3",
            lvl3: ".guide-content h4",
            lvl4: ".guide-content h5",
            lang: {
              defaultValue: ["ru"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "yarnpkg",
      pathsToMatch: ["https://classic.yarnpkg.com/tr/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".hero h1",
            content: ".guide-content p, .guide-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".guide-content h3",
            lvl3: ".guide-content h4",
            lvl4: ".guide-content h5",
            lang: {
              defaultValue: ["tr"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "yarnpkg",
      pathsToMatch: ["https://classic.yarnpkg.com/uk/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".hero h1",
            content: ".guide-content p, .guide-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".guide-content h3",
            lvl3: ".guide-content h4",
            lvl4: ".guide-content h5",
            lang: {
              defaultValue: ["uk"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "yarnpkg",
      pathsToMatch: ["https://classic.yarnpkg.com/zh-Hans/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".hero h1",
            content: ".guide-content p, .guide-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".guide-content h3",
            lvl3: ".guide-content h4",
            lvl4: ".guide-content h5",
            lang: {
              defaultValue: ["zh-Hans"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "yarnpkg",
      pathsToMatch: ["https://classic.yarnpkg.com/zh-Hant/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".hero h1",
            content: ".guide-content p, .guide-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".guide-content h3",
            lvl3: ".guide-content h4",
            lvl4: ".guide-content h5",
            lang: {
              defaultValue: ["zh-Hant"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    yarnpkg: {
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