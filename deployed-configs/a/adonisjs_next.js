new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.adonisjs.com/reference/",
    "https://docs.adonisjs.com/",
    "https://docs.adonisjs.com/guides/",
    "https://docs.adonisjs.com/cookbooks/",
    "https://docs.adonisjs.com/releases/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.adonisjs.com/**"],
  schedule: "at 01:00 on Tuesday",
  actions: [
    {
      indexName: "adonisjs_next",
      pathsToMatch: ["https://docs.adonisjs.com/reference/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            zone: {
              defaultValue: "reference",
            },
            pageRank: "4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "adonisjs_next",
      pathsToMatch: ["https://docs.adonisjs.com/guides/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            zone: {
              defaultValue: "guides",
            },
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "adonisjs_next",
      pathsToMatch: ["https://docs.adonisjs.com/cookbooks/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            zone: {
              defaultValue: "cookbooks",
            },
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "adonisjs_next",
      pathsToMatch: ["https://docs.adonisjs.com/releases/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            zone: {
              defaultValue: "releases",
            },
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "adonisjs_next",
      pathsToMatch: [
        "https://docs.adonisjs.com/**",
        "!https://docs.adonisjs.com/reference/**",
        "!https://docs.adonisjs.com/guides/**",
        "!https://docs.adonisjs.com/cookbooks/**",
        "!https://docs.adonisjs.com/releases/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    adonisjs_next: {
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