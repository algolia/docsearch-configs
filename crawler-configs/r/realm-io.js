new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.realm.io/docs/.*/latest/",
    "https://www.realm.io/",
    "https://(www.)/?realm.io/docs/.*/latest/",
    "https://(www.)/",
    "https://(www.)/?realm.io/kr/docs/.*/latest/",
    "https://(www.)/?realm.io/cn/docs/.*/latest/",
    "https://(www.)/?realm.io/jp/docs/.*/latest/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://realm.io/sitemap.xml"],
  exclusionPatterns: [
    "**/**api**",
    "**/**api**/**",
    "**/**objc/d**",
    "**/**objc/d**/**",
    "**/**swift/d**",
    "**/**swift/d**/**",
    "**/**java/d**",
    "**/**java/d**/**",
    "**/**xamarin/d**",
    "**/**xamarin/d**/**",
    "**/**javascript/d**",
    "**/**javascript/d**/**",
    "**/**java/adapter**",
    "**/**java/adapter**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.realm.io/**", "https://(www.)/**"],
  schedule: "at 10:00 on Friday",
  actions: [
    {
      indexName: "realm-io",
      pathsToMatch: ["https://www.realm.io/docs/.*/latest/"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body h3",
            content: ".docs-body p, .docs-body li",
            lvl0: {
              selectors: ".docs-body h2",
            },
            lvl2: ".docs-body h4",
            lvl3: ".docs-body h5",
            lvl4: ".docs-body h6",
            tags: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "realm-io",
      pathsToMatch: ["https://(www.)?realm.io/docs/.*/latest/"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body h3",
            content: ".docs-body p, .docs-body li",
            lvl0: {
              selectors: ".docs-body h2",
            },
            lvl2: ".docs-body h4",
            lvl3: ".docs-body h5",
            lvl4: ".docs-body h6",
            tags: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "realm-io",
      pathsToMatch: ["https://(www.)?realm.io/kr/docs/.*/latest/"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body h3",
            content: ".docs-body p, .docs-body li",
            lvl0: {
              selectors: ".docs-body h2",
            },
            lvl2: ".docs-body h4",
            lvl3: ".docs-body h5",
            lvl4: ".docs-body h6",
            tags: {
              defaultValue: ["kr"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "realm-io",
      pathsToMatch: ["https://(www.)?realm.io/cn/docs/.*/latest/"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body h3",
            content: ".docs-body p, .docs-body li",
            lvl0: {
              selectors: ".docs-body h2",
            },
            lvl2: ".docs-body h4",
            lvl3: ".docs-body h5",
            lvl4: ".docs-body h6",
            tags: {
              defaultValue: ["cn"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "realm-io",
      pathsToMatch: ["https://(www.)?realm.io/jp/docs/.*/latest/"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body h3",
            content: ".docs-body p, .docs-body li",
            lvl0: {
              selectors: ".docs-body h2",
            },
            lvl2: ".docs-body h4",
            lvl3: ".docs-body h5",
            lvl4: ".docs-body h6",
            tags: {
              defaultValue: ["jp"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    "realm-io": {
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