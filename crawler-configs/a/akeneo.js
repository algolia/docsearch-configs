new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.akeneo.com/1.0/",
    "https://docs.akeneo.com/",
    "https://docs.akeneo.com/1.1/",
    "https://docs.akeneo.com/1.2/",
    "https://docs.akeneo.com/1.3/",
    "https://docs.akeneo.com/1.4/",
    "https://docs.akeneo.com/1.5/",
    "https://docs.akeneo.com/1.6/",
    "https://docs.akeneo.com/1.7/",
    "https://docs.akeneo.com/2.0/",
    "https://docs.akeneo.com/2.1/",
    "https://docs.akeneo.com/2.2/",
    "https://docs.akeneo.com/2.3/",
    "https://docs.akeneo.com/3.0/",
    "https://docs.akeneo.com/3.1/",
    "https://docs.akeneo.com/3.2/",
    "https://docs.akeneo.com/4.0/",
    "https://docs.akeneo.com/5.0/",
    "https://docs.akeneo.com/master/",
    "https://docs.akeneo.com/latest/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.akeneo.com/**"],
  schedule: "at 01:20 on Tuesday",
  actions: [
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["1.0"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["1.1"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/1.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["1.2"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/1.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["1.3"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/1.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["1.4"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/1.5/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["1.5"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/1.6/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["1.6"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/1.7/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["1.7"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["2.0"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/2.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["2.1"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/2.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["2.2"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/2.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["2.3"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/3.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["3.0"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/3.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["3.1"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/3.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["3.2"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/4.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["4.0"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/5.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["5.0"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/master/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "akeneo",
      pathsToMatch: ["https://docs.akeneo.com/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    akeneo: {
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