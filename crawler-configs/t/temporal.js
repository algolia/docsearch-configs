new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.temporal.io/docs/concepts/introduction",
    "https://docs.temporal.io/",
    "https://docs.temporal.io/docs/concepts/workflows",
    "https://docs.temporal.io/docs/concepts/activities",
    "https://docs.temporal.io/docs/concepts/events",
    "https://docs.temporal.io/docs/concepts/queries",
    "https://docs.temporal.io/docs/concepts/task-queues",
    "https://docs.temporal.io/docs/glossary",
    "https://docs.temporal.io/docs/server/introduction",
    "https://docs.temporal.io/docs/server/quick-install",
    "https://docs.temporal.io/docs/server/production-deployment",
    "https://docs.temporal.io/docs/server/server-architecture",
    "https://docs.temporal.io/docs/server/versions-and-dependencies",
    "https://docs.temporal.io/docs/server/namespaces",
    "https://docs.temporal.io/docs/server/workflow-search",
    "https://docs.temporal.io/docs/server/elasticsearch-setup",
    "https://docs.temporal.io/docs/server/options",
    "https://docs.temporal.io/docs/server/security",
    "https://docs.temporal.io/docs/server/configuration",
    "https://docs.temporal.io/docs/server/archive-data",
    "https://docs.temporal.io/docs/go/introduction",
    "https://docs.temporal.io/docs/java/introduction",
    "https://docs.temporal.io/docs/php/introduction",
    "https://docs.temporal.io/docs/node/introduction",
    "https://docs.temporal.io/docs/system-tools/tctl",
    "https://docs.temporal.io/blog",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.temporal.io/sitemap.xml"],
  exclusionPatterns: [
    "https://docs.temporal.io/blog/tags/**",
    "https://docs.temporal.io/docs/shared/**",
  ],
  ignoreCanonicalTo: true,
  discoveryPatterns: ["https://docs.temporal.io/**"],
  schedule: "at 19:00 on Friday",
  actions: [
    {
      indexName: "temporal",
      pathsToMatch: [
        "https://docs.temporal.io/docs/concepts/introduction**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "999",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/concepts/workflows**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "999",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/concepts/activities**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "999",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/concepts/events**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "999",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/concepts/queries**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "999",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/concepts/task-queues**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "999",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/glossary**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "999",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/server/introduction**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/server/quick-install**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: [
        "https://docs.temporal.io/docs/server/production-deployment**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: [
        "https://docs.temporal.io/docs/server/server-architecture**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: [
        "https://docs.temporal.io/docs/server/versions-and-dependencies**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/server/namespaces**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: [
        "https://docs.temporal.io/docs/server/workflow-search**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: [
        "https://docs.temporal.io/docs/server/elasticsearch-setup**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/server/options**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/server/security**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/server/configuration**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/server/archive-data**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "998",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/go/introduction**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "997",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/java/introduction**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "996",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/php/introduction**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "995",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/node/introduction**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "994",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/docs/system-tools/tctl**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "994",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "temporal",
      pathsToMatch: ["https://docs.temporal.io/blog**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            lvl6: "article h6",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    temporal: {
      attributesForFaceting: [
        "type",
        "lang",
        "language",
        "version",
        "docusaurus_tag",
      ],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
      ],
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
      separatorsToIndex: "_",
    },
  },
});