new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://fusionjs.com/docs/",
    "https://fusionjs.com/",
    "https://fusionjs.com/docs/getting-started",
    "https://fusionjs.com/api/",
    "https://fusionjs.com/api/fusion-docs/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://fusionjs.com/**"],
  schedule: "at 01:40 on Wednesday",
  actions: [
    {
      indexName: "fusionjs",
      pathsToMatch: [
        "https://fusionjs.com/docs/**",
        "https://fusionjs.com/docs/getting-started**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#next-steps, #next-steps + ul, #table-of-contents, #table-of-contents + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content h2",
            content:
              ".docSearch-content p, .docSearch-content li, .docSearch-content code",
            lvl0: {
              selectors: ".docSearch-content h1",
            },
            lvl2: ".docSearch-content h3",
            lvl3: ".docSearch-content h4",
            lvl4: ".docSearch-content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "fusionjs",
      pathsToMatch: [
        "https://fusionjs.com/api/**",
        "https://fusionjs.com/api/fusion-docs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#next-steps, #next-steps + ul, #table-of-contents, #table-of-contents + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content h2",
            content:
              ".docSearch-content p, .docSearch-content li, .docSearch-content code",
            lvl0: {
              selectors: ".docSearch-content h1",
            },
            lvl2: ".docSearch-content h3",
            lvl3: ".docSearch-content h4",
            lvl4: ".docSearch-content h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    fusionjs: {
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