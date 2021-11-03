new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://reasonml.github.io/docs/en/what-and-why.html",
    "https://reasonml.github.io/",
    "https://reasonml.github.io/docs/ja/what-and-why.html",
    "https://reasonml.github.io/docs/de/what-and-why.html",
    "https://reasonml.github.io/docs/es-ES/what-and-why.html",
    "https://reasonml.github.io/docs/fr/what-and-why.html",
    "https://reasonml.github.io/docs/ko/what-and-why.html",
    "https://reasonml.github.io/docs/pt-BR/what-and-why.html",
    "https://reasonml.github.io/docs/ru/what-and-why.html",
    "https://reasonml.github.io/docs/uk/what-and-why.html",
    "https://reasonml.github.io/docs/zh-CN/what-and-why.html",
    "https://reasonml.github.io/docs/zh-TW/what-and-why.html",
    "https://reasonml.github.io/docs/en/",
    "https://reasonml.github.io/docs/ja/",
    "https://reasonml.github.io/docs/de/",
    "https://reasonml.github.io/docs/es-ES/",
    "https://reasonml.github.io/docs/fr/",
    "https://reasonml.github.io/docs/ko/",
    "https://reasonml.github.io/docs/pt-BR/",
    "https://reasonml.github.io/docs/ru/",
    "https://reasonml.github.io/docs/uk/",
    "https://reasonml.github.io/docs/zh-CN/",
    "https://reasonml.github.io/docs/zh-TW/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://reasonml.github.io/**"],
  schedule: "at 10:00 on Friday",
  actions: [
    {
      indexName: "reason",
      pathsToMatch: [
        "https://reasonml.github.io/docs/en/what-and-why.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: [
        "https://reasonml.github.io/docs/ja/what-and-why.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["ja"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: [
        "https://reasonml.github.io/docs/de/what-and-why.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["de"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: [
        "https://reasonml.github.io/docs/es-ES/what-and-why.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["es-ES"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: [
        "https://reasonml.github.io/docs/fr/what-and-why.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: [
        "https://reasonml.github.io/docs/ko/what-and-why.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["ko"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: [
        "https://reasonml.github.io/docs/pt-BR/what-and-why.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["pt-BR"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: [
        "https://reasonml.github.io/docs/ru/what-and-why.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["ru"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: [
        "https://reasonml.github.io/docs/uk/what-and-why.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["uk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: [
        "https://reasonml.github.io/docs/zh-CN/what-and-why.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["zh-CN"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: [
        "https://reasonml.github.io/docs/zh-TW/what-and-why.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["zh-TW"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: ["https://reasonml.github.io/docs/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: ["https://reasonml.github.io/docs/ja/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["ja"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: ["https://reasonml.github.io/docs/de/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["de"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: ["https://reasonml.github.io/docs/es-ES/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["es-ES"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: ["https://reasonml.github.io/docs/fr/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: ["https://reasonml.github.io/docs/ko/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["ko"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: ["https://reasonml.github.io/docs/pt-BR/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["pt-BR"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: ["https://reasonml.github.io/docs/ru/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["ru"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: ["https://reasonml.github.io/docs/uk/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["uk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: ["https://reasonml.github.io/docs/zh-CN/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["zh-CN"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "reason",
      pathsToMatch: ["https://reasonml.github.io/docs/zh-TW/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post p, .post li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lang: {
              defaultValue: ["zh-TW"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    reason: {
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