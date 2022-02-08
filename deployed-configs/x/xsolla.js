new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://developers.xsolla.com/ja/api/",
    "https://developers.xsolla.com/",
    "https://developers.xsolla.com/ru/api/",
    "https://developers.xsolla.com/ko/api/",
    "https://developers.xsolla.com/zh/api/",
    "https://developers.xsolla.com/de/api/",
    "https://developers.xsolla.com/ja/sdk/",
    "https://developers.xsolla.com/ru/sdk/",
    "https://developers.xsolla.com/ko/sdk/",
    "https://developers.xsolla.com/zh/sdk/",
    "https://developers.xsolla.com/de/sdk/",
    "https://developers.xsolla.com/ja/doc/faq/",
    "https://developers.xsolla.com/ru/doc/faq/",
    "https://developers.xsolla.com/ko/doc/faq/",
    "https://developers.xsolla.com/zh/doc/faq/",
    "https://developers.xsolla.com/de/doc/faq/",
    "https://developers.xsolla.com/ja/",
    "https://developers.xsolla.com/ru/",
    "https://developers.xsolla.com/ko/",
    "https://developers.xsolla.com/zh/",
    "https://developers.xsolla.com/de/",
    "https://developers.xsolla.com/doc/faq/",
    "https://developers.xsolla.com/sdk/",
    "https://developers.xsolla.com/api/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/search**",
    "**/search**/**",
    "**/changelog**",
    "**/changelog/**",
    "**/sdk/php/**",
    "**/integration-guide/",
    "**/features/",
    "**/how-to/",
    "**/references/",
    "**/extensions/",
    "**/sdk/**/use-xsolla-servers/",
    "**/sdk/**/use-your-server-side/",
    "**/sdk/**/use-third-party-servers/",
    "**/sdk/**/use-serverless-integration/",
    "**/sdk/**/commerce/",
    "**/sdk/**/login/",
    "**/sdk/**/cross-buy/",
    "**/sdk/**/tutorials/",
    "**/sdk/**/how-tos/",
    "**/sdk/**/store/",
    "**/sdk/**/inventory/",
    "**/sdk/**/payments/",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://developers.xsolla.com/**"],
  schedule: "at 14:40 on Saturday",
  actions: [
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ja/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ja"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ru/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ru"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ko/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ko"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/zh/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["zh"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/de/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["de"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ja/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ja"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ru/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ru"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ko/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ko"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/zh/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["zh"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/de/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["de"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ja/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ja"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ru/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ru"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ko/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ko"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/zh/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["zh"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/de/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["de"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ja/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ja"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ru/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ru"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ko/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ko"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/zh/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["zh"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/de/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["de"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    xsolla: {
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