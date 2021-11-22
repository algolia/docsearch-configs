new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.supportpal.com/current",
    "https://docs.supportpal.com/",
    "https://docs.supportpal.com/3.6",
    "https://docs.supportpal.com/3.5",
    "https://docs.supportpal.com/3.4",
    "https://docs.supportpal.com/3.3",
    "https://docs.supportpal.com/3.2",
    "https://docs.supportpal.com/3.1",
    "https://docs.supportpal.com/3.0",
    "https://docs.supportpal.com/2.6.1",
    "https://docs.supportpal.com/2.6.0",
    "https://docs.supportpal.com/2.5.1",
    "https://docs.supportpal.com/2.5.0",
    "https://docs.supportpal.com/2.4.1",
    "https://docs.supportpal.com/2.4.0",
    "https://docs.supportpal.com/2.3.1",
    "https://docs.supportpal.com/2.3.0",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**.sql",
    "**/**Configuring+a\\+Trusted\\-Proxy**",
    "**/**Configuring+a\\+Trusted\\-Proxy**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.supportpal.com/**"],
  schedule: "at 15:40 on Friday",
  actions: [
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/current**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["current"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/3.6**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["3.6"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/3.5**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["3.5"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/3.4**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["3.4"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/3.3**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["3.3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/3.2**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["3.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/3.1**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["3.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/3.0**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["3.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/2.6.1**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["2.6.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/2.6.0**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["2.6.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/2.5.1**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["2.5.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/2.5.0**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["2.5.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/2.4.1**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["2.4.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/2.4.0**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["2.4.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/2.3.1**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["2.3.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supportpal",
      pathsToMatch: ["https://docs.supportpal.com/2.3.0**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main h2",
            content: ".main p, .main li",
            lvl0: {
              selectors: ".main h1",
            },
            lvl2: ".main h3",
            lvl3: ".main h4",
            lvl4: ".main h5",
            version: {
              defaultValue: ["2.3.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    supportpal: {
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