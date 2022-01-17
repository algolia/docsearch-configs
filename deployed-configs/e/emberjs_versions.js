new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://guides.emberjs.com/release/",
    "https://guides.emberjs.com/",
    "https://guides.emberjs.com/v3.1.0/",
    "https://guides.emberjs.com/v3.0.0/",
    "https://guides.emberjs.com/v2.18.0/",
    "https://guides.emberjs.com/v2.0.0/",
    "https://guides.emberjs.com/v2.1.0/",
    "https://guides.emberjs.com/v2.2.0/",
    "https://guides.emberjs.com/v2.3.0/",
    "https://guides.emberjs.com/v2.4.0/",
    "https://guides.emberjs.com/v2.5.0/",
    "https://guides.emberjs.com/v2.6.0/",
    "https://guides.emberjs.com/v2.7.0/",
    "https://guides.emberjs.com/v2.8.0/",
    "https://guides.emberjs.com/v2.9.0/",
    "https://guides.emberjs.com/v1.13.0/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://guides.emberjs.com/**"],
  schedule: "at 20:20 on Tuesday",
  actions: [
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/release/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["release"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v3.1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v3.1.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v3.0.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v3.0.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v2.18.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v2.18.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v2.0.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v2.0.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v2.1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v2.1.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v2.2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v2.2.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v2.3.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v2.3.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v2.4.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v2.4.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v2.5.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v2.5.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v2.6.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v2.6.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v2.7.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v2.7.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v2.8.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v2.8.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v2.9.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v2.9.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "emberjs_versions",
      pathsToMatch: ["https://guides.emberjs.com/v1.13.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["ACK! 404 FRIEND"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove =
          ".old-version-warning, .edit-page, .class-info, #content p:first-child, p.attributes, .CodeRay";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, #content h2",
            content: "article p, #content p, article li, #content li",
            lvl0: {
              selectors: "article h1, #content h1",
            },
            lvl2: "article h3, #content h3",
            lvl3: "article h4, #content h4",
            lvl4: "article h5, #content h5",
            version: {
              defaultValue: ["v1.13.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    emberjs_versions: {
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