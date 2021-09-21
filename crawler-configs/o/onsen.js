new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://onsen.io/v2/guide/",
    "https://onsen.io/",
    "https://onsen.io/v2/api/css.html",
    "https://onsen.io/v2/api/js/",
    "https://onsen.io/v2/api/angular1/",
    "https://onsen.io/v2/api/angular2/",
    "https://onsen.io/v2/api/react/",
    "https://onsen.io/v2/api/vue/",
    "https://onsen.io/v1/reference/javascript.html",
  ],
  renderJavaScript: false,
  sitemaps: ["https://onsen.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://onsen.io/**"],
  schedule: "at 20:30 on Thursday",
  actions: [
    {
      indexName: "onsen",
      pathsToMatch: ["https://onsen.io/v2/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-content h2",
            content: ".container-content p, .container-content li",
            lvl0: {
              selectors: ".toc-title, .breadcrumb a",
              defaultValue: "Guide",
            },
            lvl2: ".container-content h3",
            lvl3: ".container-content h4",
            lvl4: ".container-content h5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "onsen",
      pathsToMatch: ["https://onsen.io/v2/api/css.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-content h2",
            content: ".container-content p, .container-content li",
            lvl0: {
              selectors: ".toc-title, .breadcrumb a",
              defaultValue: "Guide",
            },
            lvl2: ".container-content h3",
            lvl3: ".container-content h4",
            lvl4: ".container-content h5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "onsen",
      pathsToMatch: ["https://onsen.io/v2/api/js/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-content h2",
            content: ".container-content p, .container-content li",
            lvl0: {
              selectors: ".toc-title, .breadcrumb a",
              defaultValue: "Guide",
            },
            lvl2: ".container-content h3",
            lvl3: ".container-content h4",
            lvl4: ".container-content h5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "onsen",
      pathsToMatch: ["https://onsen.io/v2/api/angular1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-content h2",
            content: ".container-content p, .container-content li",
            lvl0: {
              selectors: ".toc-title, .breadcrumb a",
              defaultValue: "Guide",
            },
            lvl2: ".container-content h3",
            lvl3: ".container-content h4",
            lvl4: ".container-content h5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "onsen",
      pathsToMatch: ["https://onsen.io/v2/api/angular2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-content h2",
            content: ".container-content p, .container-content li",
            lvl0: {
              selectors: ".toc-title, .breadcrumb a",
              defaultValue: "Guide",
            },
            lvl2: ".container-content h3",
            lvl3: ".container-content h4",
            lvl4: ".container-content h5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "onsen",
      pathsToMatch: ["https://onsen.io/v2/api/react/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-content h2",
            content: ".container-content p, .container-content li",
            lvl0: {
              selectors: ".toc-title, .breadcrumb a",
              defaultValue: "Guide",
            },
            lvl2: ".container-content h3",
            lvl3: ".container-content h4",
            lvl4: ".container-content h5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "onsen",
      pathsToMatch: ["https://onsen.io/v2/api/vue/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-content h2",
            content: ".container-content p, .container-content li",
            lvl0: {
              selectors: ".toc-title, .breadcrumb a",
              defaultValue: "Guide",
            },
            lvl2: ".container-content h3",
            lvl3: ".container-content h4",
            lvl4: ".container-content h5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "onsen",
      pathsToMatch: ["https://onsen.io/v1/reference/javascript.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-content h2",
            content: ".container-content p, .container-content li",
            lvl0: {
              selectors: ".toc-title, .breadcrumb a",
              defaultValue: "Guide",
            },
            lvl2: ".container-content h3",
            lvl3: ".container-content h4",
            lvl4: ".container-content h5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    onsen: {
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