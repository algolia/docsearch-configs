new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.fastify.io/docs/latest/",
    "https://www.fastify.io/",
    "https://www.fastify.io/docs/master/",
    "https://www.fastify.io/ecosystem/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.fastify.io/**"],
  schedule: "at 01:00 on Wednesday",
  actions: [
    {
      indexName: "fastify",
      pathsToMatch: ["https://www.fastify.io/docs/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#doc-content h3",
            content: "#doc-content p, #doc-content li",
            lvl0: {
              selectors: "#doc-content h2",
            },
            lvl2: "#doc-content h4",
            lvl3: "#doc-content h5",
            version: {
              defaultValue: ["latest"],
            },
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "fastify",
      pathsToMatch: ["https://www.fastify.io/docs/master/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#doc-content h3",
            content: "#doc-content p, #doc-content li",
            lvl0: {
              selectors: "#doc-content h2",
            },
            lvl2: "#doc-content h4",
            lvl3: "#doc-content h5",
            version: {
              defaultValue: ["master"],
            },
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "fastify",
      pathsToMatch: ["https://www.fastify.io/"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".title",
            content:
              ".hero-body h2, .columns.is-centered p, .columns.is-centered li",
            lvl0: {
              selectors: "",
              defaultValue: "fastify",
            },
            lvl2: ".columns.is-centered h2",
            lvl3: ".columns.is-centered h3",
            tags: {
              defaultValue: ["home"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "fastify",
      pathsToMatch: ["https://www.fastify.io/ecosystem/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content table td:nth-child(2)",
            lvl0: {
              selectors: ".title",
              defaultValue: "Ecosystem",
            },
            lvl2: ".content table td:first-of-type",
            lvl3: ".content h3",
            tags: {
              defaultValue: ["ecosystem"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    fastify: {
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
      separatorsToIndex: "-",
    },
  },
});