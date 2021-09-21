new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://documentation.elasticpath.com/commerce-manager/docs/",
    "https://documentation.elasticpath.com/",
    "https://documentation.elasticpath.com/storefront-react/docs/",
    "https://documentation.elasticpath.com/cloudops-aws/docs/",
    "https://documentation.elasticpath.com/cloudops-azure/docs/",
    "https://documentation.elasticpath.com/chatbot/docs/",
    "https://documentation.elasticpath.com/alexa-skill/docs/",
    "https://documentation.elasticpath.com/account-management/docs/",
    "https://documentation.elasticpath.com/commerce/docs/",
    "https://documentation.elasticpath.com/cloudops-kubernetes/docs/",
    "https://documentation.elasticpath.com/bloomreach-feed/docs/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://documentation.elasticpath.com/storefront-react/sitemap.xml",
    "https://documentation.elasticpath.com/commerce-manager/sitemap.xml",
    "https://documentation.elasticpath.com/cloudops-aws/sitemap.xml",
    "https://documentation.elasticpath.com/cloudops-azure/sitemap.xml",
    "https://documentation.elasticpath.com/chatbot/sitemap.xml",
    "https://documentation.elasticpath.com/alexa-skill/sitemap.xml",
    "https://documentation.elasticpath.com/account-management/sitemap.xml",
    "https://documentation.elasticpath.com/commerce/sitemap.xml",
    "https://documentation.elasticpath.com/cloudops-kubernetes/sitemap.xml",
    "https://documentation.elasticpath.com/bloomreach-feed/sitemap.xml",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://documentation.elasticpath.com/**"],
  schedule: "at 20:20 on Tuesday",
  actions: [
    {
      indexName: "elasticpath_unified",
      pathsToMatch: [
        "https://documentation.elasticpath.com/commerce-manager/docs/**",
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["commerce-manager"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elasticpath_unified",
      pathsToMatch: [
        "https://documentation.elasticpath.com/storefront-react/docs/**",
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["react_pwa"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elasticpath_unified",
      pathsToMatch: [
        "https://documentation.elasticpath.com/cloudops-aws/docs/**",
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["cloudops-aws"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elasticpath_unified",
      pathsToMatch: [
        "https://documentation.elasticpath.com/cloudops-azure/docs/**",
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["cloudops-azure"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elasticpath_unified",
      pathsToMatch: ["https://documentation.elasticpath.com/chatbot/docs/**"],
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
              defaultValue: ["chatbot"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elasticpath_unified",
      pathsToMatch: [
        "https://documentation.elasticpath.com/alexa-skill/docs/**",
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["alexa-skill"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elasticpath_unified",
      pathsToMatch: [
        "https://documentation.elasticpath.com/account-management/docs/**",
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["account-management"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elasticpath_unified",
      pathsToMatch: ["https://documentation.elasticpath.com/commerce/docs/**"],
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
              defaultValue: ["commerce"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elasticpath_unified",
      pathsToMatch: [
        "https://documentation.elasticpath.com/cloudops-kubernetes/docs/**",
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["cloudops-kubernetes"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "elasticpath_unified",
      pathsToMatch: [
        "https://documentation.elasticpath.com/bloomreach-feed/docs/**",
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
            lvl5: ".post h5",
            tags: {
              defaultValue: ["bloomreach-feed"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    elasticpath_unified: {
      attributesForFaceting: ["type", "lang", "tags", "language", "version"],
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