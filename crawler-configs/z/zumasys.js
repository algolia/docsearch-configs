new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.zumasys.com/accuterm/",
    "https://docs.zumasys.com/",
    "https://docs.zumasys.com/customer-portal/",
    "https://docs.zumasys.com/jbase/",
    "https://docs.zumasys.com/mv-connect/",
    "https://docs.zumasys.com/mv-dashboard/",
    "https://docs.zumasys.com/pos-connect/",
    "https://docs.zumasys.com/smartsuite/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.zumasys.com/sitemap.xml"],
  exclusionPatterns: ["!**/"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.zumasys.com/**"],
  schedule: "at 00:40 on Sunday",
  actions: [
    {
      indexName: "zumasys",
      pathsToMatch: ["https://docs.zumasys.com/accuterm/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content span.badge",
            content:
              ".theme-default-content p, .theme-default-content li, .theme-default-content code, .theme-default-content table, .theme-default-content blockquote, .theme-default-content div, .theme-default-content span",
            lvl0: {
              selectors: ".theme-default-content h1",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            tags: {
              defaultValue: ["accuterm"],
            },
            pageRank: "2",
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
    {
      indexName: "zumasys",
      pathsToMatch: ["https://docs.zumasys.com/customer-portal/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content span.badge",
            content:
              ".theme-default-content p, .theme-default-content li, .theme-default-content code, .theme-default-content table, .theme-default-content blockquote, .theme-default-content div, .theme-default-content span",
            lvl0: {
              selectors: ".theme-default-content h1",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            tags: {
              defaultValue: ["customer-portal"],
            },
            pageRank: "7",
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
    {
      indexName: "zumasys",
      pathsToMatch: ["https://docs.zumasys.com/jbase/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content span.badge",
            content:
              ".theme-default-content p, .theme-default-content li, .theme-default-content code, .theme-default-content table, .theme-default-content blockquote, .theme-default-content div, .theme-default-content span",
            lvl0: {
              selectors: ".theme-default-content h1",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            tags: {
              defaultValue: ["jbase"],
            },
            pageRank: "1",
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
    {
      indexName: "zumasys",
      pathsToMatch: ["https://docs.zumasys.com/mv-connect/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content span.badge",
            content:
              ".theme-default-content p, .theme-default-content li, .theme-default-content code, .theme-default-content table, .theme-default-content blockquote, .theme-default-content div, .theme-default-content span",
            lvl0: {
              selectors: ".theme-default-content h1",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            tags: {
              defaultValue: ["mv-connect"],
            },
            pageRank: "3",
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
    {
      indexName: "zumasys",
      pathsToMatch: ["https://docs.zumasys.com/mv-dashboard/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content span.badge",
            content:
              ".theme-default-content p, .theme-default-content li, .theme-default-content code, .theme-default-content table, .theme-default-content blockquote, .theme-default-content div, .theme-default-content span",
            lvl0: {
              selectors: ".theme-default-content h1",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            tags: {
              defaultValue: ["mv-dashboard"],
            },
            pageRank: "4",
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
    {
      indexName: "zumasys",
      pathsToMatch: ["https://docs.zumasys.com/pos-connect/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content span.badge",
            content:
              ".theme-default-content p, .theme-default-content li, .theme-default-content code, .theme-default-content table, .theme-default-content blockquote, .theme-default-content div, .theme-default-content span",
            lvl0: {
              selectors: ".theme-default-content h1",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            tags: {
              defaultValue: ["pos-connect"],
            },
            pageRank: "5",
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
    {
      indexName: "zumasys",
      pathsToMatch: ["https://docs.zumasys.com/smartsuite/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content span.badge",
            content:
              ".theme-default-content p, .theme-default-content li, .theme-default-content code, .theme-default-content table, .theme-default-content blockquote, .theme-default-content div, .theme-default-content span",
            lvl0: {
              selectors: ".theme-default-content h1",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            tags: {
              defaultValue: ["smartsuite"],
            },
            pageRank: "6",
          },
          indexHeadings: { from: 0, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    zumasys: {
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