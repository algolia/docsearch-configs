new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.pilosa.com/docs/v0.4/",
    "https://www.pilosa.com/",
    "https://www.pilosa.com/docs/v0.5/",
    "https://www.pilosa.com/docs/v0.6/",
    "https://www.pilosa.com/docs/v0.7/",
    "https://www.pilosa.com/docs/v0.8/",
    "https://www.pilosa.com/docs/v0.9/",
    "https://www.pilosa.com/docs/v0.10/",
    "https://www.pilosa.com/docs/v1.0/",
    "https://www.pilosa.com/docs/v1.1/",
    "https://www.pilosa.com/docs/v1.2/",
    "https://www.pilosa.com/docs/v1.3/",
    "https://www.pilosa.com/docs/v1.4/",
    "https://www.pilosa.com/docs/latest/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://www.pilosa.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.pilosa.com/**"],
  schedule: "at 00:10 on Friday",
  actions: [
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v0.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v0.4"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v0.5/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v0.5"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v0.6/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v0.6"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v0.7/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v0.7"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v0.8/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v0.8"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v0.9/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v0.9"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v0.10/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v0.10"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v1.0"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v1.1"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v1.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v1.2"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v1.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v1.3"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/v1.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
            version: {
              defaultValue: ["v1.4"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "pilosa",
      pathsToMatch: ["https://www.pilosa.com/docs/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h3",
            content: "#content p, #content li",
            lvl0: {
              selectors: "#content h2",
            },
            lvl2: "#content h4",
            lvl3: "#content h5",
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
    pilosa: {
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