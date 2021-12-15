new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://eslint.org/blog/",
    "https://eslint.org/",
    "https://eslint.org/docs/rules/",
    "https://eslint.org/docs/user-guide/",
    "https://eslint.org/docs/developer-guide/",
    "https://eslint.org/docs/maintainer-guide/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://eslint.org/sitemap.xml"],
  exclusionPatterns: [
    "**.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://eslint.org/**"],
  schedule: "at 20:40 on Tuesday",
  actions: [
    {
      indexName: "eslint",
      pathsToMatch: ["https://eslint.org/blog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "header, input";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h1",
            content: "main article p, main article li",
            lvl0: {
              selectors: "",
              defaultValue: "Blog",
            },
            tags: {
              defaultValue: ["blog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "eslint",
      pathsToMatch: ["https://eslint.org/docs/rules/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "header, input";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h2",
            content: "main article p, main article li",
            lvl0: {
              selectors: "main article h1",
            },
            lvl2: "main article h3",
            lvl3: "main article h4",
            lvl4: "main article h5",
            area: {
              defaultValue: ["rules"],
            },
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "eslint",
      pathsToMatch: ["https://eslint.org/docs/user-guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "header, input";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h2",
            content: "main article p, main article li",
            lvl0: {
              selectors: "main article h1",
            },
            lvl2: "main article h3",
            lvl3: "main article h4",
            lvl4: "main article h5",
            area: {
              defaultValue: ["user-guide"],
            },
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "eslint",
      pathsToMatch: ["https://eslint.org/docs/developer-guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "header, input";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h2",
            content: "main article p, main article li",
            lvl0: {
              selectors: "main article h1",
            },
            lvl2: "main article h3",
            lvl3: "main article h4",
            lvl4: "main article h5",
            area: {
              defaultValue: ["developer-guide"],
            },
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "eslint",
      pathsToMatch: ["https://eslint.org/docs/maintainer-guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "header, input";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h2",
            content: "main article p, main article li",
            lvl0: {
              selectors: "main article h1",
            },
            lvl2: "main article h3",
            lvl3: "main article h4",
            lvl4: "main article h5",
            area: {
              defaultValue: ["maintainer-guide"],
            },
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    eslint: {
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