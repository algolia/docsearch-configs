new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.zephir-lang.com/latest/en/",
    "https://docs.zephir-lang.com/",
    "https://docs.zephir-lang.com/latest/el-gr/",
    "https://docs.zephir-lang.com/latest/es-es/",
    "https://docs.zephir-lang.com/latest/ru-ru/",
    "https://docs.zephir-lang.com/latest/tr-tr/",
    "https://docs.zephir-lang.com/latest/uk-ua/",
    "https://docs.zephir-lang.com/latest/zh-cn/",
    "https://docs.zephir-lang.com/0.12/en/",
    "https://docs.zephir-lang.com/0.12/el-gr/",
    "https://docs.zephir-lang.com/0.12/es-es/",
    "https://docs.zephir-lang.com/0.12/ru-ru/",
    "https://docs.zephir-lang.com/0.12/tr-tr/",
    "https://docs.zephir-lang.com/0.12/uk-ua/",
    "https://docs.zephir-lang.com/0.12/zh-cn/",
    "https://docs.zephir-lang.com/0.11/en/",
    "https://docs.zephir-lang.com/0.11/el-gr/",
    "https://docs.zephir-lang.com/0.11/es-es/",
    "https://docs.zephir-lang.com/0.11/ru-ru/",
    "https://docs.zephir-lang.com/0.11/tr-tr/",
    "https://docs.zephir-lang.com/0.11/uk-ua/",
    "https://docs.zephir-lang.com/0.11/zh-cn/",
    "https://docs.zephir-lang.com/0.10/en/",
    "https://docs.zephir-lang.com/0.10/el-gr/",
    "https://docs.zephir-lang.com/0.10/es-es/",
    "https://docs.zephir-lang.com/0.10/ru-ru/",
    "https://docs.zephir-lang.com/0.10/tr-tr/",
    "https://docs.zephir-lang.com/0.10/uk-ua/",
    "https://docs.zephir-lang.com/0.10/zh-cn/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.zephir-lang.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.zephir-lang.com/**"],
  schedule: "at 00:00 on Sunday",
  actions: [
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/latest/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/latest/el-gr/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["el-gr"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/latest/es-es/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["es-es"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/latest/ru-ru/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["ru-ru"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/latest/tr-tr/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["tr-tr"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/latest/uk-ua/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["uk-ua"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/latest/zh-cn/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["zh-cn"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.12/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["0.12"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.12/el-gr/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["el-gr"],
            },
            version: {
              defaultValue: ["0.12"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.12/es-es/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["es-es"],
            },
            version: {
              defaultValue: ["0.12"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.12/ru-ru/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["ru-ru"],
            },
            version: {
              defaultValue: ["0.12"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.12/tr-tr/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["tr-tr"],
            },
            version: {
              defaultValue: ["0.12"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.12/uk-ua/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["uk-ua"],
            },
            version: {
              defaultValue: ["0.12"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.12/zh-cn/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["zh-cn"],
            },
            version: {
              defaultValue: ["0.12"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.11/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["0.11"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.11/el-gr/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["el-gr"],
            },
            version: {
              defaultValue: ["0.11"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.11/es-es/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["es-es"],
            },
            version: {
              defaultValue: ["0.11"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.11/ru-ru/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["ru-ru"],
            },
            version: {
              defaultValue: ["0.11"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.11/tr-tr/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["tr-tr"],
            },
            version: {
              defaultValue: ["0.11"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.11/uk-ua/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["uk-ua"],
            },
            version: {
              defaultValue: ["0.11"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.11/zh-cn/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["zh-cn"],
            },
            version: {
              defaultValue: ["0.11"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.10/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["0.10"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.10/el-gr/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["el-gr"],
            },
            version: {
              defaultValue: ["0.10"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.10/es-es/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["es-es"],
            },
            version: {
              defaultValue: ["0.10"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.10/ru-ru/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["ru-ru"],
            },
            version: {
              defaultValue: ["0.10"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.10/tr-tr/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["tr-tr"],
            },
            version: {
              defaultValue: ["0.10"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.10/uk-ua/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["uk-ua"],
            },
            version: {
              defaultValue: ["0.10"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zephir-lang",
      pathsToMatch: ["https://docs.zephir-lang.com/0.10/zh-cn/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["zh-cn"],
            },
            version: {
              defaultValue: ["0.10"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "zephir-lang": {
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