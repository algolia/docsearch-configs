new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://nette.org/",
    "https://blog.nette.org/",
    "https://doc.nette.org/",
    "https://latte.nette.org/",
    "https://tracy.nette.org/",
    "https://tester.nette.org/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/**?**", "**/**?**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://nette.org/**",
    "https://blog.nette.org/**",
    "https://doc.nette.org/**",
    "https://latte.nette.org/**",
    "https://tracy.nette.org/**",
    "https://tester.nette.org/**",
  ],
  schedule: "at 15:00 on Thursday",
  actions: [
    {
      indexName: "nette",
      pathsToMatch: ["https://nette.org**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wiki h2",
            content: ".wiki p, .wiki li",
            lvl0: {
              selectors: "h1",
            },
            lvl2: ".wiki h3",
            lvl3: ".wiki h4",
            lvl4: ".wiki h5",
            lvl5: ".wiki h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nette",
      pathsToMatch: ["https://blog.nette.org**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wiki h2",
            content: ".wiki p, .wiki li",
            lvl0: {
              selectors: "h1",
            },
            lvl2: ".wiki h3",
            lvl3: ".wiki h4",
            lvl4: ".wiki h5",
            lvl5: ".wiki h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nette",
      pathsToMatch: ["https://doc.nette.org**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wiki h2",
            content: ".wiki p, .wiki li",
            lvl0: {
              selectors: "h1",
            },
            lvl2: ".wiki h3",
            lvl3: ".wiki h4",
            lvl4: ".wiki h5",
            lvl5: ".wiki h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nette",
      pathsToMatch: ["https://latte.nette.org**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wiki h2",
            content: ".wiki p, .wiki li",
            lvl0: {
              selectors: "h1",
            },
            lvl2: ".wiki h3",
            lvl3: ".wiki h4",
            lvl4: ".wiki h5",
            lvl5: ".wiki h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nette",
      pathsToMatch: ["https://tracy.nette.org**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wiki h2",
            content: ".wiki p, .wiki li",
            lvl0: {
              selectors: "h1",
            },
            lvl2: ".wiki h3",
            lvl3: ".wiki h4",
            lvl4: ".wiki h5",
            lvl5: ".wiki h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "nette",
      pathsToMatch: ["https://tester.nette.org**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wiki h2",
            content: ".wiki p, .wiki li",
            lvl0: {
              selectors: "h1",
            },
            lvl2: ".wiki h3",
            lvl3: ".wiki h4",
            lvl4: ".wiki h5",
            lvl5: ".wiki h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    nette: {
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