new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://api-platform.com/docs/main/",
    "https://api-platform.com/",
    "https://api-platform.com/docs/2.6/",
    "https://api-platform.com/docs/2.5/",
    "https://api-platform.com/docs/2.4/",
    "https://api-platform.com/docs/2.3/",
    "https://api-platform.com/docs/2.2/",
    "https://api-platform.com/docs/2.1/",
    "https://api-platform.com/docs",
  ],
  renderJavaScript: false,
  sitemaps: ["https://api-platform.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://api-platform.com/**"],
  schedule: "at 01:30 on Tuesday",
  actions: [
    {
      indexName: "api-platform",
      pathsToMatch: ["https://api-platform.com/docs/main/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#other-resources";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__content h1",
            content: ".docs__content p, .docs__content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__content h2",
            lvl3: ".docs__content h3",
            lvl4: ".docs__content h4",
            version: {
              defaultValue: ["main"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "api-platform",
      pathsToMatch: ["https://api-platform.com/docs/2.6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#other-resources";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__content h1",
            content: ".docs__content p, .docs__content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__content h2",
            lvl3: ".docs__content h3",
            lvl4: ".docs__content h4",
            version: {
              defaultValue: ["2.6"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "api-platform",
      pathsToMatch: ["https://api-platform.com/docs/2.5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#other-resources";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__content h1",
            content: ".docs__content p, .docs__content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__content h2",
            lvl3: ".docs__content h3",
            lvl4: ".docs__content h4",
            version: {
              defaultValue: ["2.5"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "api-platform",
      pathsToMatch: ["https://api-platform.com/docs/2.4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#other-resources";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__content h1",
            content: ".docs__content p, .docs__content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__content h2",
            lvl3: ".docs__content h3",
            lvl4: ".docs__content h4",
            version: {
              defaultValue: ["2.4"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "api-platform",
      pathsToMatch: ["https://api-platform.com/docs/2.3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#other-resources";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__content h1",
            content: ".docs__content p, .docs__content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__content h2",
            lvl3: ".docs__content h3",
            lvl4: ".docs__content h4",
            version: {
              defaultValue: ["2.3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "api-platform",
      pathsToMatch: ["https://api-platform.com/docs/2.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#other-resources";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__content h1",
            content: ".docs__content p, .docs__content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__content h2",
            lvl3: ".docs__content h3",
            lvl4: ".docs__content h4",
            version: {
              defaultValue: ["2.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "api-platform",
      pathsToMatch: ["https://api-platform.com/docs/2.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#other-resources";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__content h1",
            content: ".docs__content p, .docs__content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__content h2",
            lvl3: ".docs__content h3",
            lvl4: ".docs__content h4",
            version: {
              defaultValue: ["2.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "api-platform",
      pathsToMatch: ["https://api-platform.com/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#other-resources";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs__content h1",
            content: ".docs__content p, .docs__content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs__content h2",
            lvl3: ".docs__content h3",
            lvl4: ".docs__content h4",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "api-platform": {
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