new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.cockroachlabs.com/docs/dev/",
    "https://www.cockroachlabs.com/",
    "https://www.cockroachlabs.com/docs/releases/",
    "https://www.cockroachlabs.com/docs/v1.0/",
    "https://www.cockroachlabs.com/docs/v1.1/",
    "https://www.cockroachlabs.com/docs/v2.0/",
    "https://www.cockroachlabs.com/docs/v2.1/",
    "https://www.cockroachlabs.com/docs/v2.2/",
    "https://www.cockroachlabs.com/docs/v19.1/",
    "https://www.cockroachlabs.com/docs/v19.2/",
    "https://www.cockroachlabs.com/docs/v20.1/",
    "https://www.cockroachlabs.com/docs/stable/",
    "https://www.cockroachlabs.com/docs/cockroachcloud/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://www.cockroachlabs.com/docs/sitemap.xml",
    "https://www.cockroachlabs.com/docs/cockroachcloud/sitemap.xml",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.cockroachlabs.com/**"],
  schedule: "at 11:30 on Tuesday",
  actions: [
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/dev/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["dev"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/releases/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["releases"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/v1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["v1.0"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/v1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["v1.1"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/v2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["v2.0"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/v2.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["v2.1"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/v2.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["v2.2"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/v19.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["v19.1"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/v19.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["v19.2"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/v20.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["v20.1"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/stable/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["stable"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "cockroachlabs",
      pathsToMatch: ["https://www.cockroachlabs.com/docs/cockroachcloud/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "h2#whats-next, h2#whats-next ~ ul, h2#whats-next ~ p, h2#see-also, h2#see-also ~ ul, h2#see-also ~ p, #toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-content h2",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: ".post-header h1",
            },
            lvl2: ".post-content h3",
            lvl3: ".post-content h4",
            lvl4: ".post-content h5",
            version: {
              defaultValue: ["cockroachcloud"],
            },
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    cockroachlabs: {
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
      attributeForDistinct: "url_without_anchor",
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