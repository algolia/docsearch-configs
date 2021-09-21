new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://roots.io/docs/sage/",
    "https://roots.io/",
    "https://roots.io/docs/trellis/",
    "https://roots.io/docs/bedrock/",
    "https://roots.io/docs/getting-started/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://roots.io/docs/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://roots.io/**"],
  schedule: "at 10:30 on Friday",
  actions: [
    {
      indexName: "roots",
      pathsToMatch: ["https://roots.io/docs/sage/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content: ".page p, .page li",
            lvl0: {
              selectors: "#docsMenuButton",
              defaultValue: "Documentation",
            },
            lvl2: "h2",
            lvl3: "h3",
            lvl4: "h4",
            lvl5: "h5",
            lvl6: "h6",
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
      pathsToMatch: ["https://roots.io/docs/trellis/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content: ".page p, .page li",
            lvl0: {
              selectors: "#docsMenuButton",
              defaultValue: "Documentation",
            },
            lvl2: "h2",
            lvl3: "h3",
            lvl4: "h4",
            lvl5: "h5",
            lvl6: "h6",
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
      pathsToMatch: ["https://roots.io/docs/bedrock/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content: ".page p, .page li",
            lvl0: {
              selectors: "#docsMenuButton",
              defaultValue: "Documentation",
            },
            lvl2: "h2",
            lvl3: "h3",
            lvl4: "h4",
            lvl5: "h5",
            lvl6: "h6",
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
      pathsToMatch: ["https://roots.io/docs/getting-started/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content: ".page p, .page li",
            lvl0: {
              selectors: "#docsMenuButton",
              defaultValue: "Documentation",
            },
            lvl2: "h2",
            lvl3: "h3",
            lvl4: "h4",
            lvl5: "h5",
            lvl6: "h6",
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