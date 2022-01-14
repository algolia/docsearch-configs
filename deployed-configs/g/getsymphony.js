new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://www.getsymphony.com/learn/beginners",
    "http://www.getsymphony.com/",
    "http://www.getsymphony.com/learn/users/",
    "http://www.getsymphony.com/learn/developers/",
    "http://www.getsymphony.com/learn/tutorials/",
    "http://www.getsymphony.com/learn/articles/",
    "http://www.getsymphony.com/learn/concepts/",
    "http://www.getsymphony.com/learn/faq/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "http://www.getsymphony.com/learn/api**",
    "http://www.getsymphony.com/learn/api**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["http://www.getsymphony.com/**"],
  schedule: "at 06:00 on Wednesday",
  actions: [
    {
      indexName: "getsymphony",
      pathsToMatch: ["http://www.getsymphony.com/learn/beginners**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#pagehead h2",
            content: ".subsection.compound p, .subsection.compound li",
            lvl0: {
              selectors: "#header #subnav a.current",
            },
            lvl2: ".subsection.compound h4",
            lvl3: ".subsection.compound h5",
            tags: {
              defaultValue: ["guides"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "getsymphony",
      pathsToMatch: ["http://www.getsymphony.com/learn/users/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#pagehead h2",
            content: ".subsection.compound p, .subsection.compound li",
            lvl0: {
              selectors: "#header #subnav a.current",
            },
            lvl2: ".subsection.compound h4",
            lvl3: ".subsection.compound h5",
            tags: {
              defaultValue: ["guides"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "getsymphony",
      pathsToMatch: ["http://www.getsymphony.com/learn/developers/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#pagehead h2",
            content: ".subsection.compound p, .subsection.compound li",
            lvl0: {
              selectors: "#header #subnav a.current",
            },
            lvl2: ".subsection.compound h4",
            lvl3: ".subsection.compound h5",
            tags: {
              defaultValue: ["guides"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "getsymphony",
      pathsToMatch: ["http://www.getsymphony.com/learn/tutorials/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#pagehead h2",
            content: ".subsection.compound p, .subsection.compound li",
            lvl0: {
              selectors: "#header #subnav a.current",
            },
            lvl2: ".subsection.compound h4",
            lvl3: ".subsection.compound h5",
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "getsymphony",
      pathsToMatch: ["http://www.getsymphony.com/learn/articles/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#pagehead h2",
            content: ".subsection.compound p, .subsection.compound li",
            lvl0: {
              selectors: "#header #subnav a.current",
            },
            lvl2: ".subsection.compound h4",
            lvl3: ".subsection.compound h5",
            tags: {
              defaultValue: ["articles"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "getsymphony",
      pathsToMatch: ["http://www.getsymphony.com/learn/concepts/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#pagehead h2",
            content: ".subsection.compound p, .subsection.compound li",
            lvl0: {
              selectors: "#header #subnav a.current",
            },
            lvl2: ".subsection.compound h4",
            lvl3: ".subsection.compound h5",
            tags: {
              defaultValue: ["concepts"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "getsymphony",
      pathsToMatch: ["http://www.getsymphony.com/learn/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#pagehead h2",
            content: ".subsection.compound p, .subsection.compound li",
            lvl0: {
              selectors: "#header #subnav a.current",
            },
            lvl2: ".subsection.compound h4",
            lvl3: ".subsection.compound h5",
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    getsymphony: {
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
      attributeForDistinct: "hierarchy.lvl1",
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