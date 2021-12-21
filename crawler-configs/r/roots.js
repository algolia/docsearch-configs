new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.roots.io/sage/",
    "https://docs.roots.io/",
    "https://docs.roots.io/trellis/",
    "https://docs.roots.io/bedrock/",
    "https://docs.roots.io/acorn/",
    "https://docs.roots.io/getting-started/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.roots.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.roots.io/**"],
  schedule: "at 10:30 on Friday",
  actions: [
    {
      indexName: "roots",
      pathsToMatch: ["https://docs.roots.io/sage/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".sidebar-version option:checked",
            content: ".page p, .page li",
            lvl0: {
              selectors: ".sidebar-current",
              defaultValue: "Documentation",
            },
            lvl2: "h1",
            lvl3: "h2",
            lvl4: "h3",
            lvl5: "h4",
            area: {
              defaultValue: ["sage"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "roots",
      pathsToMatch: ["https://docs.roots.io/trellis/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".sidebar-version option:checked",
            content: ".page p, .page li",
            lvl0: {
              selectors: ".sidebar-current",
              defaultValue: "Documentation",
            },
            lvl2: "h1",
            lvl3: "h2",
            lvl4: "h3",
            lvl5: "h4",
            area: {
              defaultValue: ["trellis"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "roots",
      pathsToMatch: ["https://docs.roots.io/bedrock/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".sidebar-version option:checked",
            content: ".page p, .page li",
            lvl0: {
              selectors: ".sidebar-current",
              defaultValue: "Documentation",
            },
            lvl2: "h1",
            lvl3: "h2",
            lvl4: "h3",
            lvl5: "h4",
            area: {
              defaultValue: ["bedrock"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "roots",
      pathsToMatch: ["https://docs.roots.io/acorn/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".sidebar-version option:checked",
            content: ".page p, .page li",
            lvl0: {
              selectors: ".sidebar-current",
              defaultValue: "Documentation",
            },
            lvl2: "h1",
            lvl3: "h2",
            lvl4: "h3",
            lvl5: "h4",
            area: {
              defaultValue: ["acorn"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "roots",
      pathsToMatch: ["https://docs.roots.io/getting-started/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".sidebar-version option:checked",
            content: ".page p, .page li",
            lvl0: {
              selectors: ".sidebar-current",
              defaultValue: "Documentation",
            },
            lvl2: "h1",
            lvl3: "h2",
            lvl4: "h3",
            lvl5: "h4",
            area: {
              defaultValue: ["getting-started"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    roots: {
      attributesForFaceting: [
        "type",
        "lang",
        "hierarchy.lvl0",
        "hierarchy.lvl1",
      ],
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