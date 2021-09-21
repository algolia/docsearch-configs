new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://help.fortrabbit.com/craft-3-about",
    "https://help.fortrabbit.com/",
    "https://help.fortrabbit.com/install-laravel-5-uni",
    "https://help.fortrabbit.com/install-wordpress-5-uni",
    "https://help.fortrabbit.com/.*?-uni",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://help.fortrabbit.com/**"],
  schedule: "at 01:30 on Wednesday",
  actions: [
    {
      indexName: "fortrabbit",
      pathsToMatch: ["https://help.fortrabbit.com/craft-3-about**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            pageRank: "5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "fortrabbit",
      pathsToMatch: ["https://help.fortrabbit.com/install-laravel-5-uni**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "fortrabbit",
      pathsToMatch: [
        "https://help.fortrabbit.com/install-wordpress-5-uni**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "fortrabbit",
      pathsToMatch: ["https://help.fortrabbit.com/.*?-uni**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "fortrabbit",
      pathsToMatch: [
        "https://help.fortrabbit.com/**",
        "!https://help.fortrabbit.com/craft-3-about**/**",
        "!https://help.fortrabbit.com/install-laravel-5-uni**/**",
        "!https://help.fortrabbit.com/install-wordpress-5-uni**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    fortrabbit: {
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