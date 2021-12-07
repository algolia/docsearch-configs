new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://boosted.orange.com/docs/4.0/",
    "https://boosted.orange.com/",
    "https://boosted.orange.com/docs/4.1/",
    "https://boosted.orange.com/docs/4.2/",
    "https://boosted.orange.com/docs/5.0/",
    "https://boosted.orange.com/docs/5.1/",
    "https://boosted.orange.com/docs/4.3/",
    "https://boosted.orange.com/docs/4.4/",
    "https://boosted.orange.com/docs/4.5/",
    "https://boosted.orange.com/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://boosted.orange.com/sitemap.xml"],
  exclusionPatterns: [
    "**/examples/**",
    "**/**boosted.orange.com/docs/3**",
    "**/**boosted.orange.com/docs/3**/**",
    "**/**boosted.orange.com/docs/versions/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://boosted.orange.com/**"],
  schedule: "at 06:30 on Tuesday",
  actions: [
    {
      indexName: "boosted-orange",
      pathsToMatch: ["https://boosted.orange.com/docs/4.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bd-example";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li, main td:last-child",
            lvl0: {
              selectors: ".bd-toc-item.active > a",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
            language: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["4.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "boosted-orange",
      pathsToMatch: ["https://boosted.orange.com/docs/4.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bd-example";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li, main td:last-child",
            lvl0: {
              selectors: ".bd-toc-item.active > a",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
            language: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["4.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "boosted-orange",
      pathsToMatch: ["https://boosted.orange.com/docs/4.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bd-example";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li, main td:last-child",
            lvl0: {
              selectors: ".bd-toc-item.active > a",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
            language: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["4.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "boosted-orange",
      pathsToMatch: ["https://boosted.orange.com/docs/5.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bd-example";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".bd-layout h1",
            content: "main p, main li, main td:last-child",
            lvl0: {
              selectors: ".bd-sidebar .active.my-1 > a",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
            language: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["5.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "boosted-orange",
      pathsToMatch: ["https://boosted.orange.com/docs/5.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bd-example";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".bd-layout h1",
            content: "main p, main li, main td:last-child",
            lvl0: {
              selectors: ".bd-sidebar .active.my-1 > a",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
            language: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["5.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "boosted-orange",
      pathsToMatch: [
        "https://boosted.orange.com/docs/**",
        "https://boosted.orange.com/docs/4.3/**",
        "https://boosted.orange.com/docs/4.4/**",
        "https://boosted.orange.com/docs/4.5/**",
        "!https://boosted.orange.com/docs/4.0/**",
        "!https://boosted.orange.com/docs/4.1/**",
        "!https://boosted.orange.com/docs/4.2/**",
        "!https://boosted.orange.com/docs/5.0/**",
        "!https://boosted.orange.com/docs/5.1/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bd-example";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li, main td:last-child",
            lvl0: {
              selectors: ".bd-toc-item.active > a",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "boosted-orange": {
      attributesForFaceting: ["type", "lang", "version", "language"],
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