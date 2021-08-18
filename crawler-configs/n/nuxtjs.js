new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://nuxtjs.org/",
    "http://nuxtjs.org/",
    "https://zh.nuxtjs.org/",
    "http://zh.nuxtjs.org/",
    "https://ru.nuxtjs.org/",
    "http://ru.nuxtjs.org/",
    "https://ja.nuxtjs.org/",
    "http://ja.nuxtjs.org/",
    "https://ko.nuxtjs.org/",
    "http://ko.nuxtjs.org/",
    "https://fr.nuxtjs.org/",
    "http://fr.nuxtjs.org/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/logos/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://nuxtjs.org/**",
    "http://nuxtjs.org/**",
    "https://zh.nuxtjs.org/**",
    "http://zh.nuxtjs.org/**",
    "https://ru.nuxtjs.org/**",
    "http://ru.nuxtjs.org/**",
    "https://ja.nuxtjs.org/**",
    "http://ja.nuxtjs.org/**",
    "https://ko.nuxtjs.org/**",
    "http://ko.nuxtjs.org/**",
    "https://fr.nuxtjs.org/**",
    "http://fr.nuxtjs.org/**",
  ],
  schedule: "at 15:40 on Thursday",
  actions: [
    {
      indexName: "nuxtjs",
      pathsToMatch: ["https://nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nuxtjs",
      pathsToMatch: ["http://nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nuxtjs",
      pathsToMatch: ["https://zh.nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["zh"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nuxtjs",
      pathsToMatch: ["http://zh.nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["zh"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nuxtjs",
      pathsToMatch: ["https://ru.nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["ru"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nuxtjs",
      pathsToMatch: ["http://ru.nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["ru"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nuxtjs",
      pathsToMatch: ["https://ja.nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["ja"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nuxtjs",
      pathsToMatch: ["http://ja.nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["ja"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nuxtjs",
      pathsToMatch: ["https://ko.nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["ko"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nuxtjs",
      pathsToMatch: ["http://ko.nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["ko"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nuxtjs",
      pathsToMatch: ["https://fr.nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nuxtjs",
      pathsToMatch: ["http://fr.nuxtjs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "article p, article li",
            lvl0: {
              selectors: "header [class*='active']",
              defaultValue: "Documentation",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            tags: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    nuxtjs: {
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
        "desc(weight.page_rank)",
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