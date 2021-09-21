new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://golang.org/doc/",
    "https://golang.org/",
    "https://golang.org/ref/spec",
    "https://golang.org/project/",
    "https://golang.org/help/",
    "https://golang.org/pkg/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/**?fileprint**",
    "**/**?fileprint**/**",
    "**/wiki**",
    "**/wiki**/**",
    "**/doc/go[0-9].?[0-9]?[0-9]?",
    "**/devel/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://golang.org/**"],
  schedule: "at 06:30 on Wednesday",
  actions: [
    {
      indexName: "golang",
      pathsToMatch: ["https://golang.org/ref/spec**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[id*='nav'], .pkg-index, .permalink";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page .container h2",
            content: "#page .container p, #page .container li",
            lvl0: {
              selectors: "#page .container h1",
            },
            lvl2: "#page .container h3",
            lvl3: "#page .container h4",
            lvl4: "#page .container h5",
            tags: {
              defaultValue: ["spec"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "golang",
      pathsToMatch: ["https://golang.org/project/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[id*='nav'], .pkg-index, .permalink";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page .container h2",
            content: "#page .container p, #page .container li",
            lvl0: {
              selectors: "#page .container h1",
            },
            lvl2: "#page .container h3",
            lvl3: "#page .container h4",
            lvl4: "#page .container h5",
            tags: {
              defaultValue: ["project"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "golang",
      pathsToMatch: ["https://golang.org/help/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[id*='nav'], .pkg-index, .permalink";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page .container h2",
            content: "#page .container p, #page .container li",
            lvl0: {
              selectors: "#page .container h1",
            },
            lvl2: "#page .container h3",
            lvl3: "#page .container h4",
            lvl4: "#page .container h5",
            tags: {
              defaultValue: ["help"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "golang",
      pathsToMatch: ["https://golang.org/pkg/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[id*='nav'], .pkg-index, .permalink";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page .container h2",
            content: "#page .container p, #page .container li",
            lvl0: {
              selectors: "#page .container h1",
            },
            lvl2: "#page .container h3",
            lvl3: "#page .container h4",
            lvl4: "#page .container h5",
            tags: {
              defaultValue: ["packages"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "golang",
      pathsToMatch: ["https://golang.org/doc/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[id*='nav'], .pkg-index, .permalink";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page .container h2",
            content: "#page .container p, #page .container li",
            lvl0: {
              selectors: "#page .container h1",
            },
            lvl2: "#page .container h3",
            lvl3: "#page .container h4",
            lvl4: "#page .container h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    golang: {
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