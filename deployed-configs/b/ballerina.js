new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://ballerina.io/",
    "https://lib.ballerina.io/",
    "https://blog.ballerina.io/",
    "https://central.ballerina.io/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://ballerina.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://ballerina.io/**",
    "https://lib.ballerina.io/**",
    "https://blog.ballerina.io/**",
    "https://central.ballerina.io/**",
  ],
  schedule: "at 06:00 on Tuesday",
  actions: [
    {
      indexName: "ballerina",
      pathsToMatch: ["https://ballerina.io**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container h2",
            content: ".container p, .container li",
            lvl0: {
              selectors: ".container h1",
            },
            lvl2: ".container h3",
            lvl3: ".container h4",
            lvl4: ".container h5",
            lvl5: ".container h6",
            site: {
              defaultValue: ["ballerina"],
            },
            tags: {
              defaultValue: ["ballerina"],
            },
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "ballerina",
      pathsToMatch: ["https://lib.ballerina.io**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Ballerina Library (API) Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5,.content h6",
            site: {
              defaultValue: ["ballerina_api_docs"],
            },
            tags: {
              defaultValue: ["ballerina_api_docs"],
            },
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "ballerina",
      pathsToMatch: ["https://blog.ballerina.io**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container h1",
            content: ".container p, .container li",
            lvl0: {
              selectors: "",
              defaultValue: "Ballerina Blog",
            },
            lvl2: ".container h2",
            lvl3: ".container h3",
            lvl4: ".container h4",
            lvl5: ".container h5,.container h6",
            site: {
              defaultValue: ["ballerina_blog"],
            },
            tags: {
              defaultValue: ["ballerina_blog"],
            },
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "ballerina",
      pathsToMatch: ["https://central.ballerina.io**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "body h1",
            content: "body p, body li",
            lvl0: {
              selectors: "",
              defaultValue: "Ballerina Central",
            },
            lvl2: "body h2",
            lvl3: "body h3",
            lvl4: "body h4",
            lvl5: "body h5,body h6",
            site: {
              defaultValue: ["ballerina_central"],
            },
            tags: {
              defaultValue: ["ballerina_central"],
            },
            pageRank: "4",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    ballerina: {
      attributesForFaceting: ["type", "lang", "site", "tags"],
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