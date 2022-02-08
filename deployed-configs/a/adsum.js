new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://adactivesas.github.io/adsum-client-api/",
    "https://adactivesas.github.io/",
    "https://adactivesas.github.io/adsum-api-documentation/",
    "https://adactivesas.github.io/adsum-web-map/",
    "https://adactivesas.github.io/adsum-react-native-map/",
    "https://adactivesas.github.io/adactive-logger/",
    "https://adactivesas.github.io/adsum-client-analytics/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://adactivesas.github.io/adsum-web-map/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://adactivesas.github.io/**"],
  schedule: "at 01:00 on Tuesday",
  actions: [
    {
      indexName: "adsum",
      pathsToMatch: ["https://adactivesas.github.io/adsum-client-api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post article p, .post article li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            tags: {
              defaultValue: ["client"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "adsum",
      pathsToMatch: [
        "https://adactivesas.github.io/adsum-api-documentation/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post article p, .post article li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            tags: {
              defaultValue: ["rest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "adsum",
      pathsToMatch: ["https://adactivesas.github.io/adsum-web-map/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post article p, .post article li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            tags: {
              defaultValue: ["webMap"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "adsum",
      pathsToMatch: ["https://adactivesas.github.io/adsum-react-native-map/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post article p, .post article li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            tags: {
              defaultValue: ["rnMap"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "adsum",
      pathsToMatch: ["https://adactivesas.github.io/adactive-logger/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post article p, .post article li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            tags: {
              defaultValue: ["adactiveLogger"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "adsum",
      pathsToMatch: ["https://adactivesas.github.io/adsum-client-analytics/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post article p, .post article li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            tags: {
              defaultValue: ["analytics"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    adsum: {
      attributesForFaceting: ["type", "lang", "language", "version", "tags"],
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