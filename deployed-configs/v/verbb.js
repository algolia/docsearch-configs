new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://verbb.io/craft-plugins/super-table/docs",
    "https://verbb.io/",
    "https://verbb.io/craft-plugins/field-manager/docs",
    "https://verbb.io/craft-plugins/cp-nav/docs",
    "https://verbb.io/craft-plugins/image-resizer/docs",
    "https://verbb.io/craft-plugins/workflow/docs",
    "https://verbb.io/craft-plugins/comments/docs",
    "https://verbb.io/craft-plugins/social-poster/docs",
    "https://verbb.io/craft-plugins/expanded-singles/docs",
    "https://verbb.io/craft-plugins/navigation/docs",
    "https://verbb.io/craft-plugins/postie/docs",
    "https://verbb.io/craft-plugins/gift-voucher/docs",
    "https://verbb.io/craft-plugins/events/docs",
    "https://verbb.io/craft-plugins/wishlist/docs",
    "https://verbb.io/craft-plugins/icon-picker/docs",
    "https://verbb.io/craft-plugins/formie/docs",
    "https://verbb.io/craft-plugins/vizy/docs",
  ],
  renderJavaScript: false,
  sitemaps: ["https://verbb.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://verbb.io/**"],
  schedule: "at 05:00 on Saturday",
  actions: [
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/super-table/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["super-table"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/field-manager/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["field-manager"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/cp-nav/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["cp-nav"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/image-resizer/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["image-resizer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/workflow/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["workflow"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/comments/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["comments"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/social-poster/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["social-poster"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: [
        "https://verbb.io/craft-plugins/expanded-singles/docs**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["expanded-singles"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/navigation/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["navigation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/postie/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["postie"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/gift-voucher/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["gift-voucher"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/events/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["events"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/wishlist/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["wishlist"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/icon-picker/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["icon-picker"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/formie/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["formie"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "verbb",
      pathsToMatch: ["https://verbb.io/craft-plugins/vizy/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-body-content h1",
            content:
              ".docs-body-content p, .docs-body-content li, .docs-body-content td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-body-content h2",
            lvl3: ".docs-body-content h3",
            lvl4: ".docs-body-content h4",
            lvl5: ".docs-body-content h5",
            plugin: {
              defaultValue: ["vizy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    verbb: {
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