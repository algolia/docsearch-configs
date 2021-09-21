new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://docs.signageos.io/knowledge-base/",
    "http://docs.signageos.io/",
    "https://docs.signageos.io/provisioning/",
    "https://docs.signageos.io/",
    "http://docs.signageos.io/api/latest/",
    "http://docs.signageos.io/api/4.10.4/",
    "http://docs.signageos.io/api/4.9.3/",
    "http://docs.signageos.io/api/4.8.3/",
    "http://docs.signageos.io/api/4.7.3/",
    "http://docs.signageos.io/api/4.6.4/",
    "http://docs.signageos.io/api/4.5.4/",
    "http://docs.signageos.io/api/deprecated/",
    "http://docs.signageos.io/api/",
  ],
  renderJavaScript: true,
  sitemaps: ["http://docs.signageos.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "http://docs.signageos.io/**",
    "https://docs.signageos.io/**",
  ],
  schedule: "at 15:10 on Friday",
  actions: [
    {
      indexName: "signageos",
      pathsToMatch: ["http://docs.signageos.io/knowledge-base/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__wrapper h1",
            content: ".content__wrapper p, .content__wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content__wrapper h2",
            lvl3: ".content__wrapper h3",
            lvl4: ".content__wrapper h4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signageos",
      pathsToMatch: ["https://docs.signageos.io/provisioning/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__wrapper h1",
            content: ".content__wrapper p, .content__wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content__wrapper h2",
            lvl3: ".content__wrapper h3",
            lvl4: ".content__wrapper h4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signageos",
      pathsToMatch: ["http://docs.signageos.io/api/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__wrapper h1",
            content: ".content__wrapper p, .content__wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".content__wrapper h2",
            lvl3: ".content__wrapper h3",
            lvl4: ".content__wrapper h4",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signageos",
      pathsToMatch: ["http://docs.signageos.io/api/4.10.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__wrapper h1",
            content: ".content__wrapper p, .content__wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".content__wrapper h2",
            lvl3: ".content__wrapper h3",
            lvl4: ".content__wrapper h4",
            version: {
              defaultValue: ["4.10.4"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signageos",
      pathsToMatch: ["http://docs.signageos.io/api/4.9.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__wrapper h1",
            content: ".content__wrapper p, .content__wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".content__wrapper h2",
            lvl3: ".content__wrapper h3",
            lvl4: ".content__wrapper h4",
            version: {
              defaultValue: ["4.9.3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signageos",
      pathsToMatch: ["http://docs.signageos.io/api/4.8.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__wrapper h1",
            content: ".content__wrapper p, .content__wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".content__wrapper h2",
            lvl3: ".content__wrapper h3",
            lvl4: ".content__wrapper h4",
            version: {
              defaultValue: ["4.8.3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signageos",
      pathsToMatch: ["http://docs.signageos.io/api/4.7.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__wrapper h1",
            content: ".content__wrapper p, .content__wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".content__wrapper h2",
            lvl3: ".content__wrapper h3",
            lvl4: ".content__wrapper h4",
            version: {
              defaultValue: ["4.7.3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signageos",
      pathsToMatch: ["http://docs.signageos.io/api/4.6.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__wrapper h1",
            content: ".content__wrapper p, .content__wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".content__wrapper h2",
            lvl3: ".content__wrapper h3",
            lvl4: ".content__wrapper h4",
            version: {
              defaultValue: ["4.6.4"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signageos",
      pathsToMatch: ["http://docs.signageos.io/api/4.5.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__wrapper h1",
            content: ".content__wrapper p, .content__wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".content__wrapper h2",
            lvl3: ".content__wrapper h3",
            lvl4: ".content__wrapper h4",
            version: {
              defaultValue: ["4.5.4"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signageos",
      pathsToMatch: ["http://docs.signageos.io/api/deprecated/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__wrapper h1",
            content: ".content__wrapper p, .content__wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".content__wrapper h2",
            lvl3: ".content__wrapper h3",
            lvl4: ".content__wrapper h4",
            version: {
              defaultValue: ["deprecated"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signageos",
      pathsToMatch: ["http://docs.signageos.io/api/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__wrapper h1",
            content: ".content__wrapper p, .content__wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".content__wrapper h2",
            lvl3: ".content__wrapper h3",
            lvl4: ".content__wrapper h4",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    signageos: {
      attributesForFaceting: ["type", "lang", "version"],
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