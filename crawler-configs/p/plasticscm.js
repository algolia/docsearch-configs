new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.plasticscm.com/documentation.html",
    "https://www.plasticscm.com/",
    "https://www.plasticscm.com/documentation/.*/.*.shtml",
    "https://users.semanticmerge.com/documentation/external-parsers/external-parsers-guide.shtml",
    "https://users.semanticmerge.com/",
    "https://www.plasticscm.com/download/releasenotes/",
    "https://www.plasticscm.com/download/releasenotes/all",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [
    "**/**newernotes**",
    "**/**newernotes**/**",
    "**/**oldernotes**",
    "**/**oldernotes**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://www.plasticscm.com/**",
    "https://users.semanticmerge.com/**",
  ],
  schedule: "at 00:20 on Friday",
  actions: [
    {
      indexName: "plasticscm",
      pathsToMatch: ["https://www.plasticscm.com/download/releasenotes/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".note h4",
            content: ".note .text p, .note .text li, .note .text td",
            lvl0: {
              selectors: "",
              defaultValue: "Release notes",
            },
            lvl2: ".note h6",
            tags: {
              defaultValue: ["release"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "plasticscm",
      pathsToMatch: ["https://www.plasticscm.com/documentation.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".span9 h1",
            content: ".span9 p, .span9 li, .span9 td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".span9 h2",
            lvl3: ".span9 h3",
            lvl4: ".span9 h4",
            lvl5: ".span9 h5",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "plasticscm",
      pathsToMatch: [
        "https://www.plasticscm.com/documentation/.*/.*\\.shtml**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".span9 h1",
            content: ".span9 p, .span9 li, .span9 td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".span9 h2",
            lvl3: ".span9 h3",
            lvl4: ".span9 h4",
            lvl5: ".span9 h5",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "plasticscm",
      pathsToMatch: [
        "https://users.semanticmerge.com/documentation/external-parsers/external-parsers-guide.shtml**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".span9 h1",
            content: ".span9 p, .span9 li, .span9 td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".span9 h2",
            lvl3: ".span9 h3",
            lvl4: ".span9 h4",
            lvl5: ".span9 h5",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "plasticscm",
      pathsToMatch: [
        "https://www.plasticscm.com/download/releasenotes/all**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".span9 h1",
            content: ".span9 p, .span9 li, .span9 td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".span9 h2",
            lvl3: ".span9 h3",
            lvl4: ".span9 h4",
            lvl5: ".span9 h5",
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    plasticscm: {
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
        "desc(weight.page_rank)",
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