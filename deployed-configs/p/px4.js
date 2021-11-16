new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.px4.io/master/",
    "https://docs.px4.io/",
    "https://docs.px4.io/v1.12/",
    "https://docs.px4.io/v1.11/",
    "https://docs.px4.io/v1.10/",
    "https://docs.px4.io/v1.9.0/",
    "https://docs.px4.io/v1.8.2/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.px4.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.px4.io/**"],
  schedule: "at 00:50 on Friday",
  actions: [
    {
      indexName: "px4",
      pathsToMatch: ["https://docs.px4.io/master/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content h1",
            content:
              ".theme-default-content p, .theme-default-content li, .theme-default-content td:first-child",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "px4",
      pathsToMatch: ["https://docs.px4.io/v1.12/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "nav.active",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            version: {
              defaultValue: ["v1.12"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "px4",
      pathsToMatch: ["https://docs.px4.io/v1.11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "nav.active",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            version: {
              defaultValue: ["v1.11"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "px4",
      pathsToMatch: ["https://docs.px4.io/v1.10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "nav.active",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            version: {
              defaultValue: ["v1.10"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "px4",
      pathsToMatch: ["https://docs.px4.io/v1.9.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "nav.active",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            version: {
              defaultValue: ["v1.9.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "px4",
      pathsToMatch: ["https://docs.px4.io/v1.8.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "section h1",
            content: "section p, section li",
            lvl0: {
              selectors: "nav.active",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            version: {
              defaultValue: ["v1.8.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    px4: {
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