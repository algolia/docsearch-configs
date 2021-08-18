new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://numpy.org/neps/",
    "https://numpy.org/",
    "https://numpy.org/doc/stable/reference",
    "https://numpy.org/doc/stable/release",
    "https://numpy.org/doc/stable/",
    "https://numpy.org/devdocs/release/",
    "https://numpy.org/devdocs/reference/",
    "https://numpy.org/devdocs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://numpy.org/sitemap.xml"],
  exclusionPatterns: [
    "https://numpy.org/doc/d**",
    "https://numpy.org/doc/d**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://numpy.org/**"],
  schedule: "at 15:40 on Thursday",
  actions: [
    {
      indexName: "numpy",
      pathsToMatch: ["https://numpy.org/neps/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".toctree-wrapper, .seealso";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1, section h1",
            content: ".section p, section p, .section li, section li",
            lvl0: {
              selectors: "",
              defaultValue: "NEP",
            },
            lvl2: ".section h2, section h2",
            lvl3: ".section h3, section h3",
            lvl4: ".section h4, section h4",
            lvl5: ".section h5, section h5",
            lvl6: ".section h6, section h6",
            version: {
              defaultValue: ["devdocs", "stable"],
            },
            tags: {
              defaultValue: ["nep"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "numpy",
      pathsToMatch: ["https://numpy.org/doc/stable/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".toctree-wrapper, .seealso";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1, section h1",
            content: ".section p, section p, .section li, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Reference",
            },
            lvl2: ".field-list dl dt",
            lvl3: ".section h3, section h3",
            lvl4: ".section h4, section h4",
            lvl5: ".section h5, section h5",
            lvl6: ".section h6, section h6",
            version: {
              defaultValue: ["stable"],
            },
            tags: {
              defaultValue: ["reference"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "numpy",
      pathsToMatch: ["https://numpy.org/doc/stable/release**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".toctree-wrapper, .seealso";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1, section h1",
            content: ".section p, section p, .section li, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Release",
            },
            lvl2: ".section h2, section h2",
            lvl3: ".section h3, section h3",
            lvl4: ".section h4, section h4",
            lvl5: ".section h5, section h5",
            lvl6: ".section h6, section h6",
            version: {
              defaultValue: ["stable"],
            },
            tags: {
              defaultValue: ["release"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "numpy",
      pathsToMatch: ["https://numpy.org/doc/stable/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".toctree-wrapper, .seealso";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h2, section h2",
            content: ".section p, section p, .section li, section li",
            lvl0: {
              selectors: ".section h1, section h1",
              defaultValue: "Documentation",
            },
            lvl2: ".section h3, section h3",
            lvl3: ".section h4, section h4",
            lvl4: ".section h5, section h5",
            lvl5: ".section h6, section h6",
            version: {
              defaultValue: ["stable"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "numpy",
      pathsToMatch: ["https://numpy.org/devdocs/release/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".toctree-wrapper, .seealso";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1, section h1",
            content: ".section p, section p, .section li, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Release",
            },
            lvl2: ".section h2, section h2",
            lvl3: ".section h3, section h3",
            lvl4: ".section h4, section h4",
            lvl5: ".section h5, section h5",
            lvl6: ".section h6, section h6",
            version: {
              defaultValue: ["devdocs"],
            },
            tags: {
              defaultValue: ["release"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "numpy",
      pathsToMatch: ["https://numpy.org/devdocs/reference/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".toctree-wrapper, .seealso";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1, section h1",
            content: ".section p, section p, .section li, section li",
            lvl0: {
              selectors: "",
              defaultValue: "Reference",
            },
            lvl2: ".field-list dl dt",
            lvl3: ".section h3, section h3",
            lvl4: ".section h4, section h4",
            lvl5: ".section h5, section h5",
            lvl6: ".section h6, section h6",
            version: {
              defaultValue: ["devdocs"],
            },
            tags: {
              defaultValue: ["reference"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "numpy",
      pathsToMatch: ["https://numpy.org/devdocs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".toctree-wrapper, .seealso";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h2, section h2",
            content: ".section p, section p, .section li, section li",
            lvl0: {
              selectors: ".section h1, section h1",
              defaultValue: "Documentation",
            },
            lvl2: ".section h3, section h3",
            lvl3: ".section h4, section h4",
            lvl4: ".section h5, section h5",
            lvl5: ".section h6, section h6",
            version: {
              defaultValue: ["devdocs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "numpy",
      pathsToMatch: [
        "https://numpy.org/**",
        "!https://numpy.org/neps/**",
        "!https://numpy.org/doc/stable/reference**/**",
        "!https://numpy.org/doc/stable/release**/**",
        "!https://numpy.org/doc/stable/**",
        "!https://numpy.org/devdocs/release/**",
        "!https://numpy.org/devdocs/reference/**",
        "!https://numpy.org/devdocs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".toctree-wrapper, .seealso";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h2, section h2",
            content: ".section p, section p, .section li, section li",
            lvl0: {
              selectors: ".section h1, section h1",
              defaultValue: "Documentation",
            },
            lvl2: ".section h3, section h3",
            lvl3: ".section h4, section h4",
            lvl4: ".section h5, section h5",
            lvl5: ".section h6, section h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    numpy: {
      attributesForFaceting: ["type", "lang", "tags", "version"],
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
      separatorsToIndex: "_",
    },
  },
});