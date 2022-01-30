new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://react-styleguidist.js.org/docs/getting-started",
    "https://react-styleguidist.js.org/",
    "https://react-styleguidist.js.org/docs/documenting",
    "https://react-styleguidist.js.org/docs/components",
    "https://react-styleguidist.js.org/docs/webpack",
    "https://react-styleguidist.js.org/docs/cookbook",
    "https://react-styleguidist.js.org/docs/cli",
    "https://react-styleguidist.js.org/docs/api",
    "https://react-styleguidist.js.org/docs/development",
    "https://react-styleguidist.js.org/docs/configuration",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "https://react-styleguidist.js.org/docs/getting-started.html",
    "https://react-styleguidist.js.org/docs/documenting.html",
    "https://react-styleguidist.js.org/docs/components.html",
    "https://react-styleguidist.js.org/docs/webpack.html",
    "https://react-styleguidist.js.org/docs/cookbook.html",
    "https://react-styleguidist.js.org/docs/configuration.html",
    "https://react-styleguidist.js.org/docs/cli.html",
    "https://react-styleguidist.js.org/docs/api.html",
    "https://react-styleguidist.js.org/docs/development.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://react-styleguidist.js.org/**"],
  schedule: "at 10:00 on Friday",
  actions: [
    {
      indexName: "react_styleguidist",
      pathsToMatch: [
        "https://react-styleguidist.js.org/docs/getting-started**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main.Main--main h1",
            content: ".Layout--column p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".Layout--column h2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "react_styleguidist",
      pathsToMatch: ["https://react-styleguidist.js.org/docs/documenting**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main.Main--main h1",
            content: ".Layout--column p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".Layout--column h2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "react_styleguidist",
      pathsToMatch: ["https://react-styleguidist.js.org/docs/components**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main.Main--main h1",
            content: ".Layout--column p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".Layout--column h2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "react_styleguidist",
      pathsToMatch: ["https://react-styleguidist.js.org/docs/webpack**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main.Main--main h1",
            content: ".Layout--column p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".Layout--column h2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "react_styleguidist",
      pathsToMatch: ["https://react-styleguidist.js.org/docs/cookbook**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main.Main--main h1",
            content: ".Layout--column p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".Layout--column h2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "react_styleguidist",
      pathsToMatch: ["https://react-styleguidist.js.org/docs/cli**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main.Main--main h1",
            content: ".Layout--column p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".Layout--column h2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "react_styleguidist",
      pathsToMatch: ["https://react-styleguidist.js.org/docs/api**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main.Main--main h1",
            content: ".Layout--column p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".Layout--column h2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "react_styleguidist",
      pathsToMatch: ["https://react-styleguidist.js.org/docs/development**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main.Main--main h1",
            content: ".Layout--column p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".Layout--column h2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "react_styleguidist",
      pathsToMatch: [
        "https://react-styleguidist.js.org/docs/configuration**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main.Main--main h1",
            content: ".Layout--column p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".Layout--column h4[id] a code",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    react_styleguidist: {
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