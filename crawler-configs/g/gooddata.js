new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://sdk.gooddata.com/gooddata-ui/docs/",
    "https://sdk.gooddata.com/",
    "https://sdk.gooddata.com/gooddata-ui/docs/about_gooddataui.html",
    "https://sdk.gooddata.com/gooddata-ui-apidocs/v8.5.0/",
    "https://sdk.gooddata.com/gooddata-ui-apidocs/v8.6.0/",
    "https://sdk.gooddata.com/gooddata-ui-apidocs/vNext/",
    "https://sdk.gooddata.com/gooddata-ui-apidocs/v8.5.0/docs/index.html",
    "https://sdk.gooddata.com/gooddata-ui-apidocs/v8.6.0/docs/index.html",
    "https://sdk.gooddata.com/gooddata-ui-apidocs/vNext/docs/index.html",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://sdk.gooddata.com/gooddata-ui/sitemap.xml",
    "https://sdk.gooddata.com/gooddata-ui-apidocs/v8.5.0/sitemap.xml",
    "https://sdk.gooddata.com/gooddata-ui-apidocs/v8.6.0/sitemap.xml",
    "https://sdk.gooddata.com/gooddata-ui-apidocs/vNext/sitemap.xml",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://sdk.gooddata.com/**"],
  schedule: "at 06:30 on Wednesday",
  actions: [
    {
      indexName: "gooddata",
      pathsToMatch: ["https://sdk.gooddata.com/gooddata-ui/docs/**"],
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
              defaultValue: ["gooddata-ui-docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gooddata",
      pathsToMatch: [
        "https://sdk.gooddata.com/gooddata-ui/docs/about_gooddataui.html**/**",
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
              defaultValue: ["gooddata-ui-docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gooddata",
      pathsToMatch: ["https://sdk.gooddata.com/gooddata-ui-apidocs/v8.5.0/**"],
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
            version: {
              defaultValue: ["8.5.0"],
            },
            tags: {
              defaultValue: ["gooddata-ui-apidocs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gooddata",
      pathsToMatch: ["https://sdk.gooddata.com/gooddata-ui-apidocs/v8.6.0/**"],
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
            version: {
              defaultValue: ["8.6.0"],
            },
            tags: {
              defaultValue: ["gooddata-ui-apidocs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gooddata",
      pathsToMatch: ["https://sdk.gooddata.com/gooddata-ui-apidocs/vNext/**"],
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
            version: {
              defaultValue: ["Next"],
            },
            tags: {
              defaultValue: ["gooddata-ui-apidocs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gooddata",
      pathsToMatch: [
        "https://sdk.gooddata.com/gooddata-ui-apidocs/v8.5.0/docs/index.html**/**",
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
            version: {
              defaultValue: ["8.5.0"],
            },
            tags: {
              defaultValue: ["gooddata-ui-apidocs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gooddata",
      pathsToMatch: [
        "https://sdk.gooddata.com/gooddata-ui-apidocs/v8.6.0/docs/index.html**/**",
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
            version: {
              defaultValue: ["8.6.0"],
            },
            tags: {
              defaultValue: ["gooddata-ui-apidocs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gooddata",
      pathsToMatch: [
        "https://sdk.gooddata.com/gooddata-ui-apidocs/vNext/docs/index.html**/**",
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
            version: {
              defaultValue: ["Next"],
            },
            tags: {
              defaultValue: ["gooddata-ui-apidocs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    gooddata: {
      attributesForFaceting: ["type", "lang", "version", "tags"],
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