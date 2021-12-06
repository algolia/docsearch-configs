new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://pm2.io/docs/runtime/overview/",
    "https://pm2.io/",
    "https://pm2.io/docs/plus/overview/",
    "https://pm2.io/docs/enterprise/overview/",
    "https://pm2.io/docs/runtime/",
    "https://pm2.io/docs/plus/",
    "https://pm2.io/docs/enterprise/",
    "https://pm2.io/docs/usage/",
    "https://pm2.keymetrics.io/docs/usage",
    "https://pm2.keymetrics.io/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://pm2.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://pm2.io/**", "https://pm2.keymetrics.io/**"],
  schedule: "at 00:20 on Friday",
  actions: [
    {
      indexName: "pm2docs",
      pathsToMatch: ["https://pm2.io/docs/runtime/overview/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#next-steps, #next-steps + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            tool: {
              defaultValue: ["runtime"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pm2docs",
      pathsToMatch: ["https://pm2.io/docs/plus/overview/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#next-steps, #next-steps + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            tool: {
              defaultValue: ["plus"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pm2docs",
      pathsToMatch: ["https://pm2.io/docs/enterprise/overview/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#next-steps, #next-steps + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            tool: {
              defaultValue: ["enterprise"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pm2docs",
      pathsToMatch: ["https://pm2.io/docs/runtime/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#next-steps, #next-steps + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            tool: {
              defaultValue: ["runtime"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pm2docs",
      pathsToMatch: ["https://pm2.io/docs/plus/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#next-steps, #next-steps + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            tool: {
              defaultValue: ["plus"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pm2docs",
      pathsToMatch: ["https://pm2.io/docs/enterprise/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#next-steps, #next-steps + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            tool: {
              defaultValue: ["enterprise"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pm2docs",
      pathsToMatch: ["https://pm2.io/docs/usage/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#next-steps, #next-steps + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            tool: {
              defaultValue: ["usage"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pm2docs",
      pathsToMatch: ["https://pm2.keymetrics.io/docs/usage**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#next-steps, #next-steps + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "article p, article li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            tool: {
              defaultValue: ["usage"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    pm2docs: {
      attributesForFaceting: ["type", "lang", "tool", "language"],
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