new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.lagomframework.com/documentation/1.5.x/scala/",
    "https://www.lagomframework.com/",
    "https://www.lagomframework.com/documentation/1.5.x/java/",
    "https://www.lagomframework.com/documentation/1.6.x/scala/",
    "https://www.lagomframework.com/documentation/1.6.x/java/",
    "https://www.lagomframework.com/documentation/current/scala/",
    "https://www.lagomframework.com/documentation/current/java/",
    "https://www.lagomframework.com/documentation/1.5.x/scala/Home.html",
    "https://www.lagomframework.com/documentation/1.5.x/java/Home.html",
    "https://www.lagomframework.com/documentation/1.6.x/scala/Home.html",
    "https://www.lagomframework.com/documentation/1.6.x/java/Home.html",
    "https://www.lagomframework.com/documentation/current/scala/Home.html",
    "https://www.lagomframework.com/documentation/current/java/Home.html",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/api/java/**",
    "**/java/api**",
    "**/java/api**/**",
    "**/scala/api**",
    "**/scala/api**/**",
    "**/**ReferenceGuide**",
    "**/**ReferenceGuide**/**",
    "**/**Home**",
    "**/**Home**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.lagomframework.com/**"],
  schedule: "at 05:00 on Thursday",
  actions: [
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/1.5.x/scala/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["scala"],
            },
            version: {
              defaultValue: ["1.5.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/1.5.x/java/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["java"],
            },
            version: {
              defaultValue: ["1.5.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/1.6.x/scala/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["scala"],
            },
            version: {
              defaultValue: ["1.6.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/1.6.x/java/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["java"],
            },
            version: {
              defaultValue: ["1.6.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/current/scala/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["scala"],
            },
            version: {
              defaultValue: ["current"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/current/java/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["java"],
            },
            version: {
              defaultValue: ["current"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/1.5.x/scala/Home.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["scala"],
            },
            version: {
              defaultValue: ["1.5.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/1.5.x/java/Home.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["java"],
            },
            version: {
              defaultValue: ["1.5.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/1.6.x/scala/Home.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["scala"],
            },
            version: {
              defaultValue: ["1.6.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/1.6.x/java/Home.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["java"],
            },
            version: {
              defaultValue: ["1.6.x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/current/scala/Home.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["scala"],
            },
            version: {
              defaultValue: ["current"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "lagomframework",
      pathsToMatch: [
        "https://www.lagomframework.com/documentation/current/java/Home.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-marker";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            language: {
              defaultValue: ["java"],
            },
            version: {
              defaultValue: ["current"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    lagomframework: {
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