new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.bolt.cm/4.0/getting-started/introduction",
    "https://docs.bolt.cm/",
    "https://docs.bolt.cm/3.7/getting-started/introduction",
    "https://docs.bolt.cm/3.6/getting-started/introduction",
    "https://docs.bolt.cm/3.5/getting-started/introduction",
    "https://docs.bolt.cm/3.4/getting-started/introduction",
    "https://docs.bolt.cm/3.3/getting-started/introduction",
    "https://docs.bolt.cm/3.2/getting-started/introduction",
    "https://docs.bolt.cm/3.1/getting-started/introduction",
    "https://docs.bolt.cm/3.0/getting-started/introduction",
    "https://docs.bolt.cm/2.2/getting-started/introduction",
    "https://docs.bolt.cm/4.0/.*",
    "https://docs.bolt.cm/3.7/.*",
    "https://docs.bolt.cm/3.6/.*",
    "https://docs.bolt.cm/3.5/.*",
    "https://docs.bolt.cm/3.4/.*",
    "https://docs.bolt.cm/3.3/.*",
    "https://docs.bolt.cm/3.2/.*",
    "https://docs.bolt.cm/3.1/.*",
    "https://docs.bolt.cm/3.0/.*",
    "https://docs.bolt.cm/2.2/.*",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.bolt.cm/**"],
  schedule: "at 06:30 on Tuesday",
  actions: [
    {
      indexName: "bolt",
      pathsToMatch: [
        "https://docs.bolt.cm/4.0/getting-started/introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["4.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: [
        "https://docs.bolt.cm/3.7/getting-started/introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.7"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: [
        "https://docs.bolt.cm/3.6/getting-started/introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.6"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: [
        "https://docs.bolt.cm/3.5/getting-started/introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.5"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: [
        "https://docs.bolt.cm/3.4/getting-started/introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.4"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: [
        "https://docs.bolt.cm/3.3/getting-started/introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: [
        "https://docs.bolt.cm/3.2/getting-started/introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: [
        "https://docs.bolt.cm/3.1/getting-started/introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: [
        "https://docs.bolt.cm/3.0/getting-started/introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: [
        "https://docs.bolt.cm/2.2/getting-started/introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["2.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: ["https://docs.bolt.cm/4.0/.***/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["4.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: ["https://docs.bolt.cm/3.7/.***/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.7"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: ["https://docs.bolt.cm/3.6/.***/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.6"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: ["https://docs.bolt.cm/3.5/.***/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.5"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: ["https://docs.bolt.cm/3.4/.***/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.4"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: ["https://docs.bolt.cm/3.3/.***/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: ["https://docs.bolt.cm/3.2/.***/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: ["https://docs.bolt.cm/3.1/.***/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: ["https://docs.bolt.cm/3.0/.***/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["3.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bolt",
      pathsToMatch: ["https://docs.bolt.cm/2.2/.***/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".quick-links, .community-notice";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li, .content code",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            version: {
              defaultValue: ["2.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    bolt: {
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
        "desc(weight.page_rank)",
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