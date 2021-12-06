new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://aws-amplify.github.io/docs",
    "https://aws-amplify.github.io/",
    "https://aws-amplify.github.io/amplify-js/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://aws-amplify.github.io/docs/sitemap.xml"],
  exclusionPatterns: ["**/**index.html"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://aws-amplify.github.io/**"],
  schedule: "at 01:50 on Tuesday",
  actions: [
    {
      indexName: "aws_amplify",
      pathsToMatch: ["https://aws-amplify.github.io/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".tsd-index-panel";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2, .content h2",
            content: "section p, section li, .content p, .content li",
            lvl0: {
              selectors:
                ".tsd-navigation li.current > a, .content-wrap h1, .content h1",
              defaultValue: "Documentation",
            },
            lvl2: "section h3, .content h3",
            lvl3: "section h4, .content h4",
            lvl4: "section h5, .content h5",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "aws_amplify",
      pathsToMatch: ["https://aws-amplify.github.io/amplify-js/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".tsd-index-panel";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2, .content h2",
            content: "section p, section li, .content p, .content li",
            lvl0: {
              selectors:
                ".tsd-navigation li.current > a, .content-wrap h1, .content h1",
              defaultValue: "Documentation",
            },
            lvl2: "section h3, .content h3",
            lvl3: "section h4, .content h4",
            lvl4: "section h5, .content h5",
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    aws_amplify: {
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