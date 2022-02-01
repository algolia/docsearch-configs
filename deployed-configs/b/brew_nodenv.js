new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://nodenv.github.io/formulae/analytics/",
    "https://nodenv.github.io/",
    "https://nodenv.github.io/formulae/docs/",
    "https://nodenv.github.io/formulae/formula/",
    "https://nodenv.github.io/formulae/cask/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://nodenv.github.io/formulae/sitemap.xml"],
  exclusionPatterns: ["**.json"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://nodenv.github.io/**"],
  schedule: "at 06:40 on Tuesday",
  actions: [
    {
      indexName: "brew_nodenv",
      pathsToMatch: ["https://nodenv.github.io/formulae/analytics/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#wrap h2",
            content: "#wrap td:not(.number-data)",
            lvl0: {
              selectors: "",
              defaultValue: "Analytics data",
            },
            lvl2: "#wrap h3",
            lvl3: "#wrap h4",
            lvl4: "#wrap h5",
            lvl5: "#wrap h6",
            site: {
              defaultValue: ["formulae"],
            },
            tags: {
              defaultValue: ["analytics"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "brew_nodenv",
      pathsToMatch: ["https://nodenv.github.io/formulae/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#wrap h2",
            content: "#default p:nth-child(-n+4)",
            lvl0: {
              selectors: "",
              defaultValue: "JSON API documentation",
            },
            lvl2: "#wrap h3",
            lvl3: "#wrap h4",
            lvl4: "#wrap h5",
            lvl5: "#wrap h6",
            site: {
              defaultValue: ["formulae"],
            },
            tags: {
              defaultValue: ["formulae_docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "brew_nodenv",
      pathsToMatch: ["https://nodenv.github.io/formulae/formula/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#wrap h2",
            content: "#default p:nth-child(-n+4)",
            lvl0: {
              selectors: "",
              defaultValue: "Formulae",
            },
            lvl2: "#wrap h3",
            lvl3: "#wrap h4",
            lvl4: "#wrap h5",
            lvl5: "#wrap h6",
            site: {
              defaultValue: ["formulae"],
            },
            tags: {
              defaultValue: ["formula"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "brew_nodenv",
      pathsToMatch: ["https://nodenv.github.io/formulae/cask/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#wrap h2",
            content: "#wrap p, #wrap li",
            lvl0: {
              selectors: "",
              defaultValue: "Cask",
            },
            lvl2: "#wrap h3",
            lvl3: "#wrap h4",
            lvl4: "#wrap h5",
            lvl5: "#wrap h6",
            site: {
              defaultValue: ["formulae"],
            },
            tags: {
              defaultValue: ["cask", "formula"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    brew_nodenv: {
      attributesForFaceting: ["type", "lang", "tags", "site"],
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
      separatorsToIndex: "_+@/",
    },
  },
});