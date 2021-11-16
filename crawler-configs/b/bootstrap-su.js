new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://getbootstrap.su/docs/3.4/",
    "https://getbootstrap.su/",
    "https://getbootstrap.su/docs/4.5/",
    "https://getbootstrap.su/docs/4.6/",
    "https://getbootstrap.su/docs/5.0/",
    "https://getbootstrap.su/docs/5.1/",
    "https://getbootstrap.su/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://getbootstrap.su/sitemap.xml"],
  exclusionPatterns: [
    "**/examples/**",
    "**/**getbootstrap.su/docs/versions/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://getbootstrap.su/**"],
  schedule: "at 06:30 on Tuesday",
  actions: [
    {
      indexName: "bootstrap-su",
      pathsToMatch: ["https://getbootstrap.su/docs/3.4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".bd-example";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".bs-docs-section h1",
            content:
              ".bs-docs-section p, .bs-docs-section li, .bs-docs-header p",
            lvl0: {
              selectors: ".bs-docs-header h1",
              defaultValue: "Документация",
            },
            lvl2: ".bs-docs-section h2",
            lvl3: ".bs-docs-section h3",
            lvl4: ".bs-docs-section h4",
            lvl5: ".bs-docs-section h5",
            language: {
              defaultValue: ["ru"],
            },
            version: {
              defaultValue: ["3.4"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bootstrap-su",
      pathsToMatch: ["https://getbootstrap.su/docs/4.5/**"],
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
              defaultValue: "Документация",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
            language: {
              defaultValue: ["ru"],
            },
            version: {
              defaultValue: ["4.5"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bootstrap-su",
      pathsToMatch: ["https://getbootstrap.su/docs/4.6/**"],
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
              defaultValue: "Документация",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
            language: {
              defaultValue: ["ru"],
            },
            version: {
              defaultValue: ["4.6"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bootstrap-su",
      pathsToMatch: ["https://getbootstrap.su/docs/5.0/**"],
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
              defaultValue: "Документация",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
            language: {
              defaultValue: ["ru"],
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
      indexName: "bootstrap-su",
      pathsToMatch: ["https://getbootstrap.su/docs/5.1/**"],
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
              defaultValue: "Документация",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4, main td:first-child",
            lvl5: "main h5",
            language: {
              defaultValue: ["ru"],
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
      indexName: "bootstrap-su",
      pathsToMatch: [
        "https://getbootstrap.su/docs/**",
        "!https://getbootstrap.su/docs/3.4/**",
        "!https://getbootstrap.su/docs/4.5/**",
        "!https://getbootstrap.su/docs/4.6/**",
        "!https://getbootstrap.su/docs/5.0/**",
        "!https://getbootstrap.su/docs/5.1/**",
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
              defaultValue: "Документация",
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
    "bootstrap-su": {
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