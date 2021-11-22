new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://pytorch.org/index.html",
    "https://pytorch.org/",
    "https://pytorch.org/features",
    "https://pytorch.org/docs/master/",
    "https://pytorch.org/tutorials/",
    "https://pytorch.org/blog",
    "https://pytorch.org/hub/",
    "https://pytorch.org/get-started/",
    "https://pytorch.org/get-started/locally/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/_**", "**/_**/**", "**/**?**", "**/**?**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://pytorch.org/**"],
  schedule: "at 00:50 on Friday",
  actions: [
    {
      indexName: "pytorch",
      pathsToMatch: ["https://pytorch.org/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#markdown-toc, h1 br, .section [class^=toctree], [class*=download-link-note], .detail-arrow";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".key-features-module h2",
            content: ".key-features-module p, .key-features-module li, p.lead",
            lvl0: {
              selectors: ".jumbotron h1",
              defaultValue: "Documentation",
            },
            lvl2: ".key-features-module h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pytorch",
      pathsToMatch: ["https://pytorch.org/features**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#markdown-toc, h1 br, .section [class^=toctree], [class*=download-link-note], .detail-arrow";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".feature-content h3",
            content: ".feature-content p, .feature-content li, p.lead",
            lvl0: {
              selectors: ".jumbotron h1",
              defaultValue: "Documentation",
            },
            lvl2: ".feature-content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pytorch",
      pathsToMatch: ["https://pytorch.org/docs/master/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#markdown-toc, h1 br, .section [class^=toctree], [class*=download-link-note], .detail-arrow";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p, .section li",
            lvl0: {
              selectors: "",
              defaultValue: "Master",
            },
            lvl2: ".section h2, .section .descname",
            lvl3: ".section h3",
            lvl4: ".section h4",
            lvl5: ".section h5",
            tags: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pytorch",
      pathsToMatch: ["https://pytorch.org/tutorials/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#markdown-toc, h1 br, .section [class^=toctree], [class*=download-link-note], .detail-arrow";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".section p, .section li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".section h1",
            lvl3: ".section h2",
            lvl4: ".section h3",
            lvl5: ".section h4",
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pytorch",
      pathsToMatch: ["https://pytorch.org/blog**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#markdown-toc, h1 br, .section [class^=toctree], [class*=download-link-note], .detail-arrow";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".jumbotron h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Blog",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            tags: {
              defaultValue: ["blog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pytorch",
      pathsToMatch: ["https://pytorch.org/hub/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#markdown-toc, h1 br, .section [class^=toctree], [class*=download-link-note], .detail-arrow";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".jumbotron h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Hub",
            },
            lvl2: ".jumbotron p.lead-summary",
            tags: {
              defaultValue: ["hub"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pytorch",
      pathsToMatch: [
        "https://pytorch.org/get-started/**",
        "https://pytorch.org/get-started/locally/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#markdown-toc, h1 br, .section [class^=toctree], [class*=download-link-note], .detail-arrow";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: ".jumbotron h1",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    pytorch: {
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