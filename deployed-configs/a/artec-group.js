new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://docs.artec-group.com/as/11/en/",
    "http://docs.artec-group.com/",
    "http://docs.artec-group.com/as/11/ru/",
    "http://docs.artec-group.com/as/11/de/",
    "http://docs.artec-group.com/as/12/en/",
    "http://docs.artec-group.com/as/12/ru/",
    "http://docs.artec-group.com/as/12/de/",
    "http://docs.artec-group.com/as/13/en/",
    "http://docs.artec-group.com/as/13/ru/",
    "http://docs.artec-group.com/as/13/de/",
    "http://docs.artec-group.com/as/14/en/",
    "http://docs.artec-group.com/as/14/ru/",
    "http://docs.artec-group.com/as/14/de/",
    "http://docs.artec-group.com/as/15/en/",
    "http://docs.artec-group.com/as/15/ru/",
    "http://docs.artec-group.com/as/15/de/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/**genindex**",
    "**/**genindex**/**",
    "**/**index.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["http://docs.artec-group.com/**"],
  schedule: "at 01:40 on Tuesday",
  actions: [
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/11/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["11"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/11/ru/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["ru"],
            },
            version: {
              defaultValue: ["11"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/11/de/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["de"],
            },
            version: {
              defaultValue: ["11"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/12/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["12"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/12/ru/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["ru"],
            },
            version: {
              defaultValue: ["12"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/12/de/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["de"],
            },
            version: {
              defaultValue: ["12"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/13/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["13"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/13/ru/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["ru"],
            },
            version: {
              defaultValue: ["13"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/13/de/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["de"],
            },
            version: {
              defaultValue: ["13"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/14/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["14"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/14/ru/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["ru"],
            },
            version: {
              defaultValue: ["14"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/14/de/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["de"],
            },
            version: {
              defaultValue: ["14"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/15/en/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["15"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/15/ru/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["ru"],
            },
            version: {
              defaultValue: ["15"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "artec-group",
      pathsToMatch: ["http://docs.artec-group.com/as/15/de/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content:
              ".document p, .document li, .document td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            lvl5: ".document h5, .document td:first-child",
            language: {
              defaultValue: ["de"],
            },
            version: {
              defaultValue: ["15"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    "artec-group": {
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