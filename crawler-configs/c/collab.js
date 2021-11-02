new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.collab.net/teamforge212/",
    "https://docs.collab.net/",
    "https://docs.collab.net/teamforge211/",
    "https://docs.collab.net/teamforge210/",
    "https://docs.collab.net/teamforge203/",
    "https://docs.collab.net/teamforge202/",
    "https://docs.collab.net/teamforge201/",
    "https://docs.collab.net/teamforge200/",
    "https://docs.collab.net/teamforge193/",
    "https://docs.collab.net/teamforge192/",
    "https://docs.collab.net/teamforge191/",
    "https://docs.collab.net/teamforge190/",
    "https://docs.collab.net/teamforge183/",
    "https://docs.collab.net/teamforge182/",
    "https://docs.collab.net/teamforge181/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/**?**", "**/**?**/**", "**/javadoc/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.collab.net/**"],
  schedule: "at 11:30 on Tuesday",
  actions: [
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge212/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge212"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge211/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge211"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge210/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge210"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge203/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge203"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge202/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge202"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge201/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge201"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge200/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge200"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge193/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge193"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge192/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge192"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge191/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge191"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge190/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge190"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge183/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge183"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge182/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge182"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "collab",
      pathsToMatch: ["https://docs.collab.net/teamforge181/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post-header h1",
            content: ".post-content p, .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".post-content h2",
            lvl3: ".post-content h3",
            lvl4: ".post-content h4",
            lvl5: ".post-content h5",
            tags: {
              defaultValue: ["teamforge181"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    collab: {
      attributesForFaceting: ["type", "lang", "tags"],
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