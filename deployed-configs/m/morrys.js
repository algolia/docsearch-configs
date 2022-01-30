new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://morrys.github.io/wora/docs/",
    "https://morrys.github.io/",
    "https://relay-tools.github.io/relay-hooks/docs/",
    "https://relay-tools.github.io/",
    "https://morrys.github.io/react-relay-appsync/docs/",
    "https://morrys.github.io/react-relay-offline/docs/",
    "https://morrys.github.io/relay-angular/docs/",
    "https://morrys.github.io/relay-forms/docs/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://relay-tools.github.io/relay-hooks/sitemap.xml",
    "https://morrys.github.io/wora/sitemap.xml",
    "https://morrys.github.io/react-relay-appsync/sitemap.xml",
    "https://morrys.github.io/react-relay-offline/sitemap.xml",
    "https://morrys.github.io/relay-angular/sitemap.xml",
    "https://morrys.github.io/relay-forms/sitemap.xml",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://morrys.github.io/**",
    "https://relay-tools.github.io/**",
  ],
  schedule: "at 10:30 on Thursday",
  actions: [
    {
      indexName: "morrys",
      pathsToMatch: ["https://morrys.github.io/wora/docs/**"],
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["wora"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "morrys",
      pathsToMatch: ["https://relay-tools.github.io/relay-hooks/docs/**"],
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["relay-hooks"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "morrys",
      pathsToMatch: ["https://morrys.github.io/react-relay-appsync/docs/**"],
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["react-relay-appsync"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "morrys",
      pathsToMatch: ["https://morrys.github.io/react-relay-offline/docs/**"],
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["react-relay-offline"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "morrys",
      pathsToMatch: ["https://morrys.github.io/relay-angular/docs/**"],
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["relay-angular"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "morrys",
      pathsToMatch: ["https://morrys.github.io/relay-forms/docs/**"],
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["relay-forms"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    morrys: {
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