new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://bucklescript.github.io/docs/en/installation.html",
    "https://bucklescript.github.io/",
    "https://bucklescript.github.io/docs/ja/installation.html",
    "https://bucklescript.github.io/docs/es-ES/installation.html",
    "https://bucklescript.github.io/docs/fr/installation.html",
    "https://bucklescript.github.io/docs/ko/installation.html",
    "https://bucklescript.github.io/docs/pt-BR/installation.html",
    "https://bucklescript.github.io/docs/ru/installation.html",
    "https://bucklescript.github.io/docs/zh-CN/installation.html",
    "https://bucklescript.github.io/docs/zh-TW/installation.html",
    "https://bucklescript.github.io/docs/en/",
    "https://bucklescript.github.io/docs/ja/",
    "https://bucklescript.github.io/docs/es-ES/",
    "https://bucklescript.github.io/docs/fr/",
    "https://bucklescript.github.io/docs/ko/",
    "https://bucklescript.github.io/docs/pt-BR/",
    "https://bucklescript.github.io/docs/ru/",
    "https://bucklescript.github.io/docs/zh-CN/",
    "https://bucklescript.github.io/docs/zh-TW/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://bucklescript.github.io/**"],
  schedule: "at 06:40 on Tuesday",
  actions: [
    {
      indexName: "bucklescript",
      pathsToMatch: [
        "https://bucklescript.github.io/docs/en/installation.html**/**",
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: [
        "https://bucklescript.github.io/docs/ja/installation.html**/**",
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: [
        "https://bucklescript.github.io/docs/es-ES/installation.html**/**",
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: [
        "https://bucklescript.github.io/docs/fr/installation.html**/**",
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: [
        "https://bucklescript.github.io/docs/ko/installation.html**/**",
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: [
        "https://bucklescript.github.io/docs/pt-BR/installation.html**/**",
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: [
        "https://bucklescript.github.io/docs/ru/installation.html**/**",
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: [
        "https://bucklescript.github.io/docs/zh-CN/installation.html**/**",
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: [
        "https://bucklescript.github.io/docs/zh-TW/installation.html**/**",
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: ["https://bucklescript.github.io/docs/en/**"],
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: ["https://bucklescript.github.io/docs/ja/**"],
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: ["https://bucklescript.github.io/docs/es-ES/**"],
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: ["https://bucklescript.github.io/docs/fr/**"],
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: ["https://bucklescript.github.io/docs/ko/**"],
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: ["https://bucklescript.github.io/docs/pt-BR/**"],
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: ["https://bucklescript.github.io/docs/ru/**"],
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: ["https://bucklescript.github.io/docs/zh-CN/**"],
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "bucklescript",
      pathsToMatch: ["https://bucklescript.github.io/docs/zh-TW/**"],
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
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    bucklescript: {
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