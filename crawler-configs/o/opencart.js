new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://opencart.my/documentation/betteroption/",
    "https://opencart.my/",
    "https://opencart.my/documentation/custommenu/",
    "https://opencart.my/documentation/customunit/",
    "https://opencart.my/documentation/globalqty/",
    "https://opencart.my/documentation/livepriceupdate/",
    "https://opencart.my/documentation/optiondiscount/",
    "https://opencart.my/documentation/rounding/",
    "https://opencart.my/documentation/superdiscount/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://opencart.my/**"],
  schedule: "at 20:30 on Thursday",
  actions: [
    {
      indexName: "opencart",
      pathsToMatch: ["https://opencart.my/documentation/betteroption/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h3",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors: ".markdown-body h2",
            },
            lvl2: ".markdown-body h4",
            lvl3: ".markdown-body h5",
            lvl4: ".markdown-body h6",
            tags: {
              defaultValue: ["betteroption"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "opencart",
      pathsToMatch: ["https://opencart.my/documentation/custommenu/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h3",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors: ".markdown-body h2",
            },
            lvl2: ".markdown-body h4",
            lvl3: ".markdown-body h5",
            lvl4: ".markdown-body h6",
            tags: {
              defaultValue: ["custommenu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "opencart",
      pathsToMatch: ["https://opencart.my/documentation/customunit/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h3",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors: ".markdown-body h2",
            },
            lvl2: ".markdown-body h4",
            lvl3: ".markdown-body h5",
            lvl4: ".markdown-body h6",
            tags: {
              defaultValue: ["customunit"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "opencart",
      pathsToMatch: ["https://opencart.my/documentation/globalqty/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h3",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors: ".markdown-body h2",
            },
            lvl2: ".markdown-body h4",
            lvl3: ".markdown-body h5",
            lvl4: ".markdown-body h6",
            tags: {
              defaultValue: ["globalqty"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "opencart",
      pathsToMatch: ["https://opencart.my/documentation/livepriceupdate/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h3",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors: ".markdown-body h2",
            },
            lvl2: ".markdown-body h4",
            lvl3: ".markdown-body h5",
            lvl4: ".markdown-body h6",
            tags: {
              defaultValue: ["livepriceupdate"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "opencart",
      pathsToMatch: ["https://opencart.my/documentation/optiondiscount/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h3",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors: ".markdown-body h2",
            },
            lvl2: ".markdown-body h4",
            lvl3: ".markdown-body h5",
            lvl4: ".markdown-body h6",
            tags: {
              defaultValue: ["optiondiscount"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "opencart",
      pathsToMatch: ["https://opencart.my/documentation/rounding/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h3",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors: ".markdown-body h2",
            },
            lvl2: ".markdown-body h4",
            lvl3: ".markdown-body h5",
            lvl4: ".markdown-body h6",
            tags: {
              defaultValue: ["rounding"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "opencart",
      pathsToMatch: ["https://opencart.my/documentation/superdiscount/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h3",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors: ".markdown-body h2",
            },
            lvl2: ".markdown-body h4",
            lvl3: ".markdown-body h5",
            lvl4: ".markdown-body h6",
            tags: {
              defaultValue: ["superdiscount"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    opencart: {
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