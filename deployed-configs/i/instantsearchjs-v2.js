new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://community.algolia.com/instantsearch.js/v2/guides",
    "https://community.algolia.com/",
    "https://community.algolia.com/instantsearch.js/v2/widgets",
    "https://community.algolia.com/instantsearch.js/v2/connectors",
    "https://community.algolia.com/instantsearch.js/v2/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [
    "https://community.algolia.com/instantsearch.js/v2/examples**",
    "https://community.algolia.com/instantsearch.js/v2/examples**/**",
    "https://community.algolia.com/instantsearch.js/v2/dev-novel**",
    "https://community.algolia.com/instantsearch.js/v2/dev-novel**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://community.algolia.com/**"],
  schedule: "at 15:30 on Wednesday",
  actions: [
    {
      indexName: "instantsearchjs-v2",
      pathsToMatch: [
        "https://community.algolia.com/instantsearch.js/v2/guides**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".documentation-container hr + p, .editThisPage";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content:
              ".documentation-container p, .documentation-container td, .documentation-container ul:not(.struct-def) li",
            lvl0: {
              selectors: "",
            },
            lvl2: ".documentation-container h2",
            lvl3: ".documentation-container h3",
            lvl4: ".documentation-container h4, .documentation-container ul.struct-def li strong",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "instantsearchjs-v2",
      pathsToMatch: [
        "https://community.algolia.com/instantsearch.js/v2/widgets**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".documentation-container hr + p, .editThisPage";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content:
              ".documentation-container p, .documentation-container td, .documentation-container ul:not(.struct-def) li",
            lvl0: {
              selectors: "",
            },
            lvl2: ".documentation-container h2",
            lvl3: ".documentation-container h3",
            lvl4: ".documentation-container h4, .documentation-container ul.struct-def li strong",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "instantsearchjs-v2",
      pathsToMatch: [
        "https://community.algolia.com/instantsearch.js/v2/connectors**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".documentation-container hr + p, .editThisPage";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content:
              ".documentation-container p, .documentation-container td, .documentation-container ul:not(.struct-def) li",
            lvl0: {
              selectors: "",
            },
            lvl2: ".documentation-container h2",
            lvl3: ".documentation-container h3",
            lvl4: ".documentation-container h4, .documentation-container ul.struct-def li strong",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "instantsearchjs-v2",
      pathsToMatch: [
        "https://community.algolia.com/instantsearch.js/v2/**",
        "!https://community.algolia.com/instantsearch.js/v2/guides**/**",
        "!https://community.algolia.com/instantsearch.js/v2/widgets**/**",
        "!https://community.algolia.com/instantsearch.js/v2/connectors**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".documentation-container hr + p, .editThisPage";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content:
              ".documentation-container p, .documentation-container td, .documentation-container ul:not(.struct-def) li",
            lvl0: {
              selectors: ".hero h1",
            },
            lvl2: ".documentation-container h2",
            lvl3: ".documentation-container h3",
            lvl4: ".documentation-container h4, .documentation-container ul.struct-def li strong",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "instantsearchjs-v2": {
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