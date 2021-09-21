new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.libelektra.org/docgettingstarted/",
    "https://www.libelektra.org/",
    "https://www.libelektra.org/tutorials/",
    "https://www.libelektra.org/plugins/",
    "https://www.libelektra.org/tools/",
    "https://www.libelektra.org/manpages/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.libelektra.org/**"],
  schedule: "at 20:20 on Tuesday",
  actions: [
    {
      indexName: "elektra",
      pathsToMatch: ["https://www.libelektra.org/docgettingstarted/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#see-also, #see-also + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#markdown-document h1",
            content: "#markdown-document p, #markdown-document li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#markdown-document h2",
            lvl3: "#markdown-document h3",
            lvl4: "#markdown-document h4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elektra",
      pathsToMatch: ["https://www.libelektra.org/tutorials/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#see-also, #see-also + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#markdown-document h1",
            content: "#markdown-document p, #markdown-document li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#markdown-document h2",
            lvl3: "#markdown-document h3",
            lvl4: "#markdown-document h4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elektra",
      pathsToMatch: ["https://www.libelektra.org/plugins/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#see-also, #see-also + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#markdown-document h1",
            content: "#markdown-document p, #markdown-document li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#markdown-document h2",
            lvl3: "#markdown-document h3",
            lvl4: "#markdown-document h4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elektra",
      pathsToMatch: ["https://www.libelektra.org/tools/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#see-also, #see-also + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#markdown-document h1",
            content: "#markdown-document p, #markdown-document li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#markdown-document h2",
            lvl3: "#markdown-document h3",
            lvl4: "#markdown-document h4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elektra",
      pathsToMatch: ["https://www.libelektra.org/manpages/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#see-also, #see-also + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#markdown-document h1",
            content: "#markdown-document p, #markdown-document li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#markdown-document h2",
            lvl3: "#markdown-document h3",
            lvl4: "#markdown-document h4",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    elektra: {
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