new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.getambassador.io/docs/argo/latest/",
    "https://www.getambassador.io/",
    "https://www.getambassador.io/docs/cloud/latest/",
    "https://www.getambassador.io/docs/edge-stack/latest/",
    "https://www.getambassador.io/docs/telepresence/latest/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://www.getambassador.io/sitemap.xml"],
  exclusionPatterns: [
    "https://www.getambassador.io/docs/edge-stack/pre-release/**",
    "https://www.getambassador.io/docs/edge-stack/1**",
    "https://www.getambassador.io/docs/edge-stack/1**/**",
    "https://www.getambassador.io/docs/telepresence/pre-release/**",
    "https://www.getambassador.io/docs/telepresence/2**",
    "https://www.getambassador.io/docs/telepresence/2**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.getambassador.io/**"],
  schedule: "at 06:00 on Wednesday",
  actions: [
    {
      indexName: "getambassador",
      pathsToMatch: ["https://www.getambassador.io/docs/argo/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__doc-body h1",
            content: ".docs__doc-body p, .docs__doc-body li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__doc-body h2",
            lvl3: ".docs__doc-body h3",
            lvl4: ".docs__doc-body h4",
            lvl5: ".docs__doc-body h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "getambassador",
      pathsToMatch: ["https://www.getambassador.io/docs/cloud/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__doc-body h1",
            content: ".docs__doc-body p, .docs__doc-body li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__doc-body h2",
            lvl3: ".docs__doc-body h3",
            lvl4: ".docs__doc-body h4",
            lvl5: ".docs__doc-body h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "getambassador",
      pathsToMatch: ["https://www.getambassador.io/docs/edge-stack/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__doc-body h1",
            content: ".docs__doc-body p, .docs__doc-body li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__doc-body h2",
            lvl3: ".docs__doc-body h3",
            lvl4: ".docs__doc-body h4",
            lvl5: ".docs__doc-body h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "getambassador",
      pathsToMatch: [
        "https://www.getambassador.io/docs/telepresence/latest/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__doc-body h1",
            content: ".docs__doc-body p, .docs__doc-body li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__doc-body h2",
            lvl3: ".docs__doc-body h3",
            lvl4: ".docs__doc-body h4",
            lvl5: ".docs__doc-body h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    getambassador: {
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